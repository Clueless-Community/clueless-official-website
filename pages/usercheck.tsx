import React from 'react'
import { useRouter} from 'next/router'
import { template } from '../helpers/template';
import { useSession } from 'next-auth/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../database/firebase/clientApp';
import CircularProgress from '@mui/material/CircularProgress';

const usercheck = () => {
    const router = useRouter();
    const { data : session} = useSession();
    const userId = session?.user?.id.toString() as string;

    const checkUser =  async () => {
        if(userId){
            const userRef = doc(db, "users", userId);
            const userDocSnap = await getDoc(userRef);
            console.log(userDocSnap);
            
            if(userDocSnap.exists()){
                console.log("user exists");
            }else{
                await setDoc(doc(db, 'users', userId), {
                    uid : userId,
                    name : session?.user?.name,
                    image : session?.user?.image,
                    email : session?.user?.email,
                })
                console.log("New User Added");
            }
            router.push('/');
        }
    }

    if(session){
        try{
            checkUser();
        }catch(e){
            console.log("Something went wrong : ", e);
            
        }
    }else{
        console.log("Authentication Failed");  
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
        </div>
    )
}

export default usercheck