import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./signIn.css";

const API_URL = "http://localhost:9090/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
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
          setUser(userName);
          setEmail("");
          setPassword("");
          alert(`Welcome ${user} ${response.data.message}`);

          if (checkboxChecked) {
            let today = new Date();
            let expiryDay = new Date(today.setDate(today.getDate() + 30));

            const item = {
              user: userName,
              expiry: expiryDay,
            };

            localStorage.setItem("userData", JSON.stringify(item));
            setCheckboxChecked(!checkboxChecked);
          } else {
            localStorage.setItem("userData", userName);
          }
        } else {
          alert(`Retrieve Message ${response.data.message}`);
        }
      },
      (error) => {
        alert(`Server not responding or check your internet connection`);
      }
    );
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="Login"
          style={{ border: "1px solid gray", borderRadius: "20px" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <h3 className="mb-3">Sign In</h3>
              <Form.Control
                autoFocus
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                placeholder="Password"
                type="password"
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
            <Button
              block
              className="mb-3"
              type="submit"
              disabled={!validateForm()}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
