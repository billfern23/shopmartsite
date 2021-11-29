import "../assests/css/Register.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";
import { useState} from "react";

// this file contains all the registration component, its standard nothing fancy
const Register = (props) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [homePhone, setHomePhone] = useState("");

  const [user, setUser] = useState(false);

  const [errors, setErrors] = useState(false);
  const [phoneflagerror, setphoneflagerror] = useState(false);
  const [homephoneflagerror, sethomephoneflagerror] = useState(false);
  const [fnameError, setfnameError] = useState("");
  const [fnameflag, setfnameflag] = useState("");

  const [lnameError, setlnameError] = useState("");
  const [lnameflag, setlnameflag] = useState("");

  const [emailError, setEmailError] = useState([]);
  const [emailflag, setlEmailflag] = useState([]);

  const [passwordError, setPasswordError] = useState([]);
  const [passwordflag, setpasswordflag] = useState("");

  const [phoneError, setPhoneError] = useState([]);
  const [phoneflag, setphoneflag] = useState("");

  const [homephoneError, setHomePhoneError] = useState([]);
  const [homephoneflag, setHomephoneflag] = useState("");
 
  const validation = () => {
   
    setErrors(true);
    let checker = true;
    if (!fname) {
      setfnameError("Please enter First name");
      setfnameflag("failed");

      checker = false;
    } else {
      setfnameError("");
      setfnameflag("passed");

      setfnameflag("passed");
    }

    if (!lname) {
      setlnameError("Please enter Last name");
      setlnameflag("failed");

      checker = false;
    } else {
      setlnameError("");
      setlnameflag("passed");
    }

    if (!email) {
      setEmailError("Please enter Email");
      setlEmailflag("failed");

      checker = false;
    } else {
      const regex = /[a-z0-9]+@[a-z]+.com|.ca$/gi;
      if (!regex.test(email)) {
        setEmailError(`Not a real email, please enter real email`);
        setlEmailflag("failed");
      } else {
        setEmailError("");
        setlEmailflag("passed");
      }
    }

    if (!password) {
      setPasswordError("Please enter Password");
      setpasswordflag("failed");

      checker = false;
    } else {
      if (password.length < 6) {
        setPasswordError("Password must be atleast 6 characters long");
        setpasswordflag("failed");
      } else {
        setPasswordError("");
        setpasswordflag("passed");
      }
    }
    if (checker) {
      if (phone) {
        setphoneflagerror(true);
        const regex2 = /^[0-9]+$/;
        if (!regex2.test(phone)) {
          setPhoneError("Phone number must contain all digits");
          checker = false;
          console.log("failed");
          setphoneflag("failed");
        } else {
          setphoneflag("passed");
          setPhoneError("");
        }
      }

      if (homePhone) {
        sethomephoneflagerror(true);
        const regex2 = /^[0-9]+$/;
        if (!regex2.test(homePhone)) {
          setHomePhoneError("Phone number must contain all digits");

          checker = false;
          setHomephoneflag("failed");
        } else {
          setHomephoneflag("passed");

          setPhoneError("");
        }
      }
    }

    return checker;
  };

  if (user) {
  } else {
  }

  const componentClicked = () => {
    console.log("logged in");
  };

  const responseFacebook = (response) => {
    setUser(true);
  };

  return (
    <>
      <Container className="container center_div">
        <h1 className="row justify-content-center"> Create New Account </h1>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridfName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                placeholder="First Name"
                value={fname}
                onChange={(event) => {
                  setfname(event.target.value);
                }}
                className={
                  errors === true
                    ? fnameflag === "passed"
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                    : ""
                }
              />
              <span className="error"> {fnameError}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridlName">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                placeholder="Last Name"
                value={lname}
                onChange={(event) => {
                  setlname(event.target.value);
                }}
                className={
                  errors === true
                    ? lnameflag === "passed"
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                    : ""
                }
              />
              <span className="error"> {lnameError}</span>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder=" Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className={
                  errors === true
                    ? emailflag === "passed"
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                    : ""
                }
              />

              <span className="error"> {emailError}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password*</Form.Label>

              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className={
                  errors === true
                    ? passwordflag === "passed"
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                    : ""
                }
              />

              <span className="error"> {passwordError}</span>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Phone"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className={
                  phoneflagerror === true
                    ? phoneflag === "passed"
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                    : ""
                }
              />
              <span className="error"> {phoneError}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridHome">
              <Form.Label>Home Phone</Form.Label>
              <Form.Control
                placeholder="Home Phone"
                value={homePhone}
                onChange={(event) => {
                  setHomePhone(event.target.value);
                }}
                className={
                  homephoneflagerror === true
                    ? homephoneflag === "passed"
                      ? "form-control is-valid"
                      : "form-control is-invalid"
                    : ""
                }
              />
              <span className="error"> {homephoneError}</span>
            </Form.Group>
          </Row>
          <Row>
            <div className="d-grid gap-2">
              <Button
                style={{color:"white",fontWeight:"600", fontSize:"25px", background:"#EE0000", border:"1px solid red"}}
                size="sm"
                type="button"
                onClick={() => {
                  if (validation()) {
                    let userss = {};
                    let initialarray = [];
                    if (phone) {
                      initialarray.push(parseInt(phone));
                    }
                    if (homePhone) {
                      initialarray.push(parseInt(homePhone));
                    }

                    if (homePhone || phone) {
                      userss = {
                        fname: fname,
                        lname: lname,
                        email: email,
                        password: password,
                        phone: initialarray,
                      };
                    } else {
                      userss = {
                        fname: fname,
                        lname: lname,
                        email: email,
                        password: password,
                      };
                    }

                    fetch(`${process.env.REACT_APP_BACKEND}/customer/register`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Origin": "*",
                      },
                      body: JSON.stringify(userss),
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                  }
                }}
              >
                Create Account
              </Button>
            </div>
          </Row>
        </Form>

        <br />

        <h3>
          <span> OR</span>
          <br />
        </h3>
      </Container>
      <Container>
        <br />

        <div className="d-flex justify-content-center">
          <div>
            <FacebookLogin
              appId="392670839185339"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              className="FbButton"
              textButton=" Continue with Facebook"
              cssClass="my-facebook-button-class"
              icon={<FaFacebook />}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
