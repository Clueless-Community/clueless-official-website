import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram } from '@mui/icons-material';

const SocialHome = () => {
    return (
        <div>
            <p className='sm:md:mx-40 px-5 text-4xl mt-20 font-bold text-center'>Follow Us On 👇</p>
            <div className='text-7xl flex justify-center sm:first-letter:px-28 my-20 flex-wrap'>
                <a href="https://twitter.com/by_clueless" target="_blank" rel="noreferrer">
                    <TwitterIcon className='text-7xl text-blue-600 sm:mx-5 mx-2 hover:scale-110 transition-all cursor-pointer' fontSize='inherit' />
                </a>
                <a href="https://www.linkedin.com/company/clueless-tech/" target="_blank" rel="noreferrer">
                    <LinkedInIcon className='text-7xl text-blue-600 sm:mx-5 mx-2 hover:scale-110 transition-all cursor-pointer' fontSize='inherit' />
                </a>
                <a href="https://www.facebook.com/cluelesscommunity/" target="_blank" rel="noreferrer">
                    <FacebookIcon className='text-7xl text-blue-600 sm:mx-5 mx-2 hover:scale-110 transition-all cursor-pointer' fontSize='inherit' />
                </a>
                <a href="https://www.instagram.com/by_clueless/" target="_blank" rel="noreferrer">
                    <Instagram className='text-7xl sm:mx-5 mx-2 text-blue-600 hover:scale-110 transition-all cursor-pointer' fontSize='inherit' />
                </a>
            </div>

        </div>
    )
}

export default SocialHome