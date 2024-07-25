// src/components/Pagination.js
import React from 'react';
import './Pagination.css'; // Add a CSS file for custom styles

const Pagination = ({ totalNotes, notesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={`page-btn ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
