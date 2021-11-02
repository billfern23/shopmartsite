import React from 'react'
import { Card, Row, Col, Button, Form   } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const ProductCard = (props) => {


    return (

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Link to={`/product/${props.id}`}> 
                <Button variant="dark" >View More Details</Button> </Link>
            </Card.Body>
            </Card>



    )
}

export default ProductCard
