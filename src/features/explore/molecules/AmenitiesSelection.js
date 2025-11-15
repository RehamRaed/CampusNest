"use client";
import React, { useState, useRef, useEffect } from "react";

export default function AmenitiesSelection({
  options,
  selectedValues,
  onValueChange,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const filteredOptions = options
    .filter(
      (option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !selectedValues.includes(option)
    )
    .slice(0, 4);

  const handleSelect = (value) => {
    onValueChange([...selectedValues, value]);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleRemove = (v) => {
    onValueChange(selectedValues.filter((x) => x !== v));
  };

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative mb-4" ref={inputRef}>
      <label className="block text-sm font-medium mb-1 text-gray-600">
        Amenities
      </label>

      <div
        className="flex flex-wrap items-center w-full border border-gray-300 focus-within:border-orange-400 rounded-lg p-1.5 min-h-[40px] cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {selectedValues.map((tag) => (
          <div
            key={tag}
            className="flex items-center bg-orange-100 text-orange-700 text-xs mr-1 my-0.5 rounded-full"
          >
            <span className="py-0.5 pl-2 pr-1">{tag}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(tag);
              }}
              className="px-1.5 text-xs hover:text-red-600"
            >
              ×
            </button>
          </div>
        ))}

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={selectedValues.length === 0 ? "Search amenities..." : ""}
          className="flex-grow min-w-[50px] p-1 text-sm bg-transparent outline-none"
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No results for {searchTerm}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
