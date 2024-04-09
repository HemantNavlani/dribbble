import React, { useEffect, useState } from 'react'
import mailIcon from '../assets/mailIcon.png'
import {useSelector,useDispatch} from 'react-redux'
import { changeMail } from '../store/authSlice';
import {useNavigate} from 'react-router-dom'

function Verify() {
  
    const email = useSelector(state=>state.auth.email)
    const dispatch = useDispatch();
    const [change,setChange] = useState(false)
    const [mail,setMail] = useState(email)
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const [timeoutId,setTimeoutId] = useState()
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
    useEffect(()=>{
      setTimeoutId(setTimeout(()=>{
        navigate('/dribbble/')
      },5000))
    },[])

  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold mt-12'>Please verify your email...</h1>
    <img src={mailIcon} alt="" className='h-30 w-32 mt-4' />
    <p className='text-gray-500 mt-4'>Please verify your email address. We&apos;ve sent a confirmation email to : </p>

    {
        !change && 
    <p className='font-bold text-lg mt-4'>{email}</p>
    }

    {
    change &&
    <div>
    <input className='font-bold text-lg mt-4 bg-[#BBBBBB] text-white-800 rounded-lg p-2 outline-none' value={mail} onInput={(e)=>{
      setMail(e.target.value)
    }}/>
    <button className='ml-4 text-[#EA4B8B] font-semibold' onClick={()=>{
        if (!validateEmail(mail)) {
          setError('Plese enter a valid email address !')
          return
        }
        else setError()
        setChange(!change)
        dispatch(changeMail(mail))
        setTimeoutId(setTimeout(()=>{
          navigate('/dribbble/home')
        },5000))
    }}>Submit</button>
    </div>
    }
     {
          error && (<span className="text-[#E05F6A] my-8"> * {error}</span>)
      }
    <p className='text-gray-500 mt-4'>Click the confirmation link in that email to begin using Dribbble.</p>
    <p className='text-gray-500 mt-4 text-center'>Didn&apos;t receive the email? Check your Spam folder, it may have been caught by a filter. If <br /> you still don&apos;t see it, you can <span className='font-semibold text-[#EA4B8B]'> resend the confirmation email. </span></p>

    <p className='text-gray-500 mt-4 mb-16 '>Wrong email address? 
    
     <button disabled={change} className='text-[#EA4B8B] font-semibold' onClick={()=>{
      setChange(!change)
      clearTimeout(timeoutId)
      setTimeoutId()
    }
  
     
    }
      >Change it.</button></p>

    </div>
  )
}

export default Verify