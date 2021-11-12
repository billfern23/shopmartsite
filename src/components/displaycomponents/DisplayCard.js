import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const ProductCard = (props) => {
  return (
    <Col>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{ width: "16rem", boxShadow: "0 1px 6px 0 rgb(32 33 36/ 28%)" }}
      >
        <Link to={`/product/${props.id}`}>
          <Card.Img variant="top" src={props.img} style={{ height: "30vh" }} />{" "}
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {props.category}
          </Card.Subtitle>
         
            {props.bestSeller === true ? (
              <>
                <AiFillStar style={{ color: "#FF9529" }} />
                <AiFillStar style={{ color: "#FF9529" }} />
                <AiFillStar style={{ color: "#FF9529" }} />
                <AiFillStar style={{ color: "#FF9529" }} />
                <AiFillStar style={{ color: "#FF9529" }} />
                <br />
              </>
            ) : (
              ""
            )}
            {props.category === "Clearance" ? (
              <>
                <div>
                  Price:
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "red",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      fontSize: "12px",
                    }}
                  >
                    ${props.price * 2}
                  </span>
                  ${props.price}
                </div>
              
              </>
            ) : (
              <div>Price: ${props.price}</div>
            )}

            {props.category === "Clearance" ? props.bestSeller === true ? "" : <br /> : ""}
         
        </Card.Body>
      </Card>
      </div>
    </Col>
  );
};

export default ProductCard;
