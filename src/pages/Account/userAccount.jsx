import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import userAccountStyle from "./userAccount.module.css";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Image,
  InputGroup,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const API_URL = "http://localhost:9090/user";

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .max(50, "*Fullname must be less than 50")
    .required("Please provide your fullname"),
  email: yup.string(),
  userName: yup.string().max(50, "*Username must be less than 50 characters"),
  // .required("Username is mendatory"),
  mobile: yup
    .string()
    .max(10, "*Mobile number must be less than 10 characters"),
  location: yup.string(),
  bio: yup
    .string()
    .max(500, "*About Us must be less than 500 characters"),
  work: yup.string(),
  education: yup
    .string(),
  skills: yup.string()
});

const UserAccount = () => {
  const formikRef = useRef();
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    email: "",
    userName: "",
    mobile: "",
    location: "",
    bio: "",
    work: "",
    education: "",
    skills: "",
  });
  const [id, setUserId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [work, setWork] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    // let id = "61657cf9bed59bee8545f88f";
    const loggedInUser = JSON.parse(localStorage.getItem("userData"));
    if (loggedInUser) {
      setUserId(loggedInUser.userId);
      const url = `${API_URL}/profile/${loggedInUser.userId}`;
      axios.get(url).then((response) => {
        if (response.status === 200) {
          setFullName(response.data.user.fullName);
          setEmail(response.data.user.email);
          setBio(response.data.user.bio);
          setSkills(response.data.user.skills);
          setLocation(response.data.user.location);
          setWork(response.data.user.work);
  
          if (formikRef.current) {
            formikRef.current.setFieldValue(
              "fullName",
              response.data.user.fullName
            );
            formikRef.current.setFieldValue("email", response.data.user.email);
            formikRef.current.setFieldValue(
              "userName",
              response.data.user.userName
            );
            formikRef.current.setFieldValue("mobile", response.data.user.mobile);
            formikRef.current.setFieldValue(
              "location",
              response.data.user.location
            );
            formikRef.current.setFieldValue("bio", response.data.user.bio);
            formikRef.current.setFieldValue("work", response.data.user.work);
            formikRef.current.setFieldValue(
              "education",
              response.data.user.education
            );
            formikRef.current.setFieldValue("skills", response.data.user.skills);
          }
        }
      });
    }

  }, []);

  const handleSubmitPost = (formValues) => {
    let fullName = formValues.fullName;
    let email = formValues.email;
    let userName = formValues.userName;
    let mobile = formValues.mobile;
    let location = formValues.location;
    let bio = formValues.bio;
    let work = formValues.work;
    let education = formValues.education;
    let skills = formValues.skills;

    const url = `${API_URL}/editprofile/${id}`;
    const payload = {
      fullName,
      email,
      userName,
      mobile,
      location,
      bio,
      work,
      education,
      skills,
    };

    axios.put(url, payload).then(
      (response) => {
        if (response.status === 200) {
          swal({
            title: "Done!",
            text: "Your Profile Updated Successfully",
            icon: "success",
            timer: 2000,
            button: false,
          });
          window.location.reload();
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
    <Container className={userAccountStyle.container}>
      <Row>
        <Col md={8}>
          <Row className={userAccountStyle.accountProfileSection}>
            <div className={userAccountStyle.box}>
              <span>
                <Image
                  src={LEADER_IMG}
                  className={userAccountStyle.bio_photo}
                />
              </span>
            </div>
            <div className={userAccountStyle.box2}>
              <div className={userAccountStyle.userDetail}>
                <div className={userAccountStyle.profileInfo}>
                  <p>
                    <b>
                      <big>{fullName}</big>
                    </b>
                  </p>
                  <p style={{color: work ? "darkgreen" :"red"}}>{work ? work: "Add Work Experience"} </p>
                  <p style={{color: location ? "darkgreen" :"red"}}>{location ? location : "Add Location Info"}</p>
                </div>
                <div>
                  <Button variant="primary" onClick={() => setLgShow(true)}>
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </Row>
        </Col>

        <Col md={4}>
          <Row className={userAccountStyle.skillSection}>
            <Card>
              <Card.Header>About You</Card.Header>
              <Card.Body>
                <Card.Text>
                  {bio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className={userAccountStyle.skillSection}>
            <Card>
              <Card.Header>Skills Langauges</Card.Header>
              <Card.Body>
                <Card.Text>{skills}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className={userAccountStyle.skillSection}>
            <Card>
              <Card.Header>Your Activities</Card.Header>
              <Card.Body>
                <Card.Text>10 posts published</Card.Text>
                <Card.Text>5 comments written</Card.Text>
                <Card.Text>19 likes on your post</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
      <Formik
        validationSchema={validationSchema}
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setLgShow(false);
          if (values) {
            handleSubmitPost(values);
          }
          setTimeout(() => {
            setSubmitting(false);
            setLgShow(false);
          }, 3000);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Edit Profile
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={handleSubmit}
                className={userAccountStyle.postForm}
              >
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFullName">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        autoFocus
                        placeholder="FullName"
                        name="fullName"
                        className={userAccountStyle.postTitle}
                        value={values.fullName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.fullName && errors.fullName ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.fullName}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFullName">
                    <InputGroup>
                      <Form.Control plaintext readOnly
                        type="email"
                        name="email"
                        disabled={true}
                        className={userAccountStyle.postTitle}
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                  <Form.Group as={Col} md="12" controlId="validationUserName">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        name="userName"
                        className={userAccountStyle.postTitle}
                        value={values.userName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.userName && errors.userName ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.userName}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationMobile">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        className={userAccountStyle.postTitle}
                        value={values.mobile}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.mobile && errors.mobile ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.mobile}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationLocation">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Location"
                        name="location"
                        className={userAccountStyle.postTitle}
                        value={values.location}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.location && errors.location ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.location}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationWork">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Work"
                        name="work"
                        className={userAccountStyle.postTitle}
                        value={values.work}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.work && errors.work ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.work}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationEducation">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Education"
                        name="education"
                        className={userAccountStyle.postTitle}
                        value={values.education}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.education && errors.education ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.education}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationSkills">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Skills"
                        name="skills"
                        className={userAccountStyle.postTitle}
                        value={values.skills}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.skills && errors.skills ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.skills}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationBio">
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Write about yourself..."
                        name="bio"
                        className={userAccountStyle.postContent}
                        value={values.bio}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        maxLength="5000"
                        minLength="10"
                      />
                      {touched.bio && errors.bio ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.bio}
                        </Form.Control.Feedback>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-2" style={{ padding: 10 }}>
                  <Button
                    block
                    className={userAccountStyle.customBtn}
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </Row>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </Formik>
    </Container>
  );
};
export default UserAccount;
