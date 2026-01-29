import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-100 w-[90%] h-16 flex justify-between items-center mx-auto rounded-b-xl pl-10 pr-7 absolute -translate-x-1/2 left-1/2 ">
      <div className="text-xl font-semibold">Stuffsus</div>
      <div className="flex gap-12 items-center text-xs font-semibold ">
        <div>Brenda</div>
        <div>Shop</div>
        <div>Blog</div>
      </div>
      <div className="flex gap-3">
        <div className="bg-white size-7 rounded-full text-center shadow-md  border-black">
          <i className="ri-search-line"></i>
        </div>
        <div className="bg-white size-7 rounded-full text-center shadow-md  border-black ">
          <i class="ri-shopping-cart-2-line"></i>
        </div>
        <div className="bg-white size-7 rounded-full text-center shadow-md  border-black ">
          <i class="ri-shopping-cart-2-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
