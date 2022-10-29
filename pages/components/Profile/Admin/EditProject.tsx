/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
import { TextField, Snackbar, Alert } from "@mui/material";
import TechStackAutoComplete from "../../shared/TechStackAutoComplete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { theme } from "../../../../styles/theme";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../../lib/clientApp";
import { useSession } from "next-auth/react";
import { doc, setDoc } from "firebase/firestore";
import { useTheme } from "next-themes";


interface Props {
  projectId: string;
  projectImage: string;
  projectName: string;
  publicLink?: string;
  gitHubLink?: string;
  projectDesc: string;
  techStacks: { name: string }[];
  handleProjectFetch: () => Promise<void>;
}

const editSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
      <path d="M18.660 2.040 C 18.367 2.094,18.024 2.220,17.724 2.385 C 17.499 2.509,17.002 2.986,14.346 5.635 C 12.423 7.553,11.158 8.845,11.037 9.015 C 10.727 9.451,10.629 9.768,10.297 11.411 C 9.954 13.101,9.939 13.303,10.129 13.590 C 10.200 13.699,10.308 13.787,10.453 13.858 C 10.835 14.045,10.941 14.038,12.593 13.703 C 14.204 13.376,14.502 13.285,14.957 12.981 C 15.136 12.861,16.218 11.804,18.363 9.652 C 21.243 6.764,21.518 6.477,21.649 6.220 C 21.853 5.820,21.962 5.434,21.988 5.019 C 22.072 3.681,21.182 2.454,19.871 2.096 C 19.606 2.023,18.924 1.992,18.660 2.040 M5.499 4.043 C 4.383 4.230,3.461 5.048,3.114 6.160 L 3.020 6.460 3.020 12.500 L 3.020 18.540 3.114 18.840 C 3.422 19.827,4.173 20.578,5.160 20.886 L 5.460 20.980 11.500 20.980 L 17.540 20.980 17.840 20.886 C 18.827 20.578,19.578 19.827,19.886 18.840 C 19.979 18.543,19.980 18.523,19.980 16.580 L 19.980 14.620 19.889 14.450 C 19.724 14.140,19.329 13.970,18.874 14.011 C 18.439 14.051,18.141 14.274,18.041 14.635 C 18.017 14.721,18.000 15.453,18.000 16.444 C 18.000 18.250,17.991 18.340,17.779 18.618 C 17.718 18.698,17.585 18.813,17.484 18.872 L 17.300 18.980 11.500 18.980 L 5.700 18.980 5.516 18.872 C 5.415 18.813,5.284 18.700,5.225 18.623 C 4.987 18.311,5.000 18.655,5.000 12.522 C 5.000 6.182,4.978 6.628,5.303 6.303 C 5.601 6.005,5.638 6.000,7.557 6.000 C 8.548 6.000,9.279 5.983,9.365 5.959 C 9.586 5.898,9.770 5.755,9.880 5.558 C 9.967 5.402,9.980 5.332,9.979 5.000 C 9.978 4.567,9.898 4.355,9.678 4.199 C 9.412 4.009,9.303 4.000,7.444 4.005 C 6.485 4.007,5.609 4.025,5.499 4.043 M19.500 4.095 C 19.739 4.207,19.809 4.281,19.923 4.538 C 20.022 4.761,20.012 5.024,19.896 5.248 C 19.858 5.320,19.611 5.601,19.346 5.871 L 18.864 6.363 18.250 5.751 L 17.637 5.140 18.135 4.650 C 18.809 3.985,19.054 3.885,19.500 4.095 M16.829 7.169 C 17.143 7.483,17.400 7.758,17.400 7.781 C 17.400 7.804,16.604 8.616,15.630 9.586 C 14.159 11.051,13.830 11.360,13.680 11.415 C 13.494 11.483,12.317 11.731,12.293 11.707 C 12.269 11.683,12.517 10.506,12.585 10.320 C 12.640 10.170,12.949 9.841,14.414 8.370 C 15.384 7.396,16.196 6.600,16.218 6.600 C 16.241 6.600,16.516 6.856,16.829 7.169
    "stroke="none" fillRule="evenodd"  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root">
      </path>
    </svg>
      );

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  [theme.breakpoints.down("sm")]: {
    maxWidth: 350,
    mt: 30,
    mb: 30,
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const MAX_PROJECT_NAME_LENGTH = 100;
const MAX_DESC_LENGTH = 200;
const MAX_GITHUB_LINK_LENGTH = 100;
const MAX_PUBLIC_LINK_LENGTH = 100;

const EditProject: React.FC<Props> = ({
  projectId,
  projectName,
  projectImage,
  projectDesc,
  publicLink,
  gitHubLink,
  techStacks,
  handleProjectFetch,
}) => {
  const [editIsOpen, setEditIsOpen] = React.useState<boolean>(false);
  const { data: session } = useSession();

  const uid = session?.user?.id;
  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setEditIsOpen(true);
  };

  const [projectNameNew, _setProjectNameNew] = React.useState<string>(projectName);
  const [projectImageNew, setProjectImageNew] = React.useState<string>(projectImage);
  const [media, setMedia] = React.useState<File>();
  const [projectDescNew, _setProjectDescNew] = React.useState<string>(projectDesc);
  const [publicLinkNew, _setPublicLinkNew] = React.useState<string>(publicLink as string);
  const [gitHubLinkNew, _setGitHubLinkNew] = React.useState<string>(gitHubLink as string);
  const [projectTechStacks, setProjectTechStacks] = React.useState<{ name: string }[]>(techStacks);
  const [downloadURL, setDownloadURL] = React.useState<string>("");
  const { currentTheme, setTheme } = useTheme();
  const setProjectNameNew = (val: string) => _setProjectNameNew(val.slice(0, MAX_PROJECT_NAME_LENGTH));
  const setProjectDescNew = (val: string) => _setProjectDescNew(val.slice(0, MAX_DESC_LENGTH));
  const setPublicLinkNew = (val: string) => _setPublicLinkNew(val.slice(0, MAX_PUBLIC_LINK_LENGTH));
  const setGitHubLinkNew = (val: string) => _setGitHubLinkNew(val.slice(0, MAX_GITHUB_LINK_LENGTH));

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      readerEvent?.target?.result && setProjectImageNew(readerEvent?.target.result as string);
    };
  };

  const handleClose = () => {
    setEditIsOpen(false);
  };

  const validateProject = () => {
    if (
      projectTechStacks?.length === 0 ||
      projectDescNew === "" ||
      projectImageNew === "" ||
      projectNameNew === "" ||
      gitHubLinkNew === ""
    )
      return true;
    else return false;
  };

  //Firebase Ahead
  const handleImageUpload = async () => {
    const date = new Date();
    const projectImageRef = ref(storage, `${uid}/project/${date.getTime()}_project.jpg`);
    const uploadTask = media && uploadBytesResumable(projectImageRef, media);
    uploadTask &&
      uploadTask.on(
        "state_changed",
        (snapshot: { bytesTransferred: number; totalBytes: number; state: any }) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error: { code: any }) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURLOnUpload) => {
            console.log("File uploaded");
            setDownloadURL(downloadURLOnUpload);
          });
        }
      );
  };

  const handleUpload = async () => {
    if (uid) {
      if (projectImage !== projectImageNew) {
        await handleImageUpload();
      }
      const projectRef = doc(db, `users/${uid}/projects`, projectId);
      try {
        await setDoc(projectRef, {
          project_name: projectNameNew,
          project_desc: projectDescNew,
          project_image: projectImageNew,
          github_link: gitHubLinkNew,
          public_link: publicLinkNew,
          techstacks: projectTechStacks,
        });
        console.log("Project Added.");
      } catch (e) {
        console.log(e);
      }
    }
  };

  //Snackbar Settings
  const [open, setOpen] = React.useState(false);

  const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <button
        className=" p-1 rounded-full w-9 h-9 flex items-center justify-center transition-all"
        onClick={handleOpen}
      >
        {editSvg}
      </button>
      <Modal
        open={editIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{
          [theme.breakpoints.down("md")]: {
            overflowY: "scroll",
          },
        }}
      >
        <Box sx={style} key={projectId}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography id="edit-modal-title" variant="h6" component="h2">
              Edit Project
            </Typography>
            <Close onClick={() => handleClose()} sx={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }}
          >
            <label htmlFor="file-upload" className=" cursor-pointer h-52 relative">
              <img src={projectImageNew} alt="" className=" rounded-lg md:w-80 h-52 absolute -z-40" />
              <div className="absolute rounded-lg w-52 h-52 bg-black opacity-50 flex justify-center items-center -z-20"></div>
              <div className="w-52 h-52 flex justify-center items-center text-white">
                <CloudUploadIcon fontSize="large" />
              </div>
            </label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only "
              accept="image/*"
              onChange={(e) => {
                setMedia(e.target?.files![0] as File);
                addImageToPost(e);
              }}
            />
            <Box
              sx={{
                ml: "5%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2.5,
                [theme.breakpoints.down("sm")]: {
                  ml: 0,
                  mt: 3,
                },
              }}
            >
              <TextField
                label="Project Name"
                required
                variant="outlined"
                sx={{ width: "100%" }}
                defaultValue={projectNameNew}
                value={projectNameNew}
                onChange={(e) => {
                  setProjectNameNew(e.target.value);
                }}
              />
              <TextField
                label="GitHub Link"
                required
                variant="outlined"
                sx={{ width: "100%" }}
                defaultValue={gitHubLinkNew}
                value={gitHubLinkNew}
                onChange={(e) => {
                  setGitHubLinkNew(e.target.value);
                }}
              />
              <TextField
                label="Deployed URL"
                variant="outlined"
                sx={{ width: "100%" }}
                defaultValue={publicLinkNew}
                value={publicLinkNew}
                onChange={(e) => {
                  setPublicLinkNew(e.target.value);
                }}
              />
            </Box>
          </Box>
          <TextField
            label="Project Description"
            variant="outlined"
            required
            multiline
            sx={{ width: "100%", mt: 3.5 }}
            rows={5}
            defaultValue={projectDescNew}
            value={projectDescNew}
            onChange={(e) => {
              setProjectDescNew(e.target.value);
            }}
          />
          <Box sx={{ mt: 2.5 }}>
            <TechStackAutoComplete projectTechStacks={projectTechStacks} setProjectTechStacks={setProjectTechStacks} />
          </Box>
          {validateProject() ? (
            <button
              className="btn-blue bg-gray-300 hover:bg-gray-300 mt-5 float-right px-6 py-2 shadow-blue-600"
              disabled
            >
              Save
            </button>
          ) : (
            <button
              className="btn-blue mt-5 float-right px-6 py-2 shadow-blue-600"
              onClick={async () => {
                await handleUpload();
                handleClose();
                await handleProjectFetch();
                setOpen(true);
              }}
            >
              Save
            </button>
          )}
          <button className="btn-red mt-5 float-right px-6 py-2 shadow-red-600 mr-5" onClick={handleClose}>
            Discard
          </button>
        </Box>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: "100%" }}>
          Your project is updated.😉
        </Alert>
      </Snackbar>
    </>
  );
};
export default EditProject;
