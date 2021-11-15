import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Previousbutn from "../components/Previousbutn.js";
import "../assests/css/BestSellers.css";
import Nextbtn from "../components/Nextbtn";
import HotDeals from "../assests/images/Hot.png";
import Phone from "../assests/images/Phone.png";
import TV from "../assests/images/TV.png";
import headPhones from "../assests/images/HeadPhones.png";
import PlayBoy from "../assests/images/PlayBoy.png";
import Couch from "../assests/images/Couch.png";
import Camera from "../assests/images/Camera.png";
import Tshirt from "../assests/images/tshirt.png";
import Blanket from "../assests/images/Blanket.png";

//file contains standard react-slick slideshow, nothing fancy
const Hero = () => {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ff914d",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div style={{ width: "79%" }}>
        <Slider
          {...settings}
          prevArrow={<Previousbutn />}
          nextArrow={<Nextbtn />}
        >
          <div>
            <img
              src={HotDeals}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={Phone}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={TV}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={headPhones}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={PlayBoy}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={Couch}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={Camera}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={Tshirt}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={Blanket}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
