import React, { useEffect, useState } from 'react'
import signupImg from '../assets/signupPageArt.png'
import { Link, useNavigate } from 'react-router-dom'
import dribbleLogo from '../assets/dribbleLogo.png'
import { useDispatch} from 'react-redux';
import { signup } from '../store/authSlice';

function Signup() {
    const [error,setError] = useState(null)
    const[name, setName] = useState('');
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
    const [check,setCheck]  = useState(false)
    const [insideUserName,setInsideUserName] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        setError(null)
        e.preventDefault();
        if (!name || !email || !userName || !password || !check){
            setError('Please fill all the entries')
            return
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email')
            return
        }
        if (password.length<6){
            setError('Please enter a password of more than 6 characters')
            return
        }

        //here we can implement the code of sending the form data to backend 
        dispatch(signup({name,userName,email,password,check}))
        navigate('/profile')
    }

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    useEffect(()=>{
        if (!insideUserName && name && typeof name ==='string')setUserName(name.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "_").replace(/\s/g, "_"))
    },[name])
  return (
    <>
    <div className='flex h-screen'>

    <div className='w-1/3 bg-[#F2D184] flex flex-col justify-evenly items-center'> 
            <div>
            <img src={dribbleLogo} className='h-16 flex justify-start mb-10' alt="" />
            <p className='text-2xl font-bold text-[#8A661B] text-left ml-4'>Discover the world&apos;s top <br /> Designers & Creatives </p>
            </div>
            <img src={signupImg} alt="" className='text-center'/>
            <p className='text-[#8A661B] text-left ml-[-120px]'>Art by <a href="https://petertarka.com/" target='_blank' className='underline'>Peter Tarka</a></p>
        </div>

        <div className='w-2/3 '>

        <p className='text-right m-5'>
                Already a member? <Link to='/signup' className='text-[#6456ad] hover:underline cursor-pointer'>Signin</Link>
       </p>
            
            <div className='mx-48 my-20'>

        <div className='text-3xl font-bold my-8'>Sign up to Dribble</div>

        {
            error && (<span className="text-[#E05F6A] my-8"> * {error}</span>)
        }

        <form onSubmit={handleSubmit}>
            <div className='flex my-8 gap-5'>
                <div>
                <label htmlFor="name" className='font-bold'>Name</label>
                <br />
                <input type="text" value={name} onInput={(e)=>{setName(e.target.value)}} className='bg-[#F3F3F3] h-8 p-2 rounded' placeholder='xyz' name="" id="name" />
                </div>
                <div>
                <label htmlFor="name" className='font-bold'>Username</label>
                <br />
                <input type="text" value={userName} onInput={(e)=>{
                    setInsideUserName(true)
                    setUserName(e.target.value)}} className='bg-[#F3F3F3] h-8 rounded p-2' placeholder='xyz' name="" id="username" />
                </div>
            </div>

            <label htmlFor="email" className='font-bold'>Email</label>
            <br />
            <input type="text" value={email} onInput={(e)=>setEmail(e.target.value)}  className='bg-[#F3F3F3] rounded h-8 mb-8 w-full p-2' placeholder='xyz@gmail.com' name="" id="email" />
            <br />

            <label htmlFor="password" className='font-bold mt-8'>Password</label>
            <br />
            <input type="password" value={password} onInput={e=>setPassword(e.target.value)} className='bg-[#F3F3F3] rounded h-8 w-full p-2' placeholder='6+ characters' name="" id="password" />
            <br />

            <div className='flex'>
                <div className='w-2/12'>
            <input type="checkbox" onInput={(e)=>{
                setCheck(e.target.checked)
            }} name="" id="checkbox" className='mt-8 size-6 rounded-lg mr-2'/>
            </div>
            <div className='mt-8'>
            <label htmlFor="" className='text-black text-sm text-gray-500'>Creating an account means you&apos;re okay with our <a href="/" className='text-[#6456ad] hover:underline'>Terms of Service</a> ,  <a href="/" className='text-[#6456ad] hover:underline'>Privacy Policy</a> , and our default <a href="/" className='text-[#6456ad] hover:underline'>Notifiation Settings</a></label>
            </div>
            </div>
            <br />
            <button type='submit' className='bg-[#EA4B8B] border hover:border-gray-500 font-bold text-white w-1/2 h-10 rounded-lg'>
                Create Account
            </button>

            <p className='mt-8 text-sm text-gray-500'>This site is protected by reCAPTCHA and the Google  <a href="/" className='text-[#6456ad] hover:underline'>Privacy Policy</a> and <a href="/" className='text-[#6456ad] hover:underline'>Terms of Service</a></p>
        </form>
        </div>
        </div>
    </div>


    
  
    </>
    
  )
}

export default Signup