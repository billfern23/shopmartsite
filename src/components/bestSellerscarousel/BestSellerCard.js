import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
//this file just returns the card by maping each category into a card like object so the carousel is just filled with cards,
//each time the array  refreshes.
const BestSellerCard = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20",
        width: "95%",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 6px 0 grey",
      }}
    >
      <Image
        src={props.img}
        alt=""
        style={{
       
          width: "100%",
          height: "22vh",
          paddingTop: "20px",
          objectFit: "fill",
        }}
      />
      <p style={{ fontWeight: "500", fontSize: "17px" }}>{props.title} </p>
      <p style={{ fontSize: "14px", color: "black" }}></p>
      <p style={{ fontSize: "14px", color: "grey", fontWeight: "500" }}>
        Price: ${props.price} <br />  <br />
        <Button variant="outline-danger">
          <Link
            to={`/product/${props.id}`}
            style={{
              color: "#EE0000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
             More Details
          </Link>
        </Button>
        <br />
      </p>
      <br />
    </div>
  );
};

export default BestSellerCard;
