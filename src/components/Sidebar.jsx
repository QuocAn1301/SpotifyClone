import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white lg:flex hidden'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div onClick={() => navigate('/SpotifyClone')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-7' src={assets.home_icon} alt="" />
                    <p className='font-bold text-[26px] '>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-7' src={assets.search_icon} alt="" />
                    <p className='font-bold text-[26px]'>Search</p>
                </div>
            </div>

            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="" />
                        <p className='font-semibold text-[24px]'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.arrow_icon} alt="" />
                        <img className='w-6' src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1 className='text-[22px]'>Create your first playlist</h1>
                    <p className='font-light text-[18px]' > it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[18px] text-black rounded-full mt-3'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-3'>
                    <h1 className='text-[22px]'>Let's findsome podcasts to follow</h1>
                    <p className='font-light text-[18px]' > we'll keep you update on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[18px] text-black rounded-full mt-3'>Browse podcasts</button>
                </div>
            </div >
        </div >
    )
}

export default sidebar
