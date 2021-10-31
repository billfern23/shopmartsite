
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';

import "../css/Crousel.css"
import {useState, useEffect} from 'react'
import Hero from '../images/Hero.JPG'
const Crousel = (props) => {


    return (       
     
        <Row>
     <Col className= "col-xs-12 col-lg-11">
    <Carousel variant="light" >

                    {
   
                props.bestSellers.map((bestSeller) =>(
                  
                   
                    <Carousel.Item interval={3000}>
                  
                    
                    <img height="20px" width="50px"  
                    className="  w-100"
                    src= {bestSeller.picurl}
                    alt="First slide"
                    />
                    
                            <Carousel.Caption>
                                <h5>{bestSeller.name}</h5>
                                  
      </Carousel.Caption>
                    </Carousel.Item>
                  
                  
                ))
              } 
 
    </Carousel>
   
    </Col>       
</Row>

    )
}

export default Crousel
