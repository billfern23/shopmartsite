import { useEffect, useState } from "react";
import DisplayMain from "./displaycomponents/DisplayMain";
import { useLocation } from "react-router-dom";
// this file handles all when user wants to look at products from a specific categroy.
//passes values to display main
const Category = (props) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [flagClearance, setFlagClearance] = useState(false); // you need this to turn it off just in case
  const [bestSellerProducts, setbestSellerProducts] = useState([]);
  const [flagbestSellerProducts, setFlagbestSellerProducts] = useState(false);
  const [tempArrayProducts, setTempArrayProducts] = useState([])
  const [tempArrayBestSeller, setTempArrayBestSeller] = useState([])
  const [xFlag, setxflag] = useState(false)
  //component forced to reload on location, props.category, location and xflag. 
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/products?category=${props.category}`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);
        setTempArrayProducts(json.data);
        setFlagbestSellerProducts(false)
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [props.category, location,  xFlag]);

  //function for ascending, work with bestsellers or all products
  const ascending = () => {
    
    let ascending = [];
    if (flagbestSellerProducts) {
      ascending = bestSellerProducts.sort((product1, product2) =>
        product1.price > product2.price ? 1 : -1
        
      );
      setbestSellerProducts([...ascending]);
      
    } else {
      ascending = tempArrayProducts.sort((product1, product2) =>
        product1.price > product2.price ? 1 : -1
      );
      setTempArrayProducts([...ascending]);
    }
   
  };
  //function for descending, work with bestsellers or all products
  const descending = () => {
    
    let descending = [];
    if (flagbestSellerProducts) {
      descending = bestSellerProducts
        .sort((product1, product2) =>
          product1.price > product2.price ? 1 : -1
        )
        .reverse();
      setbestSellerProducts([...descending]);
     
    } else {
      descending = tempArrayProducts
        .sort((product1, product2) =>
          product1.price > product2.price ? 1 : -1
        )
        .reverse();
        setTempArrayProducts([...descending]);
    }
  
  };

  //filter original array for best sellers
  const bestsellers = () => {
    setFlagClearance(false);
    const tempBestsellers = products.filter(
      (product1) => product1.bestSeller === true
    );
    setTempArrayBestSeller([...tempBestsellers]);
    setbestSellerProducts([...tempBestsellers]);
    setFlagbestSellerProducts(true);
  };

  //trun of all flags
  const turnOffFlags = () => {
    setFlagClearance(false);
    setFlagbestSellerProducts(false);
    
    setTempArrayProducts([...products]);
  };
//clear all filter is designed for ascending and descending for all products
//because even with a temp array react with sort sorts the original array not the temporary one.
//creating two arrays react updates both because they are set at the same time
//this was my solution to fix it. this flag triggers a complete reload of the data and the best seller flag sets it to original best
//seller array.

  const clearAllFilter = () => {

  
     if(flagbestSellerProducts){
      setbestSellerProducts([...tempArrayBestSeller])
    }
    else {
      setxflag(!xFlag)
      setTempArrayProducts([...products]);
    }
  }

  return (
    <>
      <br />

      <span
        style={{
          color: "#EE0000",
          fontWeight: "300px",
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        {props.category}
      </span>

      <br />
      <DisplayMain
        products={
          flagbestSellerProducts === true ? bestSellerProducts : tempArrayProducts
        }
        ascending={ascending}
        descending={descending}
        flag={false}
        bestsellers={bestsellers}
        turnOffFlags={turnOffFlags}
        flagClearance={flagClearance}
        flagbestSellerProducts={flagbestSellerProducts}
        clearAllFilter={clearAllFilter}
        xFlag={xFlag}
        tempArrayProducts={tempArrayProducts}
      />
    </>
  );
};

export default Category;
