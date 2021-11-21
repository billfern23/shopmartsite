
import {
  Image,
  InputGroup,
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Col,
  Row,
  Spinner
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assests/images/Logo2.png";
import { useEffect, useContext } from "react";
import CategoriesContext from "../../context/CategoriesContext";
import LoadingContext from "../../context/LoadingContext";
import '../../assests/css/Header.css'
//file contains a navbar and then a dynamically loaded navbar as well.
//headers is where the context api was first used to set all product categories. 

const Headers = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const categoryChecker = search.get("category"); //used for hiding or showing active links in navbar by looking it up in the url



  
  const { productcategory, setProductcategory } = useContext(CategoriesContext);
  const {Loading, setLoading} = useContext(LoadingContext);
  //need setproductCategory to get rid of console log error, not really a dependency and not used for anything.
  useEffect(() => {
    setLoading(true)
    fetch (`${process.env.REACT_APP_BACKEND}/products/categories`)
      .then((response) => response.json())
      .then((json) => {
        setProductcategory(json.categories);
        setLoading(false)
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [setProductcategory, setLoading]);

  return (
    <>
    {Loading === true ?  <div style={{display: 'flex', allignItems:'center', justifyContent:'center',
  position: 'absolute', top: '50%', left: '50%'}}>
    <Spinner animation="border"  role="status" variant="danger">
        <span >Loading Shomart...</span>
    </Spinner>

    </div>  : <>
    {/* simple header on top to let people know about our covid policy.*/}
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
    {/*Complex header with search bar, logo, collapsible header*/}
        <Container className="justify-content-center">
              <Row className="g-4" > 
    {/*Logo*/}
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
                {/*Search Bar not implemented*/}
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
            {/* Added to justify content on smaller screens.*/}
          </Col>

          <Col>
          </Col>

   {/*Collapsible portion of menu for smaller screens*/}
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
     
      

   {/*Dynamically created Nav from product categories. no children required*/}

      <Nav
        fill
        variant="tabs"
       
        defaultActiveKey="/"
        style={{ backgroundColor: "#C00000" }}
      >
        {/*Check and set active or disable active*/}
      <Nav.Item>
            <Nav.Link eventKey={`/`} active={
              location.pathname === "/" ? true : false } as={Link} to="/" style={{  fontWeight: "bold" }}>Home</Nav.Link>
        </Nav.Item>
      
        {productcategory.map((category) => (
          <Nav.Item
        
            key={Math.floor(Math.random() * 100000)}
            style={{
              borderBottom: "#830000 solid 0.5px",
              borderTop: "#830000 solid 0.5px",
            }}
          >
            
            <Nav.Link eventKey={`/products?category=${category}`}
              active = {categoryChecker ===category ? true : false}
              style={{  fontWeight: "bold" }}
              as={Link}
              to={`/products?category=${category}`}
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
     </> }
    </>
  );
};

export default Headers;
