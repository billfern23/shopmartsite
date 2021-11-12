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
const DisplayMain = (props) => {
  const { products } = props;
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsperPage] = useState(8);

  const indexLastProduct = currentPage * productsperPage;
  const indexFirstProduct = indexLastProduct - productsperPage;
  const displayProducts = products.slice(indexFirstProduct, indexLastProduct);

  useEffect(() => {
    setCurrentPage(1);
  }, [location, props.flagClearance, props.flagbestSellerProducts]);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  return (
    <Container
      style={{
        background: "linear-gradient(rgba(250,1,2,0.2),transparent)",
        backgroundColor: "#F9EFF5",
      }}
    >
      <br />

      <div style={{ }}>
      <Row xs={1} sm ={2}  md={2} lg={4} className="g-2" >
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
          </Dropdown.Menu>
        </Dropdown>
        </Row>
      </div>
      <br />

      <Row xs={1} sm ={2}  md={2} lg={4} className="g-4">
      
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
