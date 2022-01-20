import { useContext } from "react";
import CategoriesContext from "../../context/CategoriesContext";
import ProductCitem from "./ProductCategoryItem";
import { Container, Row } from "react-bootstrap";
import LoadingContext from "../../context/LoadingContext";


//this provides the cateogry tiles on the main page, theory is create an array of cards after recieving it from the fetch api.
//had to generate a random key because this essentially is just a filter and data returned by api did not have a key.
//reacts need a key, make math.random

const ProductCategories = () => {
  //used context instead of prop drill because product category is already loaded in my header component.
  const { productcategory } = useContext(CategoriesContext);
  const {Loading} = useContext(LoadingContext);
  return (
    <div>
      {Loading === true ? "" :  <>
      <h3>
        <span style={{ color: "black" }}>Shop By Departments</span>
      </h3>
      <br />
      <Container fluid>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "95%" }}>
            <Row xs={2} sm = {2} md={4} lg={4} xl ={4}	xxl ={4}className="g-4">
              {productcategory.map((category) => (
                <ProductCitem
                  key={Math.floor(Math.random() * 100000)}
                  category={category}
                />
              ))}

            </Row>
          </div>
        </div>
     
      </Container>
      
      </>
      }
    </div>
  );
};

export default ProductCategories;
