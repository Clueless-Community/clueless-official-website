import React from "react";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupIcon from '@mui/icons-material/Group';

import {NextComponentType} from 'next'
import { Apps, Assignment, AutoAwesome, AutoAwesomeMotion, Bookmark, Build, Cloud, CloudDone } from "@mui/icons-material";
type Props = {

}


const SideBar:  NextComponentType = () =>{
    return (
        <>
        <div className="bg-[#333A52] h-screen w-[280px]">
        <img className="rounded-[50%] relative top-12 left-10" src="/profileImg.png" alt="" />
            <div className="mt-16 text-xl font-medium tracking-wide relative left-8">
                <h1 className="text-white font-raleway my-7">Roshan Kumar</h1>
                <div className="flex flex-col items-left justify-around">

                    <div className="flex bg-[#121212] w-4/5 px-4 py-1 rounded-md my-3">
                        <Apps className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">Dashboard</h1>
                    </div>

                    <div className="flex w-4/5 px-4 py-1 rounded-md my-3">
                        <AutoAwesomeMotion className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">Challenges</h1>
                    </div>

                    <div className="flex w-4/5 px-4 py-1 rounded-md my-3">
                        <Assignment className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">Resources</h1>
                    </div>

                    <div className="flex w-4/5 px-4 py-1 rounded-md my-3">
                        <BookmarksIcon className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">Blogs</h1>
                    </div>

                    <div className="flex w-4/5 px-4 py-1 rounded-md my-3">
                        <Build className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">Big Projects</h1>
                    </div>

                    <div className="flex w-4/5 px-4 py-1 rounded-md my-3">
                        <CloudDone className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">Open Source</h1>
                    </div>
                    <hr className="relative left-[-32px] my-10" />

                    <div className="flex w-4/5 px-4 py-1 rounded-md my-3">
                        <GroupIcon className="text-white mx-2 my-1"/>
                        <h1 className="text-white font-nunito my-1">All Admin</h1>
                    </div>

                </div>

                
                    
                


            </div>
        </div>
        </>
    )
}

export default SideBar