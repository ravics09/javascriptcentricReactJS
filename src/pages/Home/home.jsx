import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
import LoginIcon from "@mui/icons-material/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import homeStyle from "./home.module.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";
import { FaHeart, FaRegComment } from "react-icons/fa";

const API_URL = "http://localhost:9090/feed";

const PostData = [
  {
    fullName: "Ravi Sharma",
    date: "4 Oct",
    title: "JavaScript References and Resource",
    subtitle: "This post contains reference materials that helped in writing..",
    likes: 24,
    comments: 30,
  },
  {
    fullName: "Jay Sharma",
    date: "5 Nov",
    title: "JavaScript GET Requests",
    subtitle: "Want to make a GET request from JavaScript in a webpage..",
    likes: 30,
    comments: 25,
  },
  {
    fullName: "Vinay Soni",
    date: "20 Dec",
    title: "Resources to Master Javascript",
    subtitle: "Ensure that both operands are primitives..",
    likes: 400,
    comments: 20,
  },
  {
    fullName: "Vinit Patel",
    date: "1 Jan",
    title: "Useful Javascript links - Interview preparation",
    subtitle: "In my Github I have listed some of the useful links..",
    likes: 200,
    comments: 150,
  },
];
const Home = () => {
  const history = useHistory();
  const [userPosts, setUserPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);

  const openInterviewQuestion = () => {
    history.push("/interviewquestions");
  };

  const openCodingChallenge = () => {
    history.push("/codingchallenge");
  };

  const openAllPrograms = () => {
    history.push("/programs");
  };

  const openDataStructures = () => {
    history.push("/interviewquestions");
  };

  const openSelectedPost = (item) => {
    let Id = item._id;
    history.push(`/fullarticle/${Id}`, { data: item });
  };

  const onSave = (index) => {
    alert("You saved item with index value: " + index);
  };

  const PostCard = ({ item, index }) => {
    console.log("ITEM Value===",item);

    const formateDate = moment(item.createdAt).format("MMM Do");
    const hourAgo = moment(item.createdAt).startOf("hour").fromNow();
    const minAgo = moment(item.createdAt).startOf("minute").fromNow();
    return (
      <Row
        className={homeStyle.secondColumn}
        style={{
          borderColor: "yellow",
          border: "1px solid gray",
          borderRadius: 10,
        }}
        key={index}
      >
        <div className={homeStyle.cardHeader}>
          <Image
            src={item.postedBy.profilePic ? LEADER_IMG : PLACEHOLDER_IMG}
            width={50}
            height={50}
            roundedCircle
          />
          <div className={homeStyle.cardName}>
            <strong>{item.postedBy.fullName}</strong>
            <p>
              {formateDate} {hourAgo > 1 ? hourAgo : minAgo}
            </p>
          </div>
        </div>
        <div className={homeStyle.cardBody}>
          <div
            className={homeStyle.cardTitle}
            style={{ cursor: "pointer" }}
            onClick={() => openSelectedPost(item)}
          >
            <b>
              <big>{item.postTitle}</big>
            </b>
          </div>
          <div className={homeStyle.cardFooter}>
            <span>
              <FaHeart color="red" /> &nbsp; {item.likes} Reactions &nbsp;{" "}
              <FaRegComment color="#0C6EFD" /> &nbsp; {item.comments} Comments
            </span>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => onSave(item)}
            >
              Save
            </Button>
          </div>
        </div>
      </Row>
    );
  };

  useEffect(() => {
    const url = `${API_URL}/getPosts`;
    const loggedInUser = JSON.parse(localStorage.getItem("userData"));
    if (loggedInUser) {
      setCurrentUser(true);
    }

    axios.get(url).then(
      (response) => {
        if (response.data.statusCode === 200) {
          setUserPosts(response.data.posts);
        }
      },
      (error) => {
        if (error.response) {
          swal({
            title: "Error!",
            text: `Something is wrong.`,
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
  }, []);

  return (
    <Container className={homeStyle.container}>
      <Row className="mb-3">
        <Col md={3}>
          <Row className={homeStyle.firstColumnFirstRow}>
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <article>
                <h4>Everything on one place</h4>
                <p>
                  A Platform where you can find everything related with
                  javascript like Interview questions, Javascript programs,
                  Javascript data structure, codeing challenge and latest
                  article on Javascript.
                </p>
              </article>
            </div>
            {currentUser ? null : (
              <div style={{ paddingBottom: 10 }}>
                <Stack gap={1}>
                  <Button
                    size="small"
                    variant="primary"
                    as={NavLink}
                    to="/signup"
                  >
                    Create New Account
                  </Button>
                  <Button
                    size="small"
                    variant="outline-primary"
                    as={NavLink}
                    endIcon={<LoginIcon />}
                    to="/signin"
                  >
                    Sign In
                  </Button>
                </Stack>
              </div>
            )}
          </Row>
          <Row className={homeStyle.firstColumnSecondRow}>
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <h4>Current Jobs</h4>
              <p>
                Please Sign Up to get notify for latest jobs related with
                javascript. You can click on below job links to apply for a
                particular job opportunity.
              </p>
            </div>
          </Row>
        </Col>
        <Col md={6}>
          {userPosts
            ? userPosts.map((item, index) => (
                <PostCard item={item} index={index} />
              ))
            : null}
        </Col>
        <Col md={3}>
          <Row className={homeStyle.interviewSection}>
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                cursor: "pointer",
              }}
              onClick={openInterviewQuestion}
            >
              <article>
                <h4>400+ Interview Questions</h4>
                <p>
                  JavaScript Centric Provides more then 400 interview question
                  which helps you to prepare for any javascript interview. We
                  covered almost all important questions from basic to advance
                  level with the exact answers.
                </p>
              </article>
            </div>
          </Row>
          <Row className={homeStyle.codingSection}>
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                cursor: "pointer",
              }}
              onClick={openCodingChallenge}
            >
              <article>
                <h4>100+ Coding Challenge</h4>
                <p>
                  JavaScript Centric Provides different varity of coding
                  problems that helps you in coding round of any big MNC like
                  Amazon, Google, Flipkart, Paytm, Wallmart and many more.
                </p>
              </article>
            </div>
          </Row>
          <Row className={homeStyle.programSection}>
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                cursor: "pointer",
              }}
              onClick={openAllPrograms}
            >
              <article>
                <h4>100+ Programs</h4>
                <p>
                  JavaScript Centric have more then 100 basic to advance level
                  programs that can help you to solve problems. and helps you
                  for any coding challenge.
                </p>
              </article>
            </div>
          </Row>
          <Row className={homeStyle.dataStructureSection}>
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                cursor: "pointer",
              }}
              onClick={openDataStructures}
            >
              <article>
                <h4>JS Data Structure</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </article>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
