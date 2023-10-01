"use client";
import { useEffect, useState } from "react";

export function usePagination(data: object[], dataPerPage: number = 8) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [{ firstPage, lastPage }] = useState({
    firstPage: 1,
    lastPage: Math.ceil(data.length / dataPerPage),
  });
  const [{ firstIndexOf, lastIndexOf }, setPosition] = useState({
    firstIndexOf: currentPage * dataPerPage - dataPerPage,
    lastIndexOf: currentPage * dataPerPage,
  });
  const [currentData, setCurrentData] = useState<object[]>([]);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    setCurrentData(
      data.slice(
        currentPage * dataPerPage - dataPerPage,
        currentPage * dataPerPage
      )
    );
  }, [data, currentPage]);

  useEffect(() => {
    const res = [];

    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      res.push(i);
    }
    setPages(res);

    setPosition({
      firstIndexOf: currentPage * dataPerPage - dataPerPage,
      lastIndexOf: currentPage * dataPerPage,
    });
  }, [data]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) =>
      currentPage !== Math.ceil(data.length / dataPerPage)
        ? currentPage + 1
        : Math.ceil(data.length / dataPerPage)
    );
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => (currentPage !== 1 ? currentPage - 1 : 1));
  };

  return {
    currentPage,
    firstPage,
    lastPage,
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
