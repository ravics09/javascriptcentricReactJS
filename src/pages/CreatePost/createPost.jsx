import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import createPostStyle from "./createPost.module.css";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

const API_URL = "http://localhost:9090/feed";

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .max(100, "*Title must be less than 100 characters")
    .required("Post Title is mendatory"),
  content: yup
    .string()
    .max(5000, "*Content must be less than 5000 characters")
    .required("Post Content is mendatory"),
});

const initialValues = {
  title: "",
  content: "",
};

const CreatePost = () => {
  const [userId, setUserId] = useState("");
  const [isLoading, setLoading] = useState(false);

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("userData"));
    if (loggedInUser) {
      setUserId(loggedInUser.userId);
    } else {
      return null;
    }
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, []);

  const handleSubmitPost = (formValues) => {
    let postTitle = formValues.title;
    let postContent = formValues.content;

    const url = `${API_URL}/createpost`;
    const payload = {
      userId,
      postTitle,
      postContent,
    };

    axios.post(url, payload).then(
      (response) => {
        if (response.status === 200) {
          swal({
            title: "Done!",
            text: "You have posted successfully.",
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
    <Container className={createPostStyle.container}>
      <Row className="mb-3">
        <Col md={9}>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setLoading(true)
              if(values){
                handleSubmitPost(values);
              } else {
                  alert("Title missing")
              }
              setTimeout(() => {
                setSubmitting(false);
                setLoading(false)
              }, 3000);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              resetForm,
              isSubmitting,
              values,
            }) => (
              <Form
                onSubmit={handleSubmit}
                className={createPostStyle.postForm}
              >
                <Row className="mb-5">
                  <h3 style={{ marginLeft: 10 }}>Create A New Post</h3>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationPostTitle">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        autoFocus
                        placeholder="New Post Title Here..."
                        name="title"
                        className={createPostStyle.postTitle}
                        value={values.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationPostContent"
                  >
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Write your post content here..."
                        name="content"
                        className={createPostStyle.postContent}
                        value={values.content}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        maxlength="5000"
                        minlength="10"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-2" style={{ padding: 10 }}>
                  <Button
                    block
                    className={createPostStyle.customBtn}
                    type="submit"
                    disabled={isLoading}
                    variant={isLoading ? "success" : "primary"}
                  >
                      {isLoading ? 'Waiting to publish' : 'Publish'}
                    
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    block
                    className={createPostStyle.customBtn}
                    type="reset"
                    disabled={isSubmitting}
                    variant="outline-danger"
                    onClick={resetForm}
                  >
                    Clear
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
        <Col md={3}>World</Col>
      </Row>
    </Container>
  );
};
export default CreatePost;
