import React, { useState, useEffect } from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import * as yup from "yup";
import swal from "sweetalert";
import { Formik } from "formik";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import fullArticleStyle from "./fullArticle.module.css";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";
import COVERIMAGE from "./../../assets/images/coverImage.jpg";
import { FaHeart, FaComment, FaStarHalfAlt } from "react-icons/fa";
import FeedService from "./../../services/feedService";

const validationSchema = yup.object().shape({
  comment: yup
    .string()
    .min(2, "*Your Comment must have at least 4 characters")
    .max(100, "*Your Comment can't be longer than 1000 characters")
    .required("*Comment is required"),
});

const initialValues = {
  comment: "",
};

const FullArticle = () => {
  const history = useHistory();
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const [authorDetails, setAuthorDetails] = useState({});
  const [userId, setUserId] = useState("");
  const [comments, setComments] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // const { state } = history.location; // used 'state' to get article data from home page to fullarticle page
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    async function fetchData() {
      const result = await FeedService.getPost(id);
      if (result) {
        setPostData(result.post);
        setComments(result.post.comments);
        setAuthorDetails(result.post.postedBy);
        setProfilePhoto(result.post.postedBy.profilePhoto)
      }
    }
    fetchData();

    if (loggedInUser) {
      setUserId(loggedInUser.userId);
    } else {
      return null;
    }
  }, []);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: "white",
        height: 2,
      }}
    />
  );

  const handleComment = async (formValues) => {
    const result = await FeedService.addComment(id, userId, formValues.comment);

    if (result.status === "success") {
      swal({
        title: "Done!",
        text: `${result.message}`,
        icon: "success",
        timer: 2000,
        button: false,
      });
      setComments(result.comments);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
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

  const ShowComments = ({ item, index }) => {
    //const commentMinAgo = moment(item.postedBy.createdAt).startOf("minute").fromNow();
    const commentDate = moment(item.createdAt).format("MMM Do");
    if (item.postedBy.profilePhoto) {
      var imgstr = item.postedBy.profilePhoto;;
      imgstr = imgstr.replace("public", "");
      var profilePic = "http://localhost:9090" + imgstr;
    } else {
      profilePic = PLACEHOLDER_IMG;
    }
    return (
      <Row
        className={fullArticleStyle.commentDetails}
        key={index}
        style={{
          border: "1px solid gray",
          borderRadius: 10,
        }}
      >
        <div className={fullArticleStyle.cardHeader}>
          <div className={fullArticleStyle.cardUserDetail}>
            <Image
              src={profilePic}
              width={50}
              height={50}
              roundedCircle
            />
            <div className={fullArticleStyle.cardName}>
              <strong>{item.postedBy.fullName}</strong>
              <p>{commentDate}</p>
            </div>
          </div>
          <div>
            <FaHeart color="red" size={24} />
          </div>
        </div>
        <div className={fullArticleStyle.cardTitle}>
          <div>
            <b>COMMENT</b>&nbsp;&nbsp;&nbsp;<span>{item.text}</span>
          </div>
          <div>
            <Button
              block
              className={fullArticleStyle.customBtn}
              type="submit"
              variant="info"
              size="sm"
              disabled={userId ? false : true}
            >
              Reply
            </Button>
          </div>
        </div>
      </Row>
    );
  };

  const EditPost = (postData, authorDetails) => {
    const item = { postData, authorDetails };
    history.push(`/${id}/editpost`, { data: item });
  };

  const joinedDate = moment(authorDetails.createdAt).format("LL");
  const postDate = moment(postData.createdAt).format("MMM Do YYYY");

  if (profilePhoto) {
    var imgstr = profilePhoto;
    imgstr = imgstr.replace("public", "");
    var profilePic = "http://localhost:9090" + imgstr;
  } else {
    profilePic = PLACEHOLDER_IMG;
  }
  return (
    <Container className={fullArticleStyle.container}>
      <Row className="mb-3">
        <Col md={1} className={fullArticleStyle.firstColumn}>
          <Row className={fullArticleStyle.firstColumnItem}>
            <FaHeart color="red" size={24} />
            <p>5 Likes</p>
          </Row>
          <Row className={fullArticleStyle.firstColumnItem}>
            <FaStarHalfAlt color="yellow" size={24} />
            <p>3.5 Rating</p>
          </Row>
          <Row className={fullArticleStyle.firstColumnItem}>
            <FaComment color="#0C6EFD" size={24} />
            <p>{comments ? comments.length : null} Comments</p>
          </Row>
        </Col>
        <Col md={9} className={fullArticleStyle.secondColumn}>
          <Row className={fullArticleStyle.coverImage}>
            {postData.coverImage ? (
              <Image src={postData.coverImage} width={"100%"} height={400} />
            ) : (
              <Image src={COVERIMAGE} width={"100%"} height={400} />
            )}
          </Row>
          <Row className={fullArticleStyle.postDetails}>
            <div className={fullArticleStyle.cardHeader}>
              <div className={fullArticleStyle.cardUserDetail}>
                <Image
                  src={profilePic}
                  width={50}
                  height={50}
                  roundedCircle
                />
                <div className={fullArticleStyle.cardName}>
                  <strong>{authorDetails.fullName}</strong>
                  <p>Posted on {postDate}</p>
                </div>
              </div>
              <div>
                {authorDetails._id === userId ? (
                  <div>
                    <Button
                      block
                      className={fullArticleStyle.editLikeSaveBtn}
                      type="submit"
                      variant="danger"
                      size="sm"
                    >
                      Like
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      block
                      className={fullArticleStyle.editLikeSaveBtn}
                      variant="primary"
                      size="sm"
                      onClick={() => EditPost(postData, authorDetails)}
                    >
                      Edit
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button
                      block
                      className={fullArticleStyle.editLikeSaveBtn}
                      type="submit"
                      variant="danger"
                      size="sm"
                      disabled={userId ? false : true}
                    >
                      Like
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      block
                      className={fullArticleStyle.editLikeSaveBtn}
                      type="submit"
                      variant="primary"
                      size="sm"
                      disabled={userId ? false : true}
                    >
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className={fullArticleStyle.cardTitle}>
              <b>
                <h1>{postData.postTitle}</h1>
              </b>
            </div>

            <div className={fullArticleStyle.cardSubtitle}>
              <article>
                <p>{postData.postContent}</p>
              </article>
            </div>
          </Row>
          <ColoredLine color="white" />
          <Row className={fullArticleStyle.discussion}>
            <div className={fullArticleStyle.discussionItem}>
              <div>
                <big>
                  <b>Discussion (0)</b>
                </big>
              </div>
              <div>
                {userId ? null : (
                  <Button variant="light" as={NavLink} to="/signin">
                    Subscribe
                  </Button>
                )}
              </div>
            </div>
          </Row>
          <Row className={fullArticleStyle.commentForm}>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                if (values) {
                  handleComment(values);
                } else {
                  alert("Title missing");
                }

                setTimeout(() => {
                  resetForm();
                  setSubmitting(false);
                }, 6000);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                resetForm,
                isSubmitting,
                values,
                touched,
                errors,
              }) => (
                <Form
                  onSubmit={handleSubmit}
                  className={fullArticleStyle.contactForm}
                >
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationComment">
                      <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Add to the discussion"
                        name="comment"
                        className={fullArticleStyle.postComment}
                        value={values.comment}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={userId ? false : true}
                        maxlength="5000"
                        minlength="10"
                      />
                      {touched.comment && errors.comment ? (
                        <Form.Control.Feedback type="invalid">
                          {errors.comment}
                        </Form.Control.Feedback>
                      ) : null}
                    </Form.Group>
                  </Row>
                  <Row className="mb-2" style={{ padding: 10 }}>
                    <Button
                      block
                      className={fullArticleStyle.customBtn}
                      type="submit"
                      disabled={userId ? false : true}
                      variant={isSubmitting ? "success" : "primary"}
                    >
                      {isSubmitting ? "Waiting to publish" : "Publish"}
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      block
                      className={fullArticleStyle.customBtn}
                      type="reset"
                      disabled={userId ? false : true}
                      variant="outline-danger"
                      onClick={resetForm}
                    >
                      Clear
                    </Button>
                  </Row>
                </Form>
              )}
            </Formik>
          </Row>
          {comments
            ? comments.map((item, index) => (
                <ShowComments item={item} index={index} />
              ))
            : null}
        </Col>
        <Col md={2} className={fullArticleStyle.thirdColumn}>
          <Card>
            <Card.Img
              variant="top"
              src={profilePic}
            />
            <Card.Body>
              <Card.Title>{authorDetails.fullName}</Card.Title>
              <Card.Text>
                <p>
                  <strong>Location</strong>
                </p>
                {authorDetails.location ? authorDetails.location : "Dewas"}
              </Card.Text>
              <Card.Text>
                <p>
                  <strong>Work</strong>
                </p>
                {authorDetails.work ? authorDetails.work : "Software Engineer"}
              </Card.Text>
              <Card.Text>
                <p>
                  <strong>Joined On</strong>
                </p>{" "}
                {joinedDate}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
              <Button size="sm" disabled={userId ? false : true}>
                {userId ? "Follow" : "Sign In to follow"}
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default FullArticle;
