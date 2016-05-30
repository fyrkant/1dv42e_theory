import React, {PropTypes} from "react";

const Pagination = ({max, perPage, offset, changePage}) => {
  const maxPage = max / perPage;
  const currentPage = offset / perPage + 1;

  return (
    <div>
      <button
        onClick={changePage.bind(this, perPage * -1)}
        disabled={currentPage === 1}
      >{"<"}</button>
        {currentPage} / {maxPage}
      <button
        onClick={changePage.bind(this, perPage)}
        disabled={currentPage === maxPage}
      >{">"}</button>
    </div>
  );
};

Pagination.propTypes = {
  offset: PropTypes.number,
  perPage: PropTypes.number,
  changePage: PropTypes.func,
  max: PropTypes.number
};

export default Pagination;
