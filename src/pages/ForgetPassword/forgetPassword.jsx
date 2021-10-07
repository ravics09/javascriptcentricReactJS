import React from "react";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetPasswordStyle from "./forgetPassword.module.css";
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
    console.log("handleForgetPassword is called", formValues.email);
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
        swal({
          title: "Error!",
          text: "This email address not registered with us.",
          icon: "danger",
          timer: 2000,
          button: false,
        });
      }
    );
  };

  return (
    <Container
      className={ForgetPasswordStyle.container}
      style={{ border: "1px solid gray", borderRadius: 10 }}
    >
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
            <Row className="mb-5">
              <h3>Send Password Reset Link</h3>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormPassword">
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
                className={ForgetPasswordStyle.customBtn}
                type="submit"
                disabled={isSubmitting}
              >
                Request reset link
              </Button>
            </Row>
            <Row className="mb-2">
              <Link to="/signin" style={{ color: "white" }}>
                Back To Sign In Page ?
              </Link>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default ForgetPassword;
