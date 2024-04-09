import React, { useEffect, useState } from 'react'
import { Role } from '../components'
import { IoIosArrowBack } from "react-icons/io";
import roleImg1 from '../assets/roleImg1.png'
import roleImg2 from '../assets/roleImg2.png'
import roleImg3 from '../assets/roleImg3.png'
import logoPink from '../assets/logoPink.png'
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const text1Arr = [
    `I'm a designer looking to share my work`,
    `I'm a looking to hire a good designer`,
    `I'm looking for design inspiration`
]
const text2Arr = [
    'With over one of the greatest design communities, Dribble is the leadind design community',
    'With over 200K + designers, Dribble is the leading source for hiring designers',
    'With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration'
]


function RolePage() {
    const navigate = useNavigate()
    const checked1 = useSelector((state)=>state.role.role1)
    const checked2 = useSelector((state)=>state.role.role2)
    const checked3 = useSelector((state)=>state.role.role3)

    const handleSubmit = (e)=>{
        e.preventDefault();
        //make database calls
        navigate('/dribbble/verify')
    }
    document.addEventListener("keypress", function(event) {
        // event.preventDefault();
        if (event.key === "Enter") {
        document.getElementById("btn").click();
        }
      });
  return (
    <>
    <div className='flex justify-start items-center gap-x-4 m-4'>
        <img src={logoPink} alt="" />
        <div className='w-8 h-8 bg-gray-300 flex p-2 rounded'>
        <IoIosArrowBack className='justify-center items-center cursor-pointer' onClick={
            ()=>{
                useNavigate('/dribbble/profile')
            }
        } />
        </div>
    </div>
    <h1 className='text-center text-4xl font-bold mb-4'>What brings you to dribble ?</h1>
    <p className='text-gray-500 text-center'>Select the options that best describes you. Don&apos;t worry, you can explore other options later.</p>
    <div className='flex flex-row flex-wrap justify-center items-center gap-x-10 mt-20'>
    <Role image={roleImg1} text1={text1Arr[0]} text2={text2Arr[0]} id={1}/>
    <Role image={roleImg2} text1={text1Arr[1]} text2={text2Arr[1]} id={2}/>
    <Role image={roleImg3} text1={text1Arr[2]} text2={text2Arr[2]} id={3}/>
    </div>
    <h3 className='text-2xl font-bold text-center mt-8'>Anything else? You can select multiple</h3>
    <div className='flex flex-col gap-y-4 justify-center items-center mt-8'>
    <button id='btn' type='submit' onClick={handleSubmit} className='bg-[#E94B8A] w-48 text-white font-semibold p-2 h-12 rounded-lg disabled:bg-[#F7B8D0] hover:bg-[#ef3a83]'
    disabled={!checked1 && !checked2 && !checked3} 
    >
    Finish</button>
    
    {(checked1 || checked2 || checked3) &&
    <p className='text-sm text-gray-500 font-semibold'>or Press RETURN</p>
    }

    </div>
   
    </>
  )
}

export default RolePage