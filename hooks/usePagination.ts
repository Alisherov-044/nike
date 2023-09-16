"use client";
import { useEffect, useState } from "react";

export function usePagination(data: object[], dataPerPage: number = 8) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [{ firstPage, lastPage, totalPages }] = useState({
    firstPage: 1,
    lastPage: Math.ceil(data.length / dataPerPage),
    totalPages: Math.ceil(data.length / dataPerPage),
  });
  const [{ firstIndexOf, lastIndexOf }] = useState({
    firstIndexOf: currentPage * dataPerPage - dataPerPage,
    lastIndexOf: currentPage * dataPerPage,
  });
  const [currentData, setCurrentData] = useState<object[]>([]);

  const pages: number[] = [];

  useEffect(() => {
    setCurrentData(
      data.slice(
        currentPage * dataPerPage - dataPerPage,
        currentPage * dataPerPage
      )
    );
  }, [currentPage]);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) =>
      currentPage !== lastPage ? currentPage + 1 : lastPage
    );
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => (currentPage !== 1 ? currentPage - 1 : 1));
  };

  return {
    currentPage,
    firstPage,
    lastPage,
    totalPages,
    pages,
    paginate,
    nextPage,
    prevPage,
    dataPerPage,
    firstIndexOf,
    lastIndexOf,
    currentData,
  };
}
