import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { FaCheck } from "react-icons/fa";
import { role1, role2, role3 } from '../store/roleSlice';
function Role({image,text1,text2,id}) {

    const [checked,setChecked] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        if (id==1) dispatch(role1(checked))
        if (id==2) dispatch(role2(checked))
        if (id==3) dispatch(role3(checked))
    },[checked])
    const handleClick = ()=>{
        setChecked(!checked)
    }
  return (
    <>
    <div className={`w-64 h-64 border border-gray-300 flex flex-col p-2 space-y-2 justify-center items-center rounded-xl ${checked ? 'border-2 border-[#E84B89] ' :''}`} onClick={handleClick}>
   
    <img src={image} alt="" className={`${
        checked ? 'relative mt-[-100px] h-38 w-45 z-10':''
    }`} />

    <h3 className='text-center font-bold'>{text1}  </h3>

    {
    checked && (
        <p className='text-center text-gray-500'>
            {text2}
        </p>
    )
    }
    <button className={`w-5 h-5 border rounded-[100%] border-gray-400 outline-none ${
        checked
          ? 'bg-[#E84B89] border-none'
          : ''
      }`} >

    <FaCheck className='text-white size-3 ml-[4px]'/>
      </button>


    </div>
    </>
  )
}

export default Role