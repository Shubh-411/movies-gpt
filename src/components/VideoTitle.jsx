import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[23%] px-24 absolute  text-white bg-gradient-to-r from-black/10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-3">
        <button className=" bg-white/90 text-black px-16 p-4 font-bold text-xl rounded hover:bg-white/50">
          ▶ Play
        </button>
        <button className=" bg-black/30 text-white px-16 p-4 font-bold text-xl rounded hover:bg-black/90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
