import { Card, Image, Col } from "react-bootstrap";
import halfoff from "../../assests/images/50.png";
import React from "react";
import { Link } from "react-router-dom";
// this file returns a cateogry as card, but generates images for each cateogry dynamically because img is not retrieved from api.
const ProductCategoryItem = (props) => {
  return (
    <Col>
     
        <Link to={`/products?category=${props.category}`}>
          {/* Complex if statement multiple true or false to create different images depending on the category recieved.*/}
          
          <img rounded={true}
            src={
              props.category === "Home Furniture"
                ? "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                : props.category === "Luggage"
                ? "https://images.unsplash.com/photo-1610244767159-0f9797ff1926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                : props.category === "Electronics"
                ? "https://images.unsplash.com/photo-1601524909162-ae8725290836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                : props.category === "Clothing"
                ? "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                : props.category === "Clearance"
                ? halfoff
                : ""
            }
            style={{ height: "20vh", width: "100%",objectFit:"cover", borderRadius:"75%" }}
            
          />
        </Link>

        <Link
          to={`/products?category=${props.category}`}
          style={{
            color: "#EE0000",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
         
          {props.category}
        </Link>
    
    </Col>
  );
};

export default ProductCategoryItem;