import { useState, useEffect } from "react";
import Category from "./Category";
import { useLocation } from "react-router-dom";
import DisplayMain from "./displaycomponents/DisplayMain";
// this is the main products file, when the url hits this is the component that checks everything. even with category
const Products = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const category = search.get("category"); //searches for category params
  const [products, setProducts] = useState([]);
  const [clearanceProducts, setClearanceProducts] = useState([]);
  const [flagClearance, setFlagClearance] = useState(false);
  const [bestSellerProducts, setbestSellerProducts] = useState([]);
  const [flagbestSellerProducts, setFlagbestSellerProducts] = useState(false);
  const [tempArrayProducts, setTempArrayProducts] = useState([])
  const [tempArrayBestSeller, setTempArrayBestSeller] = useState([])
  const [tempArrayClearance, settempArrayClearance] = useState([])
  const [xFlag, setxflag] = useState(false)
  //xflag has been explained properly in Category, but it is used to reset all arrays to original
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/products`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.Products);
        setTempArrayProducts(json.Products)
    
        setFlagClearance(false);
        setFlagbestSellerProducts(false);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [location, xFlag]);


//sort ascending bestsellers, clearance or original
  const ascending = () => {

   
    let ascending = [];
    if (flagClearance) {
      ascending = clearanceProducts.sort((product1, product2) =>
        product1.price > product2.price ? 1 : -1
      );
      setClearanceProducts([...ascending]);
    } else if (flagbestSellerProducts) {
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
  
  //set descending clearance, bestSellers or original
  const descending = () => {
    let descending = [];
    if (flagClearance) {
      descending = clearanceProducts
        .sort((product1, product2) =>
          product1.price > product2.price ? 1 : -1
        )
        .reverse();
      setClearanceProducts([...descending]);
    } else if (flagbestSellerProducts) {
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

  //filter original array for clearance category
  const clearance = () => {
    setFlagbestSellerProducts(false);

    const tempClearance = products.filter(
      (product1) => product1.category === "Clearance"
    );
    
    settempArrayClearance([...tempClearance]);
    setClearanceProducts([...tempClearance]);
    setFlagClearance(true);
  };

  //filter original array for bestsellers
  const bestsellers = () => {
    setFlagClearance(false);
    const tempBestsellers = products.filter(
      (product1) => product1.bestSeller === true
    );
    
    setTempArrayBestSeller([...tempBestsellers]);
    setbestSellerProducts([...tempBestsellers]);
    setFlagbestSellerProducts(true);
  };

  //load this when you want to go from best sellers to all products

  const turnOffFlags = () => {
    setFlagClearance(false);
    setFlagbestSellerProducts(false);

  
    setTempArrayProducts([...products]);
  };

  //this manipulates xflag because when you sort, it sorts the original array. 
  const clearAllFilter = () => {

    if(flagClearance){
      setClearanceProducts([...tempArrayClearance]);
    }
    else if(flagbestSellerProducts){
      
      setbestSellerProducts([...tempArrayBestSeller])
    }
    else {
      setxflag(!xFlag)
      setTempArrayProducts([...products]);
    }
  }
  
  // if there is a category take switch to this component else go to display main, pass all necassary flags and components
  if (category) {
    return <Category category={category} />;
  } else {
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
          Products
        </span>

        <br />
        <DisplayMain
          products={
            flagClearance === true
              ? clearanceProducts
              : flagbestSellerProducts === true
              ? bestSellerProducts
              : tempArrayProducts
          }
          ascending={ascending}
          descending={descending}
          clearance={clearance}
          bestsellers={bestsellers}
          turnOffFlags={turnOffFlags}
          flag={true}
          flagClearance={flagClearance}
          flagbestSellerProducts={flagbestSellerProducts}
          clearAllFilter={clearAllFilter}
          xFlag={xFlag}
          tempArrayProducts={tempArrayProducts}
        />
      </>
    );
  }
};

export default Products;
