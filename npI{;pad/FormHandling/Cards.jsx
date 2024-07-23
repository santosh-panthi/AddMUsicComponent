import React from 'react'
import Card from './Card'

export default function Cards({users, handleRemove}) {
  return (
    <div className='w-full max-h-[60vh] overflow-auto p-4 flex justify-center items-center flex-wrap gap-5'>
        {users.map((user,index)=>{
            return (<Card handleRemove={handleRemove} id={index} key={index} name={user.name} email = {user.email} image = {user.image} />)
        })}
    </div>
  )
}
