"use client";
import { SetStateAction, useState } from "react";
import Movies from "./Partials/Movies";

export default function MovieList(): JSX.Element {
  const [searchValue, setSearchValue] = useState(
    "Search title and add to grid"
  );

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 pl-10 lg:pl-20 lg:grid-cols-2">
        <div className="">
          <p className="text-4xl font-[Alternate] text-white font-bold justify-self-start pb-5">
            Collect Your Favourites
          </p>
        </div>
        <div className="justify-self-start pr-10 lg:justify-self-end flex items-center">
          <div className="flex items-center border rounded-md overflow-hidden">
            <svg
              className="w-6 h-6 text-gray-400 mr-2 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-5.2-5.2m-8.8 0a8 8 0 1 1 8.8-8.8 8 8 0 0 1-8.8 8.8z"
              />
            </svg>
            <input
              type="text"
              className="py-2 px-4 bg-transparent text-white w-full outline-none"
              placeholder={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="m-10 lg:ml-20 border-t-2 border-[#fff] border-solid  ">
        <Movies />
      </div>
    </div>
  );
}
