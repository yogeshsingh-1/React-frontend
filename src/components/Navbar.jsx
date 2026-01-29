import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-400 w-[100%] h-14 flex justify-between items-center'>
      <div className="w-[85%] flex  justify-between pl-28">
        <div className='text-xl font-semibold'>Navbar</div>
        <div className='flex gap-12 items-center text-xs font-semibold '>
          <div>Foods</div>
          <div>Wishlist</div>
          <div>Favourites</div>
          <div>Review</div>
        </div>
      </div>
      <div className='mx-auto'>
        <button className='bg-red-200 px-8 py-1 rounded-md'>Login</button>
      </div>
    </div>
  )
}

export default Navbar;