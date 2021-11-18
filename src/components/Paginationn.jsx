import React, { useEffect, useState, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginationn = ({
  totalValue = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onChangeValue,
}) => {
  const [totalNumbers, settotalNumbers] = useState(0);

  useEffect(() => {
    if (totalValue > 0 && itemsPerPage > 0)
      settotalNumbers(Math.ceil(totalValue / itemsPerPage));
  }, [totalValue, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalNumbers; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onChangeValue(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pages;
  }, [totalNumbers, currentPage]);

  if (totalNumbers === 0) return null;

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => onChangeValue(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => onChangeValue(currentPage + 1)}
        disabled={currentPage === totalNumbers}
      />
    </Pagination>
  );
};
