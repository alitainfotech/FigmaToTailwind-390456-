import React from "react";

const DatePickerComponent = () => {
  return (
    <div className="relative w-full ">
      <input
        type="date"
        id="date-picker"
        className="bg-white border border-purple-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10 focus:border-purple-600  "
        placeholder="Select a date"
        required
      />
      <div className="absolute right-1 top-1 p-3 flex items-center pointer-events-none">
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            d="M13 6.66667H1M9.66667 1.33334V4M4.33333 1.33334V4M4.2 14.6667H9.8C10.9201 14.6667 11.4802 14.6667 11.908 14.4487C12.2843 14.2569 12.5903 13.951 12.782 13.5746C13 13.1468 13 12.5868 13 11.4667V5.86667C13 4.74656 13 4.18651 12.782 3.75869C12.5903 3.38236 12.2843 3.0764 11.908 2.88466C11.4802 2.66667 10.9201 2.66667 9.8 2.66667H4.2C3.0799 2.66667 2.51984 2.66667 2.09202 2.88466C1.71569 3.0764 1.40973 3.38236 1.21799 3.75869C1 4.18651 1 4.74656 1 5.86667V11.4667C1 12.5868 1 13.1468 1.21799 13.5746C1.40973 13.951 1.71569 14.2569 2.09202 14.4487C2.51984 14.6667 3.0799 14.6667 4.2 14.6667Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default DatePickerComponent;
