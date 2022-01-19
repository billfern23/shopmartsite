
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
import Header2 from "./headers2"
import Box from '@mui/material/Box';
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
          backgroundColor: "#ee352a",
          color: "white",
          textAlign: "center",
        }}
      >
        Learn More about our Covid Return Policy    <Link to={{ pathname: "/covidpolicy" }} style={{color:"white"}}> 
                     Click here
                    </Link> <br />
      </div>
        
     
      <Header2 productcategory={productcategory}/>

   {/*Dynamically created Nav from product categories. no children required*/}
   <Box
            
            component="div"
            sx={{ mr: 2, display: {  xs: 'none', md: 'inline' }, width:1 }}
          > 
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
      </Box>
     </> }
    </>
  );
};

export default Headers;
