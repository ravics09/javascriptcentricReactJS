import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import editPostStyle from "./editPost.module.css";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import FeedService from "./../../services/feedService";

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

const EditPost = () => {
  const history = useHistory();
  const formikRef = useRef();
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    title: "",
    content: "",
  });
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    async function fetchPostData(){
      const result = await FeedService.getPost(id);
      if(result.status === "success"){
        if (formikRef.current) {
          formikRef.current.setFieldValue(
            "title",
            result.post.postTitle
          );
          formikRef.current.setFieldValue(
            "content",
            result.post.postContent
          );
        }
      }
    }

    if (loggedInUser) {
      setUserId(loggedInUser.userId);
      fetchPostData();
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
    let updatedPostTitle = formValues.title;
    let updatePostContent = formValues.content;

    const url = `${API_URL}/editpost/${id}`;
    const payload = {
      updatedPostTitle,
      updatePostContent,
    };

    axios.put(url, payload).then(
      (response) => {
        if (response.status === 200) {
          swal({
            title: "Done!",
            text: "Your post updated successfully.",
            icon: "success",
            timer: 2000,
            button: false,
          });
          setTimeout(() =>{
            history.push(`/home`);
          },2500)
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
    <Container className={editPostStyle.container}>
      <Row className="mb-3">
        <Col md={9}>
          <Formik
            validationSchema={validationSchema}
            innerRef={formikRef}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setLoading(true);
              if (values) {
                handleSubmitPost(values);
              }
              setTimeout(() => {
                setSubmitting(false);
                setLoading(false);
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
              <Form onSubmit={handleSubmit} className={editPostStyle.postForm}>
                <Row className="mb-5">
                  <h3 style={{ marginLeft: 10 }}>Edit Your Post</h3>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationPostTitle">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        autoFocus
                        placeholder="New Post Title Here..."
                        name="title"
                        className={editPostStyle.postTitle}
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
                        className={editPostStyle.postContent}
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
                    className={editPostStyle.customBtn}
                    type="submit"
                    disabled={isLoading}
                    variant={isLoading ? "success" : "primary"}
                  >
                    {isLoading ? "Waiting to save" : "Save Changes"}
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    block
                    className={editPostStyle.customBtn}
                    type="reset"
                    disabled={isSubmitting}
                    variant="outline-danger"
                    onClick={resetForm}
                  >
                    Clear All
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    block
                    className={editPostStyle.customBtn}
                    type="reset"
                    disabled={isSubmitting}
                    variant="danger"
                    onClick={() => history.replace(`/home`)}
                  >
                    Go Back
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};
export default EditPost;
