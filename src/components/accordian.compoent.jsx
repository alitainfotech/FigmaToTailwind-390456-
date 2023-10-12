import { useState } from "react";

const AccordionItem = ({ title, content, icon, filter }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`group flex flex-col gap-2 rounded-lg bg-white p-2 pl-4 border hover:bg-purple-100 transition duration-50 ease-in`}
    >
      <div
        onClick={toggleContent}
        className={`flex h-[20px] font-semibold mt-1 cursor-pointer items-center justify-between 
         ${isExpanded ? "text-purple-500 " : "text-gray-500 "}
        `}
      >
        <span className="flex gap-2">
          {icon}
          {title}
        </span>
        <span className="flex items-center gap-2">
          {filter ? (
            <span className="text-sm text-purple-600 items-">
              {" "}
              Clear ({filter})
            </span>
          ) : (
            ""
          )}
          <span
            className={`h-2 w-3 transform ${
              isExpanded ? "rotate-180" : "rotate-0"
            } transition-transform`}
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#96989B"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
      <div
        className={`h-auto ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } items-center overflow-hidden transition-all duration-500`}
      >
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
