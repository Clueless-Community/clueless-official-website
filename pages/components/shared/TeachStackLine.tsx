import React from 'react'

const Icons = [...Array(8)].map((_, i) => `icons/icon${i + 1}.svg`)

const TeachStackLine = () => {
    return (
        <div className='relative md:mx-40 mx-auto'>
            <div className='hidden lg:block'>
                <div className='grid grid-cols-10 place-items-center gap-4 px-12 py-8'>
                    {Icons.slice(0, 4).map((icon, i) => {
                        return <img src={icon} alt={icon} key={i} />
                    })}
                    <img src='icons/iconmiddle.svg' alt='github' className='col-span-2' />
                    {Icons.slice(4, 8).map((icon, i) => {
                        return <img src={icon} alt={icon} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeachStackLine