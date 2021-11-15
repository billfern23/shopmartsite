import PaginationItem from "./PaginationItem";
import { Pagination } from "react-bootstrap";
import "../../assests/css/Pagination.css";

// this file creates the boostrap pagination element each.
const PaginationCard = (props) => {
  const TotalPages = Math.ceil(props.products.length / props.productsperPage); //math.ceil is used to round up the numbers, you always it to be higher
  const totalPagesArray = [];  //fake array to easily map the pages "it gives you something like 1, 2, 3 ,4 ,5"
  for (let i = 0; i < TotalPages; i++) {
    totalPagesArray.push(i + 1);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination>
        {/*Always navigate to first page*/}
        <Pagination.First
          onClick={() => {
            props.changePage(totalPagesArray[0]);
          }}
        />
        {/*Navigate previous page before unless you hit 0 then you want to stop, ternary if */}
        <Pagination.Prev
          onClick={() => {
            props.changePage(
              props.currentpage - 1 === 0
                ? props.currentpage
                : props.currentpage - 1
            );
          }}
        />
           {/*Navigate through the array, simply map pages, the key is the page too as it is a unique number
           keep creating a button representing each page.
           */}
        {totalPagesArray.map((page) => (
          <PaginationItem
            totalpage={page}
            key={page}
            changePage={props.changePage}
            currentPage = {props.currentpage}
          />
        ))}
{/*Navigate next page before unless you hit you hit the total pages then you want to stop, ternary if */}
        <Pagination.Next
          onClick={() => {
            props.changePage(
              props.currentpage + 1 > totalPagesArray.length
                ? props.currentpage
                : props.currentpage + 1
            );
          }}
        />
        {/*Always navigate to last page */}
        <Pagination.Last
          onClick={() => {
            props.changePage(totalPagesArray[totalPagesArray.length - 1]);
          }}
        />
      </Pagination>

      
    </div>
  );
};

export default PaginationCard;
