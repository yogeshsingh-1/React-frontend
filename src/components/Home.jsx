import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-[75vh] text-white text-[28rem]  ">Shop</div>
        <div className="rounded-t-xl p-5 w-[90%] bg-gray-400 ">
          <div className="flex justify-between">
            <div className="text-md font-medium">Give All You Need</div>
            <div className="bg-white rounded-xl overflow-hidden">
              <input
                type="text"
                className="border-transparent outline-none px-2 py-1"
                placeholder="Search here..."
              />
              <button className="bg-black text-white rounded-xl px-4 py-1">
                Search
              </button>
            </div>
          </div>
          <div className="mt-7 flex gap-10">
            {[1, 2, 3].map((item) => (
              <div className="bg-white w-52 rounded-lg overflow-hidden">
                <div className="">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="px-2 py-2 bg-gray-200">
                  <h4 className="font-semibold">Headphone</h4>
                  <div className="flex justify-between">
                    <p className="text-orange-300">5.0 *****</p>
                    <p className="font-semibold">$29.90</p>
                  </div>
                  <div className="flex justify-between">
                    <button className="px-3 py-1 bg-black rounded-xl text-white text-xs">
                      Add to Cart
                    </button>
                    <button className="px-3 py-1 bg-white rounded-xl text-black text-xs">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
