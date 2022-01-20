import { Pagination } from "react-bootstrap";
//this page implements a pagination item on change set to change

//this is important cause I was able to avoid another css blunder, active is important because it is what changes the color of the active
//page, also active is only this one because it is the component that actually has the page numbers.
const PaginationItem = (props) => {
  return (
    <Pagination.Item active={props.totalpage === props.currentPage}
      onClick={() => {
        props.changePage(props.totalpage);
        window.scrollTo(0, 20);
      }}
    >
      {props.totalpage}
    </Pagination.Item>
  );
};

export default PaginationItem;
