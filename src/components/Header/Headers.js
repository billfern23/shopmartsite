
import { Image, InputGroup, Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { Link} from "react-router-dom"
import Logo from '../../assests/images/logo.png'
import {useEffect, useState,useContext } from 'react'
import CategoriesContext from '../../context/CategoriesContext'

const Headers = () => {
  const{productcategory} = useContext(CategoriesContext)

  const[buttonColor, setButtonColor] = useState(false)
  
  const changeButtonColor =() =>{
    
    setButtonColor(!buttonColor)
  }

    return (
   
<>



<div style={{backgroundColor:"black", color:"white" ,textAlign:"center"}}>
      Learn More about our Covid Return Policy
</div>






<Navbar collapseOnSelect expand="lg" expand="md"   bg="light" >
    

<Container fluid>




<Navbar.Brand as={Link} to="/">
<Col lg={1} md={2} sm={1} xs={2}> 
<Image src={Logo} style={{width:"20vh" ,height:"20vh"}} />
</Col>
</Navbar.Brand>

  <Col lg={6} md={5} sm={10} xs={10}>
      <div style={{border:"black 1px solid"}}>
        
      <Form className="">
        <InputGroup >
       
  
        <Form.Control  type="text"
         
          type="search"
          placeholder="Search Products..."
          className="me-2"
          aria-label="Search"
        
          
        />
        <Button variant="Secondary" 
       > {<FaSearch/>}
       
       </Button>
         </InputGroup>

          </Form>
          
        
        </div>
        </Col >
        <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />   
      </div>
        <Navbar.Collapse id="responsive-navbar-nav">
      
        <Col lg={3} md={4}sm={2} xs={2}>
        <Nav.Link as={Link} to="/Register" style={{color:"black",   fontWeight: "bold"}}>Register</Nav.Link>
        </Col >  
      

        
        <Col lg={3} md={2} sm={2} xs={2}>
        <Nav.Link as={Link} to ="/products" style={{color:"black",   fontWeight: "bold"}}>Products</Nav.Link> 
        </Col >  
      
      
        
    
         
        
       </Navbar.Collapse>

       
        </Container>
        
  </Navbar>

  <Nav fill variant="tabs" defaultActiveKey="/">
  {
        productcategory.map((category)=>(
          <Nav.Item style={{borderBottom: "grey solid 0.5px", borderTop:"grey solid 0.5px"}}>
          <Nav.Link style={{color:"black",   fontWeight: "bold"}} as={Link} to ={`/products?category=${category}`}>{category}</Nav.Link>
          </Nav.Item>
  ))
  
  }
</Nav>

  
<div>
      

</div>


  
 




    



<br />








      
        
      </>
    )
}

export default Headers

