import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Home() {
    const navigate = useNavigate()
    const active = useSelector(state=>{
      if (state.auth.email && state.auth.email.length>0) return true;
      else return false
    })
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-center text-white p-4 rounded-xl font-semibold mt-32 h-8 bg-[#E94B8B]'>Over 3 million ready-to-work creatives!</div>
        <h1 className='text-center text-6xl mt-12 font-bold'> The world&apos;s destination <br /> for design</h1>
        <p className='text-center mt-12 font-semibold mb-16'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
        <button className='flex justify-center p-4 text-white font-semibold rounded-xl mb-32 bg-[#E94B8B] hover:bg-[#f63683] w-32 h-8 items-center' onClick={()=>{
            if (active) navigate('#')
            else navigate('/signup')
            // here more pages can be added to go to from here 
        }}>
        
        {`${
        active ? 'Get Started':'Signup'
        }`}
          </button>
    </div>
  )
}

export default Home