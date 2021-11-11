import { useState, useEffect } from "react";
import Category from "./Category";
import { useLocation } from "react-router-dom";
import DisplayMain from "./displaycomponents/DisplayMain";

const Products = (history) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const category = search.get("category");
  const [products, setProducts] = useState([]);
  const [clearanceProducts, setClearanceProducts] = useState([]);
  const [flagClearance, setFlagClearance] = useState(false);
  const [bestSellerProducts, setbestSellerProducts] = useState([]);
  const [flagbestSellerProducts, setFlagbestSellerProducts] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.Products);
        setFlagClearance(false);
        setFlagbestSellerProducts(false);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [location]);

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
      ascending = products.sort((product1, product2) =>
        product1.price > product2.price ? 1 : -1
      );
      setProducts([...ascending]);
    }
  };

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
      descending = products
        .sort((product1, product2) =>
          product1.price > product2.price ? 1 : -1
        )
        .reverse();
      setProducts([...descending]);
    }
  };

  const clearance = () => {
    setFlagbestSellerProducts(false);

    const tempClearance = products.filter(
      (product1) => product1.category === "Clearance"
    );

    setClearanceProducts([...tempClearance]);
    setFlagClearance(true);
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
              : products
          }
          ascending={ascending}
          descending={descending}
          clearance={clearance}
          bestsellers={bestsellers}
          turnOffFlags={turnOffFlags}
          flag={true}
          flagClearance={flagClearance}
          flagbestSellerProducts={flagbestSellerProducts}
        />
      </>
    );
  }
};

export default Products;
