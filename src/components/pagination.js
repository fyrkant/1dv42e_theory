import React, {PropTypes} from "react";

import IconButton from "material-ui/IconButton";
import Left from "material-ui/svg-icons/navigation/chevron-left";
import Right from "material-ui/svg-icons/navigation/chevron-right";

const Pagination = ({max, perPage, offset, changePage}) => {
  let maxPage = max / perPage;
  maxPage = maxPage > 1 ? maxPage : 1;
  const currentPage = offset / perPage + 1;

  return (
    <div style={{alignSelf: "center", display: "flex", alignItems: "center"}}>
      <IconButton
        onClick={changePage.bind(this, perPage * -1)}
        disabled={currentPage === 1}
      ><Left /></IconButton>
        <span>{currentPage} / {maxPage}</span>
      <IconButton
        onClick={changePage.bind(this, perPage)}
        disabled={currentPage === maxPage}
      ><Right /></IconButton>
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
