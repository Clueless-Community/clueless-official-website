import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/clientApp';
import CircularProgress from '@mui/material/CircularProgress';

const Usercheck = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const userId = session?.user?.id.toString() as string;

    const joiningMail = React.useCallback(async () => {
        await fetch('/api/mail/welcome-mail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: userId,
                email: session?.user.email,
                image: session?.user.image,
                name: session?.user.name
            })
        })
    }, [session?.user.email, session?.user.image, session?.user.name, userId])

    const checkUser = React.useCallback(async () => {
        if (userId) {
            const userRef = doc(db, "users", userId);
            const userDocSnap = await getDoc(userRef);

            if (userDocSnap.exists()) {
                console.log("user exists");
            } else {
                await setDoc(doc(db, 'users', userId), {
                    uid: userId,
                    name: session?.user?.name,
                    image: session?.user?.image,
                    email: session?.user?.email,
                })
                console.log("New User Added");
                try{
                    await joiningMail();
                    console.log("Welcome mail sent.");
                }catch(e){
                    console.log("Some problem faced while sending the welcome email");
                }
            }
            router.push('/');
        }
    }, [joiningMail, router, session?.user?.email, session?.user?.image, session?.user?.name, userId])

    React.useEffect(() => {
        if (session) {
            checkUser()
        }
    }, [checkUser, session])

    return (
        <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
        </div>
    )
}

export default Usercheck