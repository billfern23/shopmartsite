import { ListGroup, ListGroupItem, Card, Button, Form, Image, Col, Nav    } from 'react-bootstrap';
import {useEffect, useState} from 'react'

import React from "react";
import {

  Link
} from "react-router-dom";

const ProductCategoryItem = (props) => {
   
const Electronics = "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
     
   
    return (
      <Col>
      <Card style={{ width: '18rem', textAlign:"center" ,  border:'1px solid white' }} >
      <Link to={`/products?category=${props.category}`} >
      <Image  src=  {
      props.category=== "Home Furniture"? "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" 
      : props.category==="Luggage"? "https://images.unsplash.com/photo-1610244767159-0f9797ff1926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
      : props.category ==="Electronics"? "https://images.unsplash.com/photo-1601524909162-ae8725290836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" 
      :props.category==="Clothing"?  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" :""}
      style={{ height:"20vh", width:"100%", objectFit:'contain'}}  roundedCircle  />
         </Link>
           
           <Link to={`/products?category=${props.category}`}
          style={{color:"#EE0000",   fontWeight: "bold", textDecoration: "none"}}
          > {props.category} 
          
           </Link>
           
           
           
      
      </Card>



       
      </Col>
          
       
       
    
     
    )
}

export default ProductCategoryItem
