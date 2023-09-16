"use client";
import {
  ArrowLeftLgDoubleIcon,
  ArrowLeftLgIcon,
  ArrowRightLgDoubleIcon,
  ArrowRightLgIcon,
} from "@/assets/icons";
import { PaginationInterface } from "@/interface";

export function Pagination({
  pages,
  currentPage,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
  paginate,
}: PaginationInterface) {
  return (
    <div className="pagination">
      <ArrowLeftLgDoubleIcon
        className="pagination__arrow--double"
        onClick={() => paginate(firstPage)}
      />
      <ArrowLeftLgIcon
        className="pagination__arrow--single"
        onClick={prevPage}
      />
      <ul className="pagination__pages">
        {pages.map((page) => (
          <li
            className={`pagination__page ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => paginate(page)}
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
      <ArrowRightLgIcon
        className="pagination__arrow--single"
        onClick={nextPage}
      />
      <ArrowRightLgDoubleIcon
        className="pagination__arrow--double"
        onClick={() => paginate(lastPage)}
      />
    </div>
  );
}
