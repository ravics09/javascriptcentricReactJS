import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import signInStyle from "./signIn.module.css";

const API_URL = "http://localhost:9090/user";

const SignIn = ({props}) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${API_URL}/signin`;
    const payload = {
      email,
      password,
    };

    axios.post(url, payload).then(
      (response) => {
        if (response.data.statusCode === 200) {
          let userName = response.data.user.fullName;
          let jwtToken = response.data.token;
          setUser(userName);
          setEmail("");
          setPassword("");
          setUserId(response.data.userId); // will use userId for further operation

          if (checkboxChecked) {
            let today = new Date();
            let expiry = new Date(today.setDate(today.getDate() + 30));

            let expiryDay = expiry.getTime() / 1000;
            const item = {
              user: userName,
              expiry: expiryDay,
              token: jwtToken,
              userId: response.data.userId
            };

            localStorage.setItem("userData", JSON.stringify(item));
            setCheckboxChecked(!checkboxChecked);
          } else {
            localStorage.setItem("userData", userName);
          }
          history.push('/home');
        } else {
          alert(`Retrieve Message ${response.data.message}`);
        }
      },
      (error) => {
        alert(`Server not responding or check your internet connection`);
        console.log(error);
      }
    );
  };

  return (
    <div
      className={signInStyle.container}
      style={{ border: "1px solid gray", borderRadius: 10 }}
    >
      <Form onSubmit={handleSubmit} className={signInStyle.signInForm}>
        <h3 className="mb-3">Sign In</h3>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            autoFocus
            type="email"
            placeholder="Email"
            className={signInStyle.formControl}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            placeholder="Password"
            type="password"
            className={signInStyle.formControl}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check
            type="checkbox"
            label="Keep me logged in for 30 days"
            onChange={(e) => setCheckboxChecked(!checkboxChecked)}
          />
        </Form.Group>
        <Link to="/" style={{ color: "white" }}>
          Forget Password ?
        </Link>
        <Button
          block
          className={signInStyle.customBtn}
          type="submit"
          disabled={!validateForm()}
        >
          Sign In
        </Button>
        <Button block className={signInStyle.customBtn} type="submit">
          Sign In With Google
        </Button>
        <Button block className={signInStyle.customBtn} type="submit">
          Sign In With LinkedIn
        </Button>
        <p style={{ color: "white", paddingTop: 10, textAlign: "center" }}>
          Don't have an account ? {""}
          <Link to="/signup" style={{ color: "white" }}>
            Sign Up
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default SignIn;
