import { Card, Image, Col } from "react-bootstrap";
import halfoff from "../../assests/images/50.png";
import React from "react";
import { Link } from "react-router-dom";
// this file returns a cateogry as card, but generates images for each cateogry dynamically because img is not retrieved from api.
const ProductCategoryItem = (props) => {
  return (
    <Col>
      <Card
        style={{
          width: "18rem",
          textAlign: "center",
          border: "1px solid white",
        }}
      >
       
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
      </Card>
    </Col>
  );
};

export default ProductCategoryItem;