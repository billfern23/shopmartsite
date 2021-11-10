import {useEffect, useState, useContext} from 'react'
import CategoriesContext from '../context/CategoriesContext'
import ProductCitem from './CategoriesMain/ProductCategoryItem'
import { Container, Row, Col, Button, Form, Card, CardGroup   } from 'react-bootstrap';
import '../css/Category.css'

const ProductCategories = () => {
    const{productcategory} = useContext(CategoriesContext)


    return (
        <div>
         <h3> 
         

                <span style={{color:"#EE0000"}}>Shop By Departments</span>
                </h3>
              <br />
        <Container >
          
        <div style={{display:'flex', justifyContent:'center' }} >
        <div style={{width:"90%"}} >
          
        <Row xs={1} md={2} lg={4} className="g-4">
              {
                  productcategory.map((category)=>(
                     
                    < ProductCitem category={category}/>
                  
                  ))  
                         
                    }
                      </Row>
                      </div>
            </div>
       </Container >
                       

                  
              
              

            
        </div>
    )
}

export default ProductCategories
