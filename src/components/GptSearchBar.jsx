import React from "react";
import lang from "../utils/languageConst";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-gray-300 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
          className="p-4 m-4 col-span-9 border border-gray-300 rounded-md"
        />
        <button className="m-4 px-4 py-2 col-span-3 bg-red-800 text-white rounded-lg ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
