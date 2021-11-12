import { Pagination } from "react-bootstrap";

const PaginationItem = (props) => {
  return (
    <Pagination.Item active={props.totalpage === props.currentPage}
      onClick={() => {
        props.changePage(props.totalpage);
      }}
    >
      {props.totalpage}
    </Pagination.Item>
  );
};

export default PaginationItem;
