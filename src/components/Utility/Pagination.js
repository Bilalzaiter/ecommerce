import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        if (onPageChange) {
            onPageChange(selectedPage);
        }
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            forcePage={currentPage - 1} // Set the current page as active
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;