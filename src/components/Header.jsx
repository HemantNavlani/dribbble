import React from 'react'
import logoBlack from '../assets/logoBlack.png'
import { FaSearch } from "react-icons/fa";
import { TbShoppingBagX } from "react-icons/tb";
import {useSelector} from 'react-redux'
function Header() {
    const image = useSelector(state=>state.prof.image)
  return (
    <>
    <div className='flex flow-row items-center'>
        <div className='flex gap-x-4 items-center text-gray-500 font-semibold w-5/6'>
            <img src={logoBlack} alt="" className='h-12 w-20 m-4' />
            <p className='hover:underline '>Inspiration</p>
            <p className='hover:underline '>Find Work</p>
            <p className='hover:underline '>Learn Design</p>
            <p className='hover:underline '>Go Pro</p>
            <p className='hover:underline '>Hire Designers</p>
        </div>

        <div className='flex items-center mr-8'>
            <div className='flex items-center bg-gray-300 rounded-lg h-10 text-gray-500'>
              <FaSearch  className='mx-2 text-gray-500'  />
              <input type="text" name="" id="" placeholder='Search' className='bg-gray-300 w-20 outline-none' />
            </div>

            
            <TbShoppingBagX className='ml-6 size-6 text-gray-500' />

        <img src={image} className='rounded-[100%] h-10 w-10 ml-6' alt="img" />

        <button
        className='ml-8 bg-[#EA4B8B] text-white font-semibold w-24 h-12 rounded-xl hover:bg-[#f4438a]'
        >Upload</button>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Header