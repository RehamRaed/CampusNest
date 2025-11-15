// src/components/molecules/Pagination.jsx
// تم نقل الكود من ملف Pagination السابق

import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // دالة لتوليد أرقام الصفحات مع dots
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 disabled:opacity-50"
      >
        Prev
      </button>

      {/* أرقام الصفحات + dots */}
      {getPageNumbers().map((page, index) =>
        page === '...' ? (
          <span key={index} className="px-2 text-gray-500">
            …
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded-lg text-sm ${
              page === currentPage
                ? 'bg-orange-400 text-white'
                : 'hover:bg-orange-500'
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;