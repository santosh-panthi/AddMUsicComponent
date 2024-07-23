import React from 'react'

function Nav({count}) {
  return (
    <div className=' w-full  py-3 flex justify-between items-center'>
    <h3>Orange</h3>
    <div className=' flex gap-2 px-3 py-2 bg-orange-600 text-white rounded-md text-sm'>
        <h3>Favourites</h3>
        <h6>
          {count.filter((item)=> item.add).length}
          </h6>
    </div>
    </div>
  )
}

export default Nav
