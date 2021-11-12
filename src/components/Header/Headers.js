import {
  Image,
  InputGroup,
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Col,
  Row
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assests/images/Logo2.png";
import { useEffect, useContext } from "react";
import CategoriesContext from "../../context/CategoriesContext";

const Headers = () => {
  const { productcategory, setProductcategory } = useContext(CategoriesContext);

  //const[productcategory, setProductcategory] = useState([])
  useEffect(() => {
    fetch (`${process.env.REACT_APP_BACKEND}/products/categories`)
      .then((response) => response.json())
      .then((json) => {
        setProductcategory(json.categories);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [setProductcategory]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#C00000",
          color: "white",
          textAlign: "center",
        }}
      >
        Learn More about our Covid Return Policy    <Link to={{ pathname: "/covidpolicy" }} style={{color:"white"}}> 
                     Click here
                    </Link> <br />
      </div>

<Container className="justify-content-center">
      <Row className="g-4" > 

<Navbar collapseOnSelect expand="lg md xxl" >
<Navbar.Brand as={Link} to="/">
  <Col xs={5} sm ={2}  md={5} lg={5} xl ={4}	xxl ={4} >
  <Image src={Logo} style={{ width: "28vh", height: "30vh" }} />
  </Col>
  </Navbar.Brand>
  <Col xs={9} sm ={5}  md={5} lg={5} xl ={4}	xxl ={4} style={{padding:"16px"}}>
  <div
    style={{
      border: "red 1px solid",
      borderRadius: "10px",
      backgroundColor: "red",
      width:"100%",
      
    }}
  >
    <Form className="" >
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{ border: "red 1px solid", borderRadius: "10px" }}
        />
        <Button variant="outline-danger">
          {" "}
          {<FaSearch style={{ color: "white" }} />}
        </Button>
      </InputGroup>
    </Form>
    
  </div>
 
  </Col>
  <Col>

  </Col>

  <Col xs={3} sm ={2}  md={1} lg={3} xl ={4}	xxl ={4}>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
    <Row>
      <Nav.Link
        as={Link}
        to="/Register"
        style={{ color: "#EE0000", fontWeight: "bold", fontSize:"20px", paddingRight:"45px" }}
      >
        Register
      </Nav.Link>
      </Row>
      <Row>
      <Nav.Link
        as={Link}
        to="/products"
        style={{ color: "#EE0000", fontWeight: "bold",  fontSize:"20px" }}
      >
        Products
      </Nav.Link>
          </Row>
    </Nav>
  </Navbar.Collapse>
  
  
  </Col>

</Navbar>

</Row>

</Container> 


      <Nav
        fill
        variant="tabs"
        defaultActiveKey="/"
        style={{ backgroundColor: "#C00000" }}
      >
        {productcategory.map((category) => (
          <Nav.Item
            key={Math.floor(Math.random() * 100000)}
            style={{
              borderBottom: "#830000 solid 0.5px",
              borderTop: "#830000 solid 0.5px",
            }}
          >
            <Nav.Link
              style={{ color: "white", fontWeight: "bold" }}
              as={Link}
              to={`/products?category=${category}`}
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default Headers;
