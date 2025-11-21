import React from "react";
import { PaginationProps } from "./pagination.types";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-sm text-gray-600 disabled:opacity-50 cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Prev{" "}
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(Number(page))}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300
          ${
            page === currentPage
              ? "bg-orange-400 text-white shadow-xl scale-110"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-orange-400 hover:text-white hover:shadow-md"
          }
        `}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="test-sm text-gray-600 disabled:opacity-50 cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
