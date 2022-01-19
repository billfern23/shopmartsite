import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Previousbutn from "../Previousbutn.js";
import "../../assests/css/BestSellers.css";
import BestSellerCard from "./BestSellerCard";
import Nextbtn from "../Nextbtn";
import { useEffect, useState, useContext } from "react";
import LoadingContext from "../../context/LoadingContext";
//css used to target components after they have loaded in html rather then looking for the back functions
//best seller carousel, get best sellers useEffect no call back function because not needed
const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const {Loading, setLoading} = useContext(LoadingContext);
  useEffect(() => {
 
    fetch(`${process.env.REACT_APP_BACKEND}/products?bestseller=yes`)
      .then((response) => response.json())
      .then((json) => {
        setBestSellers(json.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [setLoading]);

  //settings for react-slick

  var settings = {
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode:false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode:false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode:false,
        },
        
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode:false,
        },
        
      },
    ],
  };

  return (
    
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}> 
    {Loading === true ? "" :      
      <div style={{ width: "80%", borderRadius: "10px" }}>
                  {/*Put best sellers on top at the start of carousel*/}
        <span style={{ color: "#EE0000", fontSize: "38px" }}>Best Sellers</span>
        <br />
                  {/* react slick slider set settings call my custom buttons*/}
        <Slider
          {...settings}
          prevArrow={<Previousbutn />}
          nextArrow={<Nextbtn />}
        >
          {/* call best seller card and map each other*/}
          {bestSellers.map((bestseller) => (
            <BestSellerCard
              key={bestseller._id}
              id={bestseller._id}
              img={bestseller.picurl}
              category={bestseller.category}
              title={bestseller.name}
              price={bestseller.price}
              
            />
          ))}
        </Slider>
      </div>
}
    </div>
  );
};

export default BestSeller;
