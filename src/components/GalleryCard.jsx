import React from "react";

const GalleryCard = ({ feedbackUser }) => {
  // console.log("first")
  const { photo, feedback, profile } = feedbackUser;
  return (
    <>
      <div className="mt-10 max-w-sm mx-auto">
        <div className="relative group">
          <img
            src={photo}
            className="w-full rounded shadow-xl hover:shadow-2xl"
          />
          <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute top-0 left-0 w-full h-full  transition duration-300 ease-in-out flex justify-center items-center opacity-0 hover:opacity-100">
            <div className="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">{profile}</h1>
              <small className="text-sm font-light text-gray-300">
                {feedback}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
