import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-2 md:px-8 absolute  text-white bg-gradient-to-r from-black/10">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-3">
        <button className=" bg-white/90 text-black px-2 md:px-16 p-1 md:p-4 my-2 md:my-0 font-bold md:text-xl rounded hover:bg-white/50">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-black/30 text-white px-16 p-4 font-bold text-xl rounded hover:bg-black/90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
