import React from "react";

const LocationInputComponent = () => {
  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          id="location-search"
          className="bg-white border border-purple-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  focus:outline-purple-600 focus:ring-purple-600"
          placeholder="Location"
          required
        />
        <div className="absolute  right-0 top-0 p-4 flex items-center pointer-events-none">
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              d="M5 6.49989C5.82843 6.49989 6.5 5.82831 6.5 4.99989C6.5 4.17146 5.82843 3.49989 5 3.49989C4.17157 3.49989 3.5 4.17146 3.5 4.99989C3.5 5.82831 4.17157 6.49989 5 6.49989Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 10.9999C7 8.99989 9 7.20902 9 4.99989C9 2.79075 7.20914 0.999886 5 0.999886C2.79086 0.999886 1 2.79075 1 4.99989C1 7.20902 3 8.99989 5 10.9999Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default LocationInputComponent;
