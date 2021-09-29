import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import signInStyle from "./signIn.module.css";

const API_URL = "http://localhost:9090/user";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("Email is mendatory"),
  password: yup.string().required("Password is mendatory"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = ({ props }) => {
  const history = useHistory();

  // const [disabled, setDisable] = useState(false);
  // const [submitting, setSubmitting] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // };

  const handleSignIn = (formValues) => {
    return new Promise((resolve, reject) => {
      console.log("handle sign in called",formValues);
      let email = formValues.email;
      let password = formValues.password;

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
            setUserId(response.data.userId); // will use userId for further operation

            if (checkboxChecked) {
              let today = new Date();
              let expiry = new Date(today.setDate(today.getDate() + 30));

              let expiryDay = expiry.getTime() / 1000;
              const item = {
                user: userName,
                expiry: expiryDay,
                token: jwtToken,
                userId: response.data.userId,
              };

              localStorage.setItem("userData", JSON.stringify(item));
              setCheckboxChecked(!checkboxChecked);
            } else {
              const item = {
                user: userName,
                token: jwtToken,
                userId: response.data.userId,
              };
              localStorage.setItem("userData", JSON.stringify(item));
            }
            history.push("/home");
            resolve(response);
          } else {
            alert(`Retrieve Message ${response.data.message}`);
          }
        },
        (error) => {
          // alert(`Server not responding or check your internet connection`);
          // console.log(error);
          reject(error);
        }
      );
    });
  };

  return (
    <Container
      className={signInStyle.container}
      style={{ border: "1px solid gray", borderRadius: 10 }}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleSignIn(values);
          setTimeout(() => {
            resetForm();
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form onSubmit={handleSubmit} className={signInStyle.signInForm}>
            <h3 className="mb-3">Sign In</h3>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={signInStyle.formControl}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                {touched.email && errors.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={signInStyle.formControl}
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                {/* <InputGroup.Append>
                  <InputGroup.Text>
                    <i
                      onClick={clickHandler}
                      class={showPass ? "fas fa-eye-slash" : "fas fa-eye"}
                    ></i>
                  </InputGroup.Text>
                </InputGroup.Append> */}

                {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Keep me logged in for 30 days"
                  onChange={(e) => setCheckboxChecked(!checkboxChecked)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Link to="/" style={{ color: "white" }} as={Col} md="12">
                Forget Password ?
              </Link>
            </Row>
            <Row>
              <Button
                block
                className={signInStyle.customBtn}
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </Button>
            </Row>

            <Row className="mr-3">
              <Button block className={signInStyle.customBtn}>
                Sign In With Google
              </Button>
            </Row>

            <Row className="ml-3">
              <Button block className={signInStyle.customBtn}>
                Sign In With LinkedIn
              </Button>
            </Row>

            <Row className="mb-3">
              <p
                style={{ color: "white", paddingTop: 10, textAlign: "center" }}
              >
                Don't have an account ? {""}
                <Link to="/signup" style={{ color: "white" }}>
                  Sign Up
                </Link>
              </p>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default SignIn;
