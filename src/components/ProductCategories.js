import {useEffect, useState} from 'react'
import ProductCitem from './ProductCategoryItem'
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';


const ProductCategories = () => {

       

   
  

    const[productcategory, setProductcategory] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products/categories")
        .then(response=> response.json())
        .then(json =>{
            setProductcategory(json.categories)
            
        })
        .catch((err)=>{console.log(`err ${err}`)})
     
     
     }, [])


    return (
        <div>
         <h3> 
         

                <span >Shop By Departments</span>
                </h3>
              <br />
            
              <Row>
              <Col className="col-lg-2">
                  </Col>
              {
                  productcategory.map((category)=>(
                     <Col className="col-lg-" align="center">
                    < ProductCitem category={category}/>
                   </Col>
                  ))  
                         
}
        <Col className="col-lg-2">
                  </Col>
</Row>
                       

                  
              
              

            
        </div>
    )
}

export default ProductCategories
