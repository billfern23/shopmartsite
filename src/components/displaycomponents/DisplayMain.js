import DisplayCard from "./DisplayCard";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Dropdown,
  NavItem,
  NavLink,
  Nav,
} from "react-bootstrap";

/* Main file where Magic happens (avoids duplication of alot of code)
1- It handles all requests that come through both from products and Category, Category is when a user selects a particular category
  and products are retrieved from there.
2- Implements pagination, reponsible for updating state of pagination, highly important task. Displays the props.products that it gets
  from the other file by using Display Card in a grid fashion, which is also responsive.

States: useLocation, this is used to re render Pagination everytime the location of the link changes, you go from products to electronics,
        pagination would show the old number, nothing would change.

useEffect Triggers: props.flagbestSellerProducts:  this is used to trigger pagination change, cards reload when the user is trying to filter by best sellers,
                    props.xFlag: This is my short circuit flag, it is meant to reset everything but the content of the props this recieves, This flag of mine,
                                I solely created it to handle descending and ascending array, the problem with .sort is it sorts the original array. I tried storing
                                it in a temp array, no luck because react kept updating both arrays. Then I came up with this solution, just keep changing the flags 
                                and setting temp arrays with the original order everytime clear filter is clicked, and this flag is the key to causing pagination and 
                                everything else to reset with it. 
                    props.bestsellers: When the user selects bestSeller this is one that would cause pagination to re render again,  ,
                    props.clearance: when user selects 50% off this will cause pagination to re render

*/
const DisplayMain = (props) => {
  const { products } = props;
  const location = useLocation(); //track url changes because react has no sense of pages
  const [currentPage, setCurrentPage] = useState(1);  //this says always set default to one
  const [productsperPage] = useState(8);   //always set products per page to 8 as per requirement

  const indexCurrentProducts = currentPage * productsperPage;        //first tracker: gives you the number of products in current page
  const indexFirstProduct = indexCurrentProducts - productsperPage;  //you have to calculate the index of first product want to display cause
                                                                      //this would give you the start point of the array you want to show.
  /* 
  Example: display products page 2:
  the ending or the last product you would want to show would be 16 each page shows 8
  so the first page shows 1- 8 second page shows 8- 16
  indexCurrentProducts would give you 16, which helps you find the last product you want to display
  indexFirstProduct would by 16 - 8 giving you 8, you want to then slice up your array from 8 to 16 and then boom
  you get the correct products. 
  
  */                                                                    
  const displayProducts = products.slice(indexFirstProduct, indexCurrentProducts);
//useEffect with different callbacks causing it to re-render each time, pretty cool.
  useEffect(() => {
    setCurrentPage(1);
    
  }, [location, props.flagClearance,
     props.flagbestSellerProducts,
      props.xFlag, 
      props.bestsellers,
    props.clearance]);
//changePage number, get one and change update the state to that, we dint have us it in useEffect because we call this function
//explicitly with a button. State re-renders no automation required.
//this happens when user clicks a page button
  const changePage = (number) => {
    setCurrentPage(number);
  };

  return (
    
    <Container
      style={{
       border:'1px solid black'
       
       
      }}
    >
      <br />

      <div>
           {/* This handles reponsivness of top bar*/}
      <Row xs={1} sm ={2}  md={2} lg={4} className="g-2" >
         {/* This turns off all flags, most importantly the bestseller and clearance and reset them to original array of products */}
        <Nav.Link
          onClick={props.turnOffFlags}
          to="/products"
          style={{
            display: "inline-block",
            color: "#C00000",
            border: "1px solid black",
            background: "white"
          }}
        >
          All Products
        </Nav.Link>
        {/* This makes filters the original array for best sellers*/}
        <Nav.Link
          onClick={props.bestsellers}
          style={{
            display: "inline-block",
            color: "#C00000",
            border: "1px solid black",
            background: "white"
          }}
        >
          Best sellers
        </Nav.Link>
             {/* This makes filters the original array for clearance*/}
        {props.flag === true ? (
          <Nav.Link
            onClick={props.clearance}
            style={{
              display: "inline-block",
              color: "red",
              border: "1px solid black",
              paddingRight: "20px",
              background: "white"
            }}
          >
            50% off Deals
          </Nav.Link>
        ) : (
          ""
        )}
        <Dropdown
          as={NavItem}
          style={{
            display: "inline-block",
            color: "#C00000",
            border: "1px solid black",
            background: "white"
          }}
        >
            {/* This filters products by price ascending or descending also clear all filters, the thing that makes clear filters possible*/}
          <Dropdown.Toggle as={NavLink} style={{ color: "#C00000" }}>
            Filter by Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={props.ascending}>
              Lowest to Highest
            </Dropdown.Item>
            <Dropdown.Item onClick={props.descending}>
              Highest to Lowest
            </Dropdown.Item>
            <Dropdown.Item onClick={props.clearAllFilter}>
              Clear Filter
            </Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
        </Row>
      </div>
      <br />
           {/* This is what controls the grid pattern, used xs to show only 1 because otherwise it looks ugly maps any
           variation of the products array recieved by prop drilling
           */}
      <Row xs={1} sm ={2}  md={2} lg={3} xl ={4}	xxl ={4}className="g-4">
      
        {displayProducts.map((product) => (
          <DisplayCard
            key={product._id}
            title={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
            img={product.picurl}
            id={product._id}
            bestSeller={product.bestSeller}
            currentpage={currentPage}
          />
        ))}
        
      </Row>
      <br />
           {/* calls pagination  products required to calculate the total number of pages, products per page required too,
           change page, i put the fucntion here because Pagination and pagination items both use it but the key part is
           the calculation is performed here, i cant move the states because it depends on products and pagination working togather
           to update components everytime. Everything depends on the products, even the setcurrent page, if anything i would move it up
           but that would mean duplicating this aspect of the code as well and this file is designed to avoid duplication.
           */}
      <Pagination
        products={products}
        productsperPage={productsperPage}
        changePage={changePage}
        currentpage={currentPage}
      />
    </Container>
  );
};

export default DisplayMain;
