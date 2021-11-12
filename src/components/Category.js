import { useEffect, useState } from "react";
import DisplayMain from "./displaycomponents/DisplayMain";

import { useLocation } from "react-router-dom";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [flagClearance, setFlagClearance] = useState(false);
  const [bestSellerProducts, setbestSellerProducts] = useState([]);
  const [flagbestSellerProducts, setFlagbestSellerProducts] = useState(false);
  const [flagAscending, setflagAscending] = useState(false);
  const [flagDescending, setflagDescending] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/products?category=${props.category}`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);
        setFlagbestSellerProducts(false)
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [props.category, location]);

  const ascending = () => {
    
    let ascending = [];
    if (flagbestSellerProducts) {
      ascending = bestSellerProducts.sort((product1, product2) =>
        product1.price > product2.price ? 1 : -1
        
      );
      setbestSellerProducts([...ascending]);
      
    } else {
      ascending = products.sort((product1, product2) =>
        product1.price > product2.price ? 1 : -1
      );
      setProducts([...ascending]);
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
      descending = products
        .sort((product1, product2) =>
          product1.price > product2.price ? 1 : -1
        )
        .reverse();
      setProducts([...descending]);
    }
  
  };

  const bestsellers = () => {
    setFlagClearance(false);
    const tempBestsellers = products.filter(
      (product1) => product1.bestSeller === true
    );

    setbestSellerProducts([...tempBestsellers]);
    setFlagbestSellerProducts(true);
  };

  const turnOffFlags = () => {
    setFlagClearance(false);
    setFlagbestSellerProducts(false);
    const tempProducts = products;
    setProducts([...tempProducts]);
  };

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
          flagbestSellerProducts === true ? bestSellerProducts : products
        }
        ascending={ascending}
        descending={descending}
        flag={false}
        bestsellers={bestsellers}
        turnOffFlags={turnOffFlags}
        flagClearance={flagClearance}
        flagbestSellerProducts={flagbestSellerProducts}
        flagDescending={flagDescending}
          flagAscending={flagAscending}
      />
    </>
  );
};

export default Category;
