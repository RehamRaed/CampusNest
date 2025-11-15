
import React from 'react';
import SidebarFilter from "@/features/explore/organisms/SidebarFilter";
import PropertyCard from "@/components/molecules/PropertyCard";
import Pagination from "@/components/molecules/Pagination";

export default function ExploreTemplate({
  paginatedData,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="mx-auto px-5 md:px-10 lg:px-15 py-8 grid md:grid-cols-[250px_1fr] gap-6">
      
      {/* Sidebar Filter */}
      <SidebarFilter /> 

      {/* Listings Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Explore Properties
        </h2>

        {/* Property Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedData.length > 0 ? (
            paginatedData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 py-10">
              No properties found matching your criteria.
            </p>
          )}
        </div> 

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        
      </div>
    </div>
  );
}