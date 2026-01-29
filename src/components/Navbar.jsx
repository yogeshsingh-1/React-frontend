import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white w-[89%] h-16 flex justify-between items-center mx-auto rounded-b-xl px-10'>
      <div className='text-xl font-semibold'>Stuffsus</div>
      <div className='flex gap-12 items-center text-xs font-semibold '>
        <div>Brenda</div>
        <div>Shop</div>
        <div>Blog</div>
      </div>
      <div className="">
        <div className="bg-white size-8 rounded-full text-center shadow-md  border-black "><i class="ri-search-line"></i></div>

      </div>
    </div>
  )
}

export default Navbar;