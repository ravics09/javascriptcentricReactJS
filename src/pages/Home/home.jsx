import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import homeStyle from "./home.module.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import { FaHeart, FaRegComment } from "react-icons/fa";

const PostData = [
  {
    fullName: "Ravi Sharma",
    date: "4th Oct",
    title: "JavaScript References and Resource",
    subtitle: "This post contains reference materials that helped in writing..",
    likes: 24,
    comments: 30,
  },
  {
    fullName: "Jay Sharma",
    date: "5th Nov",
    title: "JavaScript GET Requests",
    subtitle: "Want to make a GET request from JavaScript in a webpage..",
    likes: 30,
    comments: 25,
  },
  {
    fullName: "Vinay Soni",
    date: "20th Dec",
    title: "Resources to Master Javascript",
    subtitle: "Ensure that both operands are primitives..",
    likes: 400,
    comments: 20,
  },
  {
    fullName: "Vinit Patel",
    date: "1st Jan",
    title: "Useful Javascript links - Interview preparation",
    subtitle: "In my Github I have listed some of the useful links..",
    likes: 200,
    comments: 150,
  },
];
const Home = () => {
  const history = useHistory();
  const [userName, setUser] = useState("");
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
    alert("This article posted by: " + item);
  };

  const PostCard = ({ item, index }) => (
    <Row
      className={homeStyle.secondColumn}
      onClick={() => openSelectedPost(item.fullName)}
      style={{ cursor: "pointer" }}
      key={index}
    >
      <div className={homeStyle.cardHeader}>
        <Image src={LEADER_IMG} width={50} height={50} roundedCircle />
        <div className={homeStyle.cardName}>
          <strong>{item.fullName}</strong>
          <p>{item.date}</p>
        </div>
      </div>
      <div className={homeStyle.cardBody}>
        <div className={homeStyle.cardTitle}>
          <b>
            <big>{item.title}</big>
          </b>
        </div>
        <div className={homeStyle.cardSubtitle}>{item.subtitle}</div>
        <div className={homeStyle.cardFooter}>
          <span>
            <FaHeart color="red" /> &nbsp; {item.likes} Reactions &nbsp;{" "}
            <FaRegComment color="#0C6EFD" /> &nbsp; {item.comments} Comments
          </span>
          <Button variant="outline-dark" size="sm">
            Save
          </Button>
        </div>
      </div>
    </Row>
  );

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("userData"));
    if (loggedInUser) {
      setUser(loggedInUser.user);
      setCurrentUser(true);
    } else {
      return null;
    }
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
          {PostData.map((item, index) => (
            <PostCard item={item} index={index} />
          ))}
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
