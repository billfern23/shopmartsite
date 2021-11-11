import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
const Description = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    quantity: 0,
    bestSeller: true,
    picurl: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.data);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [id]);

  return (
    <>
      <br />
      <span
        style={{
          color: "#EE0000",
          fontWeight: "300px",
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {product.category === "Electronics"
          ? "Work Or Play..."
          : product.category === "Clearance"
          ? "50% Off this item"
          : "Products"}
      </span>
      <br />
      <div className="border d-flex align-items-center justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.picurl} />
          <Card.Body>
            <Card.Title> {product.name}</Card.Title>
            <Card.Text>{product.category}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {" "}
              <h4
                style={{ fontWeight: "300px", font: "bold", fontSize: "20px" }}
              >
                More about this item
              </h4>
              {product.description}
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              $
              {product.category === "Clearance" ? (
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    fontSize: "12px",
                  }}
                >
                  ${product.price * 2}
                </span>
              ) : (
                ""
              )}
              {product.price}
            </ListGroupItem>
            <ListGroupItem>
              {product.bestSeller === true ? (
                <>
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                </>
              ) : (
                <>
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                </>
              )}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default Description;
