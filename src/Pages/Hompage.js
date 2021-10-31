import React from 'react'
import Header from '../components/Headers'
import Crousel from '../components/Crousel'
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';
import ProductCategories from '../components/ProductCategories'
import BestSeller from '../components/BestSeller'
import {useState, useEffect} from 'react'
const Hompage = () => {
  const[bestSellers, setBestSellers] = useState([])

  useEffect(() => {
     fetch("http://localhost:5000/products?bestseller=yes")
     .then(response=> response.json())
     .then(json =>{
      setBestSellers(json.data)
     })
     .catch((err)=>{console.log(`err ${err}`)})
  
  
  }, [])


    return (
   <>
       <Container>

              <br /> 
            <Crousel bestSellers={bestSellers}/>

       </Container>
       <br /> 
       <ProductCategories />
       <br />
      
       <BestSeller bestSellers={bestSellers} />
</>

    )
}

export default Hompage
