import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import swal from "sweetalert";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import userAccountStyle from "./userAccount.module.css";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";
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
import DataService from "./../../services/dataService";

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
  bio: yup.string().max(500, "*About Us must be less than 500 characters"),
  work: yup.string(),
  education: yup.string(),
  skills: yup.string(),
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
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [work, setWork] = useState("");
  const [skills, setSkills] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const [uploadPhotoModal, showUploadPhotoModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (loggedInUser) {
      setUserId(loggedInUser.userId);
      fetchData(loggedInUser.userId);
    }

    async function fetchData(id) {
      const result = await DataService.getUserProfile(id);
      console.log("profile photo", result.user.profilePhoto);
      // console.log("profilePhotoPath",result.user.profilePhotoPath)
      if (result.status === "success") {
        console.log("user details==", result.user);
        setFullName(result.user.fullName);
        setBio(result.user.bio);
        setSkills(result.user.skills);
        setLocation(result.user.location);
        setWork(result.user.work);
        setProfilePhoto(result.user.profilePhoto);
        // setProfilePhoto(result.user.profilePhotoPath); //const img = await res.json();

        if (formikRef.current) {
          formikRef.current.setFieldValue("fullName", result.user.fullName);
          formikRef.current.setFieldValue("email", result.user.email);
          formikRef.current.setFieldValue("userName", result.user.userName);
          formikRef.current.setFieldValue("mobile", result.user.mobile);
          formikRef.current.setFieldValue("location", result.user.location);
          formikRef.current.setFieldValue("bio", result.user.bio);
          formikRef.current.setFieldValue("work", result.user.work);
          formikRef.current.setFieldValue("education", result.user.education);
          formikRef.current.setFieldValue("skills", result.user.skills);
        }
      }
    }
  }, []);

  const handleUpdatedProfile = async (formValues) => {
    const result = await DataService.editUserProfile(id, formValues);

    if (result.status === "success") {
      swal({
        title: "Done!",
        text: `${result.message}`,
        icon: "success",
        timer: 2000,
        button: false,
      });
      setTimeout(() => window.location.reload(), 2500);
    } else {
      swal({
        title: "Error!",
        text: `${result.message}`,
        icon: "warning",
        timer: 2000,
        button: false,
      });
    }
  };

  const fileSelectedHandler = ({ target: { files } }) => {
    // console.log("files==", files[0]);
    setSelectedFile(files[0]);
    setPreviewPhoto(URL.createObjectURL(files[0]));
  };

  const fileUpdatedHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePhoto", selectedFile);
    setProgressPercent(0);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setProgressPercent(percent);
      },
    };

    const result = await DataService.uploadProfilePhoto(id, formData, options);
    if (result.status === "success") {
      setProfilePhoto(result.image);
      setTimeout(() => {
        swal({
          title: "Done!",
          text: `photo uploaded successfully`,
          icon: "success",
          timer: 2000,
          button: false,
        });
        setProgressPercent(0);
        showUploadPhotoModal(false);
      }, 2000);
    } else {
      setTimeout(() => setProgressPercent(0), 1000);
      swal({
        title: "Error!",
        text: `${result.message}`,
        icon: "warning",
        timer: 2000,
        button: false,
      });
    }
  };
  if (profilePhoto) {
    var imgstr = profilePhoto;
    imgstr = imgstr.replace("public", "");
    var profilePic = "http://localhost:9090" + imgstr;
  } else {
    profilePic = PLACEHOLDER_IMG;
  }

  return (
    <Container className={userAccountStyle.container}>
      <Row>
        <Col md={8}>
          <Row className={userAccountStyle.accountProfileSection}>
            <div className={userAccountStyle.box}>
              <span>
                <Image
                  src={profilePic}
                  className={userAccountStyle.bio_photo}
                  name={profilePhoto}
                />
              </span>
              <div className={userAccountStyle.photoEditBtn}>
                <Button
                  variant="dark"
                  onClick={() => showUploadPhotoModal(true)}
                >
                  Edit Photo
                </Button>
              </div>
            </div>
            <div className={userAccountStyle.box2}>
              <div className={userAccountStyle.userDetail}>
                <div className={userAccountStyle.profileInfo}>
                  <p>
                    <b>
                      <big>{fullName}</big>
                    </b>
                  </p>
                  <p style={{ color: work ? "darkgreen" : "red" }}>
                    {work ? work : "Add Work Experience"}{" "}
                  </p>
                  <p style={{ color: location ? "darkgreen" : "red" }}>
                    {location ? location : "Add Location Info"}
                  </p>
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
                <Card.Text>{bio}</Card.Text>
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
            handleUpdatedProfile(values);
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
                      <Form.Control
                        readOnly
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

      {/* //================================================================================================ */}
      <Modal
        size="lg"
        show={uploadPhotoModal}
        onHide={() => showUploadPhotoModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="photoUploadModal">Upload Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            className={userAccountStyle.photoUploadForm}
            onSubmit={fileUpdatedHandler}
            encType="multipart/form-data"
          >
            <Row className="mb-3">
              <img
                src={selectedFile ? previewPhoto : PLACEHOLDER_IMG}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: selectedFile ? "50%" : "0px",
                }}
              />
            </Row>
            <Row className="mb-3">
              <div
                className="progress"
                style={{ width: "290px", marginLeft: "10px" }}
              >
                <div
                  className="progress-bar progress-bar-info progress-bar-striped"
                  role="progressbar"
                  style={{ width: `${progressPercent}%` }}
                  aria-valuenow={progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {progressPercent}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationProfilePhoto">
                <Form.File
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="profilePhoto"
                  filename="profilePhoto"
                  custom
                  onChange={(e) => fileSelectedHandler(e)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <div className={userAccountStyle.uploadPhotoBtn}>
                <Button block type="submit">
                  Upload Photo
                </Button>
              </div>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default UserAccount;
