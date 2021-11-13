import { useEffect, useState } from "react";
import DisplayMain from "./displaycomponents/DisplayMain";
import { useLocation } from "react-router-dom";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [flagClearance, setFlagClearance] = useState(false);
  const [bestSellerProducts, setbestSellerProducts] = useState([]);
  const [flagbestSellerProducts, setFlagbestSellerProducts] = useState(false);
  const [tempArrayProducts, setTempArrayProducts] = useState([])
  const [tempArrayBestSeller, setTempArrayBestSeller] = useState([])
  const [xFlag, setxflag] = useState(false)
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

  const bestsellers = () => {
    setFlagClearance(false);
    const tempBestsellers = products.filter(
      (product1) => product1.bestSeller === true
    );
    setTempArrayBestSeller([...tempBestsellers]);
    setbestSellerProducts([...tempBestsellers]);
    setFlagbestSellerProducts(true);
  };

  const turnOffFlags = () => {
    setFlagClearance(false);
    setFlagbestSellerProducts(false);
    
    setTempArrayProducts([...products]);
  };


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
      />
    </>
  );
};

export default Category;
