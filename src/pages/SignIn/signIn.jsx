import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill, BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import signInStyle from "./signIn.module.css";

const API_URL = "http://localhost:9090/user";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("Please provide your email."),
  password: yup.string().required("Please provide your password."),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = ({ props }) => {
  const history = useHistory();

  const [showPass, setShowPass] = useState(false);
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
          swal({
            title: "Done!",
            text: "You are redirecting to home page",
            icon: "success",
            timer: 2000,
            button: false,
          });

          setTimeout(function () {
            history.push("/home");
        }, 3000);

        }
      },
      (error) => {
        if (error.response) {
          swal({
            title: "Error!",
            text: `${error.response.data}`,
            icon: "warning",
            timer: 2000,
            button: false,
          });
        } else {
          swal({
            title: "Error!",
            text: `Server Not Responding`,
            icon: "warning",
            timer: 2000,
            button: false,
          });
        }
      }
    );
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
            <Row className="mb-3">
              <h3>Welcome Back</h3>
              <p>Enter your email and password to sign in</p>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text style={{ backgroundColor: "white" }}>
                    <AiOutlineMail />
                  </InputGroup.Text>
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
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text style={{ backgroundColor: "white" }}>
                    <BsLock />
                  </InputGroup.Text>
                  <Form.Control
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className={signInStyle.formControl}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <InputGroup.Text onClick={() => setShowPass(!showPass)}>
                    {showPass ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                  {touched.password && errors.password ? (
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  ) : null}
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember for 30 days"
                  onChange={(e) => setCheckboxChecked(!checkboxChecked)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Link
                to="/forgetpassword"
                style={{ color: "white" }}
                as={Col}
                md="12"
              >
                Forget Password ?
              </Link>
            </Row>
            <Row className="mb-2" style={{ padding: 10 }}>
              <Button
                block
                className={signInStyle.customBtn}
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </Button>
            </Row>

            <Row className="mb-2" style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Button block className={signInStyle.googleSignBtn}>
                Sign In With {"  "}
                <InputGroup.Text
                  style={{
                    backgroundColor: "#ffff",
                    border: "white",
                  }}
                >
                  <FcGoogle />
                </InputGroup.Text>
              </Button>
            </Row>

            <Row className="mb-2">
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
