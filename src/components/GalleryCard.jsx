import React from "react";

const GalleryCard = () => {
  return (
    <>
      <div>GalleryCard</div>
      {/*  */}

      {/* <div classNameName="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br"> */}
      {/* <div classNameName="overflow-hidden flex items-center justify-center aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
        <div classNameName="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div classNameName="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
              <div classNameName="font-bold">Jessie Watsica</div>

              <div classNameName="opacity-60 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio dolores error iure, perferendis sequi totam. Ad
                aliquam aperiam atque deleniti dolor dolorem enim esse et in,
                inventore itaque, pariatur reprehenderit.
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          classNameName="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        />
      </div> */}
      {/* </div> */}
      {/* <div className="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4"> */}
      {/* <div className="text-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Simple Image Hove
          </h2>
        </div> */}
      <div className="mt-10 max-w-sm mx-auto">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80"
            alt="Photo by Sébastien Goldberg on Unsplash"
            className="w-full rounded shadow-xl hover:shadow-2xl"
          />
          <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute top-0 left-0 w-full h-full  transition duration-300 ease-in-out flex justify-center items-center opacity-0 hover:opacity-100">
            <div className="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">
                Be careful on the way.
              </h1>
              <p className="text-gray-200 font-medium text-sm">Tulus</p>
              <small className="text-xs font-light text-gray-300">
                Photo by Sébastien Goldberg on Unsplash
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default GalleryCard;
