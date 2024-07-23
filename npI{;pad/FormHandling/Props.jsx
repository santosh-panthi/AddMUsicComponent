import React, { useState } from 'react'

export default function Props({item}) {
    const FriendRequest = ()=>{
        setValue(!val)
       
    }
    const [val, setValue]=useState(true)
  
  return (
    <div className='m-3 w-52 bg-white rounded-md overflow-hidden'>
        <div className=' w-full h-32 bg-sky-200'>
            <img className=' h-full w-full object-cover object-center'
            src= {`${item.image}`} alt="" />
        </div>
        <div className=' w-full p-3'>
            <h3 className=' font-semibold text-xl'>{item.name}</h3>
            <h5 className=' text-s'>{item.profession}</h5>
            <button onClick={FriendRequest} className={` ${val === true ? "bg-blue-400":  "bg-green-400"} rounded-full px-2 py-1 font-semibold mt-3 text-white`}>
                {val === true ? "Add Friend": "Cancel Request"}
                </button>
            
        </div>
      
    </div>
  )
}
