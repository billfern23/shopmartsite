import {Container, Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import LoadingContext from "../context/LoadingContext";
import {useContext} from "react"

//This file contains footer.
const Footer = () => {
    const {Loading} = useContext(LoadingContext);
    return (
        <>
        <br />
        <br />
        
        <footer style={{background:"#C00000"}}>
        <br />
<Container >
{Loading === true ? "" :  
  <Row sm ={3}  md={3} lg={3} className="justify-content-md-center" style={{marginLeft:"10px" }}  >
        <Col xs={3} >
        <h2 style={{color:"white", fontSize: "calc(1em + 1vw)", paddingLeft:"1px"}}>Buy</h2>
        <Link to={`/Register`} style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}}> Register</Link> <br />
        <Link to={`/products`} style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}}>Products</Link>
        </Col>
        
        <Col xs={5} >
        <h2 style={{color:"white", fontSize: "calc(1em + 1vw)"}}>Connect</h2>
        <Link to={{  pathname: "https://facebook.com" }} target="_blank" style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}} > <AiOutlineFacebook /> Facebook</Link> <br />
        <Link to={{  pathname: "https://twitter.com" }} target="_blank" style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}}> <AiFillTwitterSquare /> Twitter</Link> <br />
        <Link to={{  pathname: "https://tiktok.com" }} target="_blank" style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}}> <FaTiktok /> Tik tok</Link> <br />
       
        <Link to={{  pathname: "https://instagram.com" }} target="_blank" style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)", paddingRight:"10px"}}> <FaInstagram /> Instagram</Link> <br /><br />
     
        </Col>
        <Col xs={3} >
        <h2 style={{color:"white", fontSize: "calc(1em + 1vw)"}}>About</h2>
        <Link to={{  pathname: "/aboutus" }} style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}}> Company Info</Link> <br /> 
        <Link to={{  pathname: "/covidpolicy" }} style={{color:"white", textDecoration:"none", fontSize: "calc(1em + 0.2vw)"}}> Covid Protocol</Link> <br /><br />
        </Col>
        <Col>
       
        </Col>


  </Row>
}
      </Container>  
          
        </footer>
        </>
    )
}

export default Footer
