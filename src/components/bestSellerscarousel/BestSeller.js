import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Previousbutn from "../Previousbutn.js";
import "../../css/BestSellers.css";
import BestSellerCard from "./BestSellerCard";
import Nextbtn from "../Nextbtn";
import { useEffect, useState } from "react";

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/products?bestseller=yes`)
      .then((response) => response.json())
      .then((json) => {
        setBestSellers(json.data);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);

  var settings = {
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
        
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
        
      },
    ],
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div style={{ width: "80%", borderRadius: "10px" }}>
        <span style={{ color: "#EE0000", fontSize: "38px" }}>Best Sellers</span>
        <br />
        <Slider
          {...settings}
          prevArrow={<Previousbutn />}
          nextArrow={<Nextbtn />}
        >
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
    </div>
  );
};

export default BestSeller;
