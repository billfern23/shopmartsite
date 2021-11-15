import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
//this file creates an individual card for all products, products/category shows clearance or best sellers items depending on category.
//used math.random to create random number of reviews because we are not pulling it from the database, also to create a fake 50% off, 
//I multipled the number by 2 instead of dividing because its one less thing to keep track off just in case the next assignment
//involves me calculating the price. otherwise would have to use a useState, not going to do that.
const ProductCard = (props) => {
  return (
    <Col>
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/*Card to load each product, made it 17rem to make it more responsive*/}
      <Card
        style={{ width: "17rem", boxShadow: "0 1px 6px grey" }}
      >
           {/*Made Image a link because adding a button would make it look ugly also thats how alot of other e-commerse sites do it*/}
        <Link to={`/product/${props.id}`}>
          <Card.Img variant="top" src={props.img} style={{ height: "18vh", width:"100%" }} />{" "}
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {props.category}
          </Card.Subtitle>
            {/*Only if best seller show stars others put in a new line to maintain consistency*/}
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
               {/*If clearance, multiply the number by 2, that way you do not have to create a useState to keep track of values.*/}
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
   {/*Keep Line consistency of card height, if you dont do this, you could set the card height, but that looks weird.*/}
            {props.category === "Clearance" ? props.bestSeller === true ? "" : <br /> : ""}
            {props.category !== "Clearance" ? props.bestSeller === true ? "" : <br /> : ""}
        </Card.Body>
      </Card>
      </div>
    </Col>
  );
};

export default ProductCard;
