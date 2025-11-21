"use client";

import usePagination from "@/hooks/usePagination";
import ExploreTemplate from "@/features/explore/templates/ExploreTemplate";
import  properties  from "../../../data/exploreData";

const ITEMS_PER_PAGE = 9;

export default function ExplorePage() {
  const {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage,
  } = usePagination(properties ?? [], ITEMS_PER_PAGE);

  return (
    <ExploreTemplate
      paginatedData={paginatedData ?? []}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}
