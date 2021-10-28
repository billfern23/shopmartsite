import '../css/Register.css'
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import {useState} from 'react'


const Register = () => {
    const[user, setUser] = useState(false)

    if(user){
        

    } else {


    }


    const componentClicked = () =>{
        console.log("logged in")
    
    }

    const responseFacebook = response =>{
        setUser(true)
    }
   


    return (
        <Container>
            <Row> 
                <Col className="col-sm-8 col-md-8 col-lg-8" id="form" >
                    <h1> Sign Up </h1>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Col>
                <Col className="col-sm-2 col-md-2 col-lg-2" >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                     <FacebookLogin  
                        appId="392670839185339"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                        className="FbButton" 
                        textButton = "Sign in with fb" 
                        
                        buttonStyle={{align:"center",width: "190px", height: "50px", textAlign:"center", fontSize: "10px"}}/>

               
                </Col>
            </Row>


        
        </Container>
    )
}

export default Register
