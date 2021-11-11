
import { Image, InputGroup, Navbar, Container, Nav, Form,  Button,  Col } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { Link} from "react-router-dom"
import Logo from '../../assests/images/Logo2.png'
import {useEffect,useContext } from 'react'
import CategoriesContext from '../../context/CategoriesContext'

const Headers = () => {

  const{productcategory, setProductcategory} = useContext(CategoriesContext)

   
  

  //const[productcategory, setProductcategory] = useState([])
  useEffect(() => {
      fetch("http://localhost:5000/products/categories")
      .then(response=> response.json())
      .then(json =>{
          setProductcategory(json.categories)
          
      })
      .catch((err)=>{console.log(`err ${err}`)})
   
   
   }, [setProductcategory])




    return (
   
<>



<div style={{backgroundColor:"#C00000", color:"white" ,textAlign:"center"}}>
      Learn More about our Covid Return Policy
</div>






<Navbar collapseOnSelect expand="lg md"   >

<Container fluid>




<Navbar.Brand as={Link} to="/">
<Col lg={1} md={2} sm={1} xs={2}> 
<Image src={Logo} style={{width:"40vh" ,height:"30vh"}} />
</Col>
</Navbar.Brand>

  <Col lg={7} md={5} sm={5} xs={10}>
      <div style={{border:"red 1px solid", borderRadius:"10px", backgroundColor: "red"}}>
        
      <Form className="">
        <InputGroup >
       
  
        <Form.Control       
          type="search"
          placeholder="Search Products..."
          className="me-2"
          aria-label="Search"
          style={{border:"red 1px solid", borderRadius:"10px"}}
          
        />
        <Button variant="outline-danger"
       > {<FaSearch style={{color:"white"}}/>}
       
       </Button>
         </InputGroup>

          </Form>
          
        
        </div>
        </Col >

    <Col  lg={2} md={3} sm={3} xs={5} >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />   
       
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">  
        <Nav.Link as={Link} to="/Register" style={{color:"#EE0000",   fontWeight: "bold"}}>Register</Nav.Link>
        <Nav.Link as={Link} to ="/products" style={{color:"#EE0000",   fontWeight: "bold"}}>Products</Nav.Link>  
      </Nav>  
       </Navbar.Collapse>
    </Col>
       
        </Container>
        
  </Navbar>

  <Nav fill variant="tabs" defaultActiveKey="/" style={{backgroundColor:"#C00000"}}>
  { 
        productcategory.map((category)=>(
         
          <Nav.Item key={Math.floor(Math.random() *100000)} style={{borderBottom: "#830000 solid 0.5px", borderTop:"#830000 solid 0.5px"}}>
          <Nav.Link style={{color:"white",   fontWeight: "bold"}} as={Link} to ={`/products?category=${category}`}>{category}</Nav.Link>
          </Nav.Item>
  ))
  
  }
</Nav>

  



  
 




    











      
        
      </>
    )
}

export default Headers

