import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import homeStyle from "./home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  const history = useHistory();
  const [user, setUser] = useState("");

  const openInterviewQuestion = () => {
    history.push("/interviewquestions");
  };

  const openCodingChallenge = () => {
    // alert("OpenCodingChallenge called");
    history.push("/codingchallenge");
  };

  const openAllPrograms = () => {
    // alert("OpenAllPrograms called");
    history.push("/programs");
  };

  const openDataStructures = () => {
    // alert("OpenDataStructures called");
    history.push("/interviewquestions");
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("userData"));
    const now = new Date();
    // console.log("timediff============",(loggedInUser.expiry-now));
    if (loggedInUser) {
      if (loggedInUser.expiry && Math.abs(loggedInUser.expiry - now) > 30) {
        // alert("Password expired. Please Sign In again..");
      } else {
        setUser(loggedInUser.user);
        // alert(`Welcome back ${loggedInUser.user}`);
      }
    } else {
      return null;
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Row className={homeStyle.firstColumn}>
            <Col>
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
            </Col>
          </Row>
          <Row className={homeStyle.firstSecondColumn}>
            <Col>
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
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={homeStyle.secondColumn}>
            <Col>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  architecto vero, omnis harum, illo quo ex voluptas et quae
                  incidunt tenetur ipsam dolorem, ullam similique voluptatibus
                  vel rerum non reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={3}>
          <Row className={homeStyle.interviewSection}>
            <Col>
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
            </Col>
          </Row>
          <Row className={homeStyle.codingSection}>
            <Col>
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
            </Col>
          </Row>
          <Row className={homeStyle.programSection}>
            <Col>
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
            </Col>
          </Row>
          <Row className={homeStyle.dataStructureSection}>
            <Col>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod architecto vero, omnis harum, illo quo ex voluptas et
                    quae incidunt tenetur ipsam dolorem, ullam similique
                    voluptatibus vel rerum non reprehenderit.
                  </p>
                </article>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
