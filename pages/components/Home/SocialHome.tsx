import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram } from '@mui/icons-material';

const SocialHome = () => {
    return (
        <div>
            <p className='sm:px-28 px-5 text-4xl mt-20 font-bold text-center'>Follow Us On 👇</p>
            <div className='text-7xl flex justify-center sm:first-letter:px-28 my-20 flex-wrap'>
                <a href="" target="_blank">
                <TwitterIcon className='text-7xl text-blue-600 mr-5 hover:scale-110 transition-all cursor-pointer'/>
                </a>
                <a href="" target="_blank">
                <LinkedInIcon className='text-7xl text-blue-500 mx-5 hover:scale-110 transition-all cursor-pointer'/>
                </a>
                <a href="" target="_blank">
                <FacebookIcon className='text-7xl text-blue-600 mx-5 hover:scale-110 transition-all cursor-pointer'/>
                </a>
                <a href="" target="_blank">
                <Instagram className='text-7xl text-violet-600 ml-5 hover:scale-110 transition-all cursor-pointer'/>
                </a>
            </div>

        </div>
    )
}

export default SocialHome