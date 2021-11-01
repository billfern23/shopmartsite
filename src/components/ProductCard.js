import React from 'react'
import { Card, Row, Col, Button, Form   } from 'react-bootstrap';
import {useState, useEffect} from 'react'
const ProductCard = (props) => {


    return (

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>



    )
}

export default ProductCard
