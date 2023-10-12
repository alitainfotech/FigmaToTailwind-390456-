import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfMax = Math.floor(maxVisiblePages / 2);

      if (currentPage <= halfMax) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - halfMax) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        const start = currentPage - halfMax;
        const end = currentPage + halfMax;
        for (let i = start; i <= end; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="max-w-2xl mx-auto">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex gap-2">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <span
                href="#"
                className={`${
                  pageNumber === currentPage
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600"
                }   rounded-lg cursor-pointer leading-tight py-2 px-3`}
              >
                {pageNumber}
              </span>
            </li>
          ))}
          <li>
            <span className=" text-gray-600 px-3 py-2">...</span>
          </li>
          <li>
            <span className="bg-white  rounded-lg  text-gray-600 leading-tight py-2 px-3">
              {totalPages}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
