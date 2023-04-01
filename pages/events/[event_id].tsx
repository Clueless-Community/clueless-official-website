/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../lib/clientApp';
import { format } from 'date-fns';
import {
  Alert,
  Box,
  CircularProgress,
  Modal,
  Snackbar,
  Typography,
} from '@mui/material';
import HttpsIcon from '@mui/icons-material/Https';
import Link from 'next/link';
import Head from 'next/head';
import ViewTicket from '../components/Modals/ViewTicket';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 469,
  height: 225,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const EventDetails: React.FC = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { event_id } = router.query;

  const [event, setEvent] = React.useState<any | undefined>();
  const [isRegistered, setIsRegistered] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);

  const fetchEvent = React.useCallback(async () => {
    const eventRef = doc(db, 'events', event_id as string);

    const eventsnap = await getDoc(eventRef);
    if (eventsnap.exists()) {
      const data = eventsnap.data() as any;
      setEvent(data);
      const formattedDated = format(
        new Date(data.date.seconds * 1000),
        'do LLLLLL, yyyy'
      );
      setDate(formattedDated);
    } else {
      router.push(`/404`);
    }
  }, [event_id, router]);

  const checkIfRegistered = React.useCallback(async () => {
    if (userId) {
      const userRegistrationRef = doc(
        db,
        `events/${event_id}/registrations`,
        userId
      );
      const userRegistrationSnap = await getDoc(userRegistrationRef);
      if (userRegistrationSnap.exists()) {
        console.log('You are already registered');
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    }
  }, [event_id, userId]);

  React.useEffect(() => {
    if (!router.isReady) return;
    fetchEvent();
    checkIfRegistered();
  }, [checkIfRegistered, fetchEvent, router.isReady]);

  const registrationMail = React.useCallback(async () => {
    if (event) {
      await fetch('/api/mail/even-registration-mail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
          email: session?.user.email,
          registar_name: session?.user.name,
          venue: event.venue_name,
          time_period: event.time_period,
          event_name: event.event_name,
          ticket_no: `${event.event_id}-${userId}`,
          date: date,
        }),
      });
    }
  }, [date, event, session?.user.email, session?.user.name, userId]);

  const handleRegistration = async () => {
    if (userId) {
      const registrationRef = doc(
        db,
        `events/${event_id}/registrations`,
        userId
      );
      try {
        await setDoc(registrationRef, {
          uid: userId,
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
          registration_time: serverTimestamp(),
        });
        console.log('Registered.');
        setIsRegistered(true);
        setOpen(true);

        try {
          await registrationMail();
          console.log('Registration Mail Sent.');
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  //Snack Bars Settings
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //Modal Settings
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  return event ? (
    <div>
      <Head>
        <title>{event.event_name}</title>
        <meta
          name="description"
          content="A virtual Open source and development community"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/WVBNFXB/Clueless-SS.png"
        />
        {/* <meta name="og:image" content={event.event_banner_image} /> */}
      </Head>
      <Navbar />
      <img
        src={event.event_banner_image}
        className="w-full h-[150px] md:h-[250px] xl:h-[410px] object-cover absolute"
        alt=""
      />
      <div className="relative z-1 top-10 md:top-20 xl:top-52">
        <div className="flex flex-col justify-center xl:px-24 px-8 my-20 space-y-8 xl:space-y-3">
          <div className="w-full flex justify-between items-start space-x-4">
            <img
              src={event.event_icon_image}
              className="w-28 h-28 md:w-36 md:h-36 xl:w-56 xl:h-56 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="xl:ml-60 ">
            <div className="xl:space-y-6 space-y-3 xl:-mt-12">
              <div className="flex justify-between">
                <div className="space-y-3">
                  <span className="bg-[#1954ca4b] rounded-full py-2 px-3 font-semibold xl:text-xl text-lg">
                    offline
                  </span>
                  <h1 className="xl:text-4xl text-3xl font-semibold ">
                    {event.event_name}
                  </h1>
                </div>
                {session ? (
                  <div>
                    {isRegistered ? (
                      <div className="space-x-2 flex">
                        <ViewTicket
                          eventId={`${event.event_id}-${session?.user.name}-Verified`}
                          eventName={event.event_name}
                          date={date}
                          venue={event.venue_name}
                          eventLogo={event.event_icon_image}
                          tokenNo={`${event.event_id}-${userId}`}
                          eventMode={event.event_mode}
                        />
                      </div>
                    ) : (
                      <button className="btn-blue" onClick={handleRegistration}>
                        Register
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    <button onClick={handleOpenModal} className="btn-blue">
                      Register
                    </button>

                    <Modal
                      open={openModal}
                      onClose={handleModalClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Box className="w-full flex justify-center mb-2">
                          <HttpsIcon className="text-[#F24E1E] h-[45px] w-[45px] mx-auto" />
                        </Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          className="text-center font-nunito text-[24px]"
                        >
                          Sign-In Required
                        </Typography>
                        <Link href="/auth/signin" passHref>
                          <Box className="w-full flex justify-center mt-4">
                            <button className="btn-blue">Sign In</button>
                          </Box>
                        </Link>
                      </Box>
                    </Modal>
                  </div>
                )}
              </div>
              <div className={`text-xl xl:space-y-6 space-y-3`}>
                <div
                  className={`flex flex-col xl:flex-row xl:space-x-2 xl:items-center`}
                >
                  <h1 className="font-semibold text-skin-main">Venue :</h1>
                  <h1> {event.venue_name}</h1>
                </div>
                <div
                  className={`flex flex-col xl:flex-row xl:items-center xl:space-x-2 xl:w-fit w-full`}
                >
                  <h1 className="font-semibold text-skin-main">
                    Date & Time :
                  </h1>
                  <h1>
                    {date} - {event.time_period}
                  </h1>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="xl:text-3xl text-2xl font-semibold text-skin-main">
                  Instructor / speaker{' '}
                </h1>
                <div className="flex justify-start max-w-fit flex-wrap child:mr-28 child:mb-8">
                  {event.speakers_info.map((speaker: any, i: number) => {
                    return (
                      <section
                        className="flex justify-start space-x-8 mt-5"
                        key={i}
                      >
                        <img
                          src={speaker.image}
                          alt=""
                          className="xl:w-28 w-20 rounded-full border-dashed border-2 border-[#1955CA] m-auto"
                        />
                        <div className="flex flex-col items-start justify-center space-y-2">
                          <h1 className="xl:text-xl text-lg">{speaker.name}</h1>
                          <div className="flex justify-center space-x-4 child:text-[#7D7D7D] child:text-3xl">
                            {speaker.linkedinUrl && (
                              <a
                                href={speaker.linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiFillLinkedin />
                              </a>
                            )}
                            {speaker.gitHubURL && (
                              <a
                                href={speaker.gitHubURL}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiOutlineGithub />
                              </a>
                            )}
                            {speaker.twitterURL && (
                              <a
                                href={speaker.twitterURL}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiOutlineTwitter />
                              </a>
                            )}
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold">Agenda</h1>
                <div className="space-y-6">
                  {event.agenda?.map((agenda: any, i: number) => {
                    return (
                      <div
                        className="flex flex-col xl:flex-row justify-start xl:items-center xl:text-xl text-lg"
                        key={i}
                      >
                        <div className="flex xl:items-center justify-start space-x-2 xl:w-80">
                          <GoPrimitiveDot className="text-2xl" />
                          <h1 className="">{agenda.time}</h1>
                        </div>
                        <h1 className="w-full ml-2 xl:ml-0">
                          {agenda.description}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                You are successfully registered for {event.event_name}! 🎉
              </Alert>
            </Snackbar>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  );
};

export default EventDetails;
