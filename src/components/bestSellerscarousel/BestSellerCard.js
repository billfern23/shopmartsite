
import { BsFillStarFill } from "react-icons/bs";
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';
import {

    Link
  } from "react-router-dom";
const BestSellerCard = (props) => {
    return (
        
        <div style={{textAlign:"center",margin:"20", width: "200px", background:"white", borderRadius:"10px", boxShadow:'0 1px 6px 0 rgb(32 33 36/ 28%)'}} >
  
          
 
              <img src={props.img} alt="" style={{width:'100%', height:'120px', paddingTop:"20px", objectFit:'contain'}}/>
              <p style={{fontWeight:"500", fontSize:"17px"}}>{props.title}   </p>
                    <p style={{fontSize:'14px', color:"black"}}>
                        
                    </p>
                    <p style={{fontSize:'14px', color: 'grey', fontWeight:"500"}}>
                        Price: ${props.price} <br />
                        <Button variant="outline-danger">
                        <Link 
                        to={`/product/${props.id}`}  style={{color:"#EE0000",   fontWeight: "bold", textDecoration: "none"}}>
                            See More 
                            </Link> 
                        </Button>
                        <br />
                    </p>
                    <br />
                
        </div>
    )
}

export default BestSellerCard
