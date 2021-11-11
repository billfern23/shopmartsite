import {useState, useEffect} from 'react'
import { Card, Row, Col, Button, Form   } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
const ProductCard = (props) => {
  


    

    return (
        <Col>
            <Card style={{ width: '18rem',  boxShadow:'0 1px 6px 0 rgb(32 33 36/ 28%)', 
            
            
        }} 
            
       
            >
            <Link to={`/product/${props.id}`}> 
            <Card.Img variant="top" src={props.img} style={{height: "30vh"}}/> </Link>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title> 
                
           <Card.Subtitle className="mb-2 text-muted"> {props.category}</Card.Subtitle>
           <Card.Text>       
             {
                 props.bestSeller === true ? <>
                 <AiFillStar style={{color:"#FF9529"}}/> 
                 <AiFillStar style={{color:"#FF9529"}}/> 
                 <AiFillStar style={{color:"#FF9529"}}/> 
                 <AiFillStar style={{color:"#FF9529"}}/> 
                 <AiFillStar style={{color:"#FF9529"}}/> 
                 < br />
                 </>
                 :  <br />
             }
             {
                 props.category == "Clearance" ? 
                 <>
               
                 <div>

                     Price:  
                 <span style={{
                     textDecoration:"line-through", 
                 color: 'red', 
                 paddingLeft: "5px", 
                 paddingRight: "5px", 
                 fontSize:"12px"
                
                }}
                 > 
                 ${props.price*2}
                
             </span>
           
             ${props.price}
             
             </div>
              <br />
                 </>
                 
                 
                 
                 : 
                
                 <div> 
                 Price: ${props.price}
             </div>
             }
               
                
               
                </Card.Text>
               
                
            </Card.Body>
            </Card>
            </Col>


    )
}

export default ProductCard
