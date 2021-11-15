import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
//file used to describe a product description by id, pulls id from the url and goes from there
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
//call reload everytime the id changes.
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/product/${id}`)
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
      <br />


      <div style={{display: 'flex', justifyContent: 'center'}}>
            <span
            style={{
              color: "#EE0000",
              fontWeight: "300px",
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
                 <h1>{product.name} </h1>
              </span>  
      </div>
      <br />
      <div style={{display: 'flex', justifyContent: 'center'}}>
  



        <Card style={{ width: "50rem",  alignItems: "center",
          justifyContent: "center" }}>
          <Card.Img variant="top" src={product.picurl} />
          <Card.Body>
            <Card.Title >  {product.name}   <br /> (

            
         
            
       
            <>
              {product.bestSeller === true ? (
                <> 
              
                 {Math.floor(Math.random() * 100000)} Reviews{" "}  
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                
                  
                </>
              ) : 
                <>
                 {Math.floor(Math.random() * 100000)} Reviews
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <AiFillStar style={{ color: "#FF9529" }} />
                  <FaStarHalfAlt style={{ color: "#FF9529" }} />
                </>
              }
          </>
            
            
            ) 
            
            </Card.Title> 
            <Card.Text style={{fontWeigth:"700", color:"grey", }}>{product.category}</Card.Text>
          
         
      <div className="  align-items-center justify-content-center"> 
      <hr />
              <h4
                style={{ fontWeight: "300px", font: "bold", fontSize: "20px" }}
              >
                More about this item
              </h4>
              {product.description}
              <br />
              
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
              <br />
              
             </div>

             </Card.Body>
        </Card>



        
      </div>
    </>
  );
};

export default Description;
