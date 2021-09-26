import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import signUpStyle from "./signUp.module.css";
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
        if (response.data.statusCode === 200) {
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          alert(`Retrieve Message ${response.data.message}`);
        } else {
          alert(`Retrieve Message ${response.data.message}`);
        }
      },
      (error) => {
        alert(`Server not responding or check your internet connection`);
      }
    );
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
    <div className={signUpStyle.container} style={{border: '1px solid gray', borderRadius: 10}}>
      <Form onSubmit={handleSubmit} className={signUpStyle.signUpForm}>
      <h3 className="mb-3">Sign Up</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            autoFocus
            type="text"
            placeholder="Full Name"
            className={signUpStyle.formControl}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            placeholder="Email"
            type="email"
            className={signUpStyle.formControl}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            placeholder="Password"
            className={signUpStyle.formControl}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Control
            placeholder="Confirm Password"
            className={signUpStyle.formControl}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          className={signUpStyle.customBtn}
          type="submit"
          disabled={!validateForm()}
        >
          Sign Up
        </Button>
        <p style={{ color: "white", paddingTop: 10, textAlign: "center" }}>
          Already have an account ? {""}
          <Link to="/signin" style={{ color: "white" }}>
            Sign In here
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default SignUp;
