import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Previousbutn from "./Previousbutn.js"
import '../css/BestSellers.css'
import { MdArrowForwardIos  } from "react-icons/md";
import BestSellerCard from './BestSellerCard'
import Nextbtn from './Nextbtn'






const BestSeller = (props) => {
    var settings = {
      
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
           
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div style={{display:'flex', justifyContent:'center', margin:'0px' }} >
        <div style={{width:"80%"}} >
        <Slider {...settings}
    
       
 
        prevArrow={ <Previousbutn />}
        nextArrow={ <Nextbtn />}
      

        >
                <BestSellerCard key="" img="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
            {
                props.bestSellers.map((bestseller)=>(
                    
                    <BestSellerCard 
                    key={bestseller._id} 
                    img={bestseller.picurl} 
                    category={bestseller.category}
                    title={bestseller.name}
                    price={bestseller.price}
                    />
                    
                  
                ))
            }
              
                
                
        </Slider>
        </div>
    </div>
    )
   
}

export default BestSeller
