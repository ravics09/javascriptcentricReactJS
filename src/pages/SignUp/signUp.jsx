import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
const API_URL = "http://localhost:9090/user";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${API_URL}/signup`;
    const payload = {
      fullName,
      email,
      password,
    };

    axios.post(url, payload).then(
      (response) => {
        if(response.data.statusCode===200){
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          alert(`Retrieve Message ${response.data.message}`);
        } else {
          alert(`Retrieve Message ${response.data.message}`);
        }
      },
      (error) =>{
        alert(`Server not responding or check your internet connection`);
      }
    )
  };

  const validateForm = () => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  };

  //#283747  #34475B  #181A1F
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="Login"
          style={{ border: "1px solid gray", borderRadius: "20px" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <h3 className="mb-3">Sign Up</h3>
              <Form.Control
                placeholder="Full Name"
                className="form-control"
                color="white"
                autoFocus
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                placeholder="Email"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                placeholder="Password"
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Control
                placeholder="Confirm Password"
                className="form-control"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              block
              className="custom-btn"
              type="submit"
              disabled={!validateForm()}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
