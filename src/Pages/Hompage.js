import React from 'react'


import { Container, Row, Col, Button, Form   } from 'react-bootstrap';
import ProductCategories from '../components/ProductCategories'
import BestSeller from '../components/bestSellerscarousel/BestSeller'
import Hero from '../components/Hero'
import {useState, useEffect} from 'react'
const Hompage = () => {


    return (
   <>
      

            < Hero/>
         

      
       <br /> 
       <br />
       <ProductCategories />
       <br />
      
       <BestSeller />
     
</>

    )
}

export default Hompage
