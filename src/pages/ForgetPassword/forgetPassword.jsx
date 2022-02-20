import React from "react";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Formik } from "formik";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetPasswordStyle from "./forgetPassword.module.css";
import RN_IMG from "./../../assets/images/forogtimg.png";
import { AiOutlineMail } from "react-icons/ai";

const API_URL = "http://localhost:9090/user";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("Email is mendatory"),
});

const initialValues = {
  email: "",
};

const ForgetPassword = () => {
  const history = useHistory();

  const handleForgetPassword = (formValues) => {
    let email = formValues.email;
    const url = `${API_URL}/forgetpassword`;

    const payload = {
      email,
    };

    axios.post(url, payload).then(
      (response) => {
        if (response.data.statusCode === 200) {
          swal({
            title: "Done!",
            text: "Password reset link sent to your registered email address.",
            icon: "success",
            timer: 2000,
            button: false,
          });
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
    <Container className={ForgetPasswordStyle.container}>
      <Row className={ForgetPasswordStyle.formContainer}>
        <Row style={{ textAlign: "center", paddingBottom: 50 }}>
          <h3 className={ForgetPasswordStyle.headerTitle}>Password Reset</h3>
          <p>Forgot your password? Reset it here.</p>
        </Row>
        <Row>
          <Col>
            <Row className="mb-3">
              <Image
                src={RN_IMG}
                style={{
                  borderRadius: "30px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Row>
          </Col>
          <Col>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                handleForgetPassword(values);
                setTimeout(() => {
                  resetForm();
                  setSubmitting(false);
                }, 4000);
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
                <Form
                  onSubmit={handleSubmit}
                  className={ForgetPasswordStyle.forgetPasswordForm}
                >
                  <Row className="mb-3">
                    <Form.Group controlId="validationFormPassword">
                      <Form.Label>Enter email address</Form.Label>
                      <InputGroup>
                        <InputGroup.Text style={{ backgroundColor: "white" }}>
                          <AiOutlineMail />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name="email"
                          className={ForgetPasswordStyle.formControl}
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
                  <Row className="mb-2" style={{ padding: 10 }}>
                    <Button
                      block
                      className={ForgetPasswordStyle.requestLinkBtn}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Request reset link
                    </Button>
                  </Row>
                  <Row className="mb-2">
                    <span
                      style={{
                        color: "black",
                        paddingTop: 10,
                      }}
                    >
                      Want to sign in ?
                      <Button
                        as={NavLink}
                        to="/signin"
                        className={ForgetPasswordStyle.customBtn}
                      >
                        Sign In
                      </Button>
                    </span>
                  </Row>
                  <Row className="mb-2">
                    <span
                      style={{
                        color: "black",
                        paddingTop: 10,
                      }}
                    >
                      Don't have an account ?
                      <Button
                        as={NavLink}
                        to="/signup"
                        className={ForgetPasswordStyle.customBtn}
                      >
                        Sign Up
                      </Button>
                    </span>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default ForgetPassword;
