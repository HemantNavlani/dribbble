import React from 'react'
import logoPink from '../assets/logoPink.png'
import { TbBallBasketball } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoBasketballSharp } from "react-icons/io5";


function Footer() {
  return (
    <div className='w-screen bg-gray-100 pb-12'>
    <div className=' flex pt-12 mx-8'>

        <div className='w-1/6 mr-4 mt-[-10px]'>
            <img src={logoPink} alt="" className='h-16 w-30' />    
            <p className='text-gray-600 text-sm ml-4 text-left'>Dribbble is the world&apos;s leading community for creatives to share, grow, and get hired</p>
            <div className='flex gap-x-4 ml-4 mt-4'>
            <TbBallBasketball className='cursor-pointer hover:text-gray-600' />
            <FaTwitter className='cursor-pointer hover:text-gray-600'  />
            <FaFacebookSquare className='cursor-pointer hover:text-gray-600'  />
            <FaInstagram className='cursor-pointer hover:text-gray-600'  />
            <FaPinterest className='cursor-pointer hover:text-gray-600'  />
            </div>
        </div>


        <div className='w-1/6 flex flex-col gap-y-4'>
            <h3 className='font-semibold'>For Designers</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>Go Pro!</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Explore design work</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Design blog</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Overtime podcast</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Playoffs</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Weekly Warm-Up</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Refer a Friend</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Code of Conduct</p>
        </div>


        <div className='w-1/6 flex flex-col gap-y-4'>

            <h3 className='font-semibold'> Hire designers</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>Post a job opening</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Post a freelance project</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Search for designers</p>
            <h3 className='font-semibold'>Brands</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>Advertise with us</p>
        </div>


        <div className='w-1/6 flex flex-col gap-y-4'>

            <h3 className='font-semibold'>Company</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>About</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Careers</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Support</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Media kit</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Testimonials</p>
            <p className='hover:underline cursor-pointer text-gray-700'>API</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Terms of service</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Privacy policy</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Cookie</p>
        </div>


        <div className='w-1/6 flex flex-col gap-y-4'>
            <h3 className='font-semibold'>Directories</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>Design jobs</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Designers for hire</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Freelance designers <br /> for hire</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Tags</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Places</p>
            <h3 className='font-semibold'>Design assets</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>Dribbble Marketplace</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Creative Market</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Fontspring</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Font Squirrel</p>
        </div>

        <div className='w-1/6 flex flex-col gap-y-4'>

            <h3 className='font-semibold'>Design Resources</h3>
            <p className='hover:underline cursor-pointer text-gray-700'>Freelancing</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Design Portfolio</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Design Education</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Creative Process</p>
            <p className='hover:underline cursor-pointer text-gray-700'>Design Industry Trends</p>
        </div>
    </div>


    <hr className='border mt-12 mx-12' />
    <div className='flex mt-12 justify-between mx-12'>
    <p className='text-gray-500 font-semibold'>© 2023 Dribbble. All rights reserved </p>
    <p className='flex items-center'><span className='font-bold'>20,501,853 </span> &nbsp; <span className='text-gray-500'> shots dribbbled </span>&nbsp;  <IoBasketballSharp className='text-[#EA4B8B] size-6'/> </p>
</div>
</div>
  )
}

export default Footer