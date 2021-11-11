import {Container, Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaTiktok, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <br />
        <br />
        
        <footer style={{background:"#C00000"}}>
<Container>
  <Row xs={3} sm ={3}  md={3} lg={3} className="g-4">
        <Col>
        <h2 style={{color:"white"}}>Buy</h2>
        <Link to={`/Register`} style={{color:"white", textDecoration:"none"}}> Register</Link> <br />
        <Link to={`/products`} style={{color:"white", textDecoration:"none"}}>Products</Link>
        </Col>
        
        <Col>
        <h2 style={{color:"white"}}>Connect</h2>
        <Link to={{  pathname: "https://facebook.com" }} target="_blank" style={{color:"white", textDecoration:"none"}}> <AiOutlineFacebook /> Facebook</Link> <br />
        <Link to={{  pathname: "https://twitter.com" }} target="_blank" style={{color:"white", textDecoration:"none"}}> <AiFillTwitterSquare /> Twitter</Link> <br />
        <Link to={{  pathname: "https://tiktok.com" }} target="_blank" style={{color:"white", textDecoration:"none"}}> <FaTiktok /> Tik tok</Link> <br />
        <Link to={{  pathname: "https://instagram.com" }} target="_blank" style={{color:"white", textDecoration:"none"}}> <FaInstagram /> Instagram</Link> <br /><br />
        </Col>
        <Col>
        <h2 style={{color:"white"}}>About Shopmart</h2>
        <Link to={{  pathname: "/aboutus" }} style={{color:"white", textDecoration:"none"}}> Company Info</Link> <br />
        <Link to={{  pathname: "/covidpolicy" }} style={{color:"white", textDecoration:"none"}}> Covid Protocol</Link> <br /><br />
        </Col>
        <Col>
       
        </Col>


  </Row>
      </Container>  
          
        </footer>
        </>
    )
}

export default Footer
