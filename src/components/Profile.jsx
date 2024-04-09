import React, { useEffect, useState } from 'react'
import logoPink from '../assets/logoPink.png'
import { BiSolidCameraPlus } from "react-icons/bi";
import {useNavigate} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { profile } from '../store/profSlice';

function Profile() {
  const [image,setImage] = useState();
  const [location,setLocation] = useState()
  const defaultImages = [
    'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    'https://st2.depositphotos.com/2703645/7304/v/450/depositphotos_73040253-stock-illustration-male-avatar-icon.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkP9-rNKatf1KHOiVoFWwvmm3FbAlxCimrh9tMvS49Yg&s'
  ]

  const dispatch = useDispatch()
  const[disabled,setDisabled] = useState(true);
  useEffect(()=>{
    if ((image) && location) setDisabled(false)
    if (!image || !location || image==='no') setDisabled(true)
  },[image,location])

  const navigate = useNavigate()

  const handleSubmit=(e)=>{ 
    e.preventDefault()
    dispatch(profile({image,location}))
    //database calls 
    navigate('/role')
  }

  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    document.getElementById("btn").click();
    }
  });


  return (
    <div>
        <img src={logoPink} alt="" className='m-8 h-16 w-28'/>

        <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-3xl font-bold mb-4'>Welcome! Let&apos;s create your profile </h1>
            <p className='text-gray-500 mb-8'>Let others get to know you better! You can do these later</p>


           
            <form onSubmit={handleSubmit}>
            <h3 className='font-bold mb-4'>Add an avatar</h3>
           
           <div className='flex gap-x-8'>
            <input type="file" name="" accept='image/*' id="image" style={{display: 'none'}} onInput={(e)=>{
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                  setImage(e.target.result);
                };
                reader.readAsDataURL(file);
            }}/>
            <img src={image} alt="" className='border-[3px] rounded-[100%] border-gray-300 w-48 h-48 border-dashed flex-none'/>
            <label htmlFor="image">
              {(!image || image==='no') &&
            <BiSolidCameraPlus className='absolute size-7 mx-[-140px] my-[85px] text-gray-500 cursor-pointer'/>
              }
            </label>

            <div className='flex flex-col space-y-4'>
            <label htmlFor="image" className='border  border-gray-300 hover:border-gray-500 font-bold rounded w-36 p-2 text-center cursor-pointer'>Choose Image</label>
  
            <select name="" id="select" className='text-sm outline-none' onChange={e=>setImage(e.target.value)}>
              <option value={'no'} defaultValue className='text-gray-500'>Or Chose one of our Defaults</option>
              <option value={defaultImages[0]}>Avatar 1</option>
              <option value={defaultImages[1]}>Avatar 2</option>
              <option value={defaultImages[2]}>Avatar 3</option>
            </select>
            </div>
            </div>


        <div className='mt-8'>
            <h3 className='font-bold'>Add your location</h3>
            <input type="text" placeholder='Enter a location' value={location} onInput={e=>setLocation(e.target.value)} className=' mt-4 w-full border-0 border-b-[1px] outline-none font-bold p-2' />
        </div>


        <button id='btn' className='bg-[#EA4B8B] mt-4 w-1/2 rounded-lg p-2 text-white font-semibold disabled:bg-[#F7B8D0]' type='submit' disabled={disabled}>
            Next
        </button>

        <p className='mx-12 mt-4 text-gray-400 font-semibold'>Or Press RETURN</p>
        </form>

        </div>
        
        </div>
    </div>
  )
}

export default Profile




