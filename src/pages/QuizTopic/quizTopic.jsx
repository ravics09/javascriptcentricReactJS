import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import QuizTopicStyle from "./quizTopic.module.css";

const QuizTopic = () => {
  const history = useHistory();

  const handleSelectedQuizTopic = (topic) => {
    switch (topic) {
      case "javascript":
        history.push("/jsstatusdashboard");
        break;
      case "nodejs":
        history.push("/codingchallenge");
        break;
      case "reactjs":
        history.push("/codingchallenge");
        break;
      case "reactnative":
        history.push("/codingchallenge");
        break;
    }
  };
  return (
    <Container className={QuizTopicStyle.container}>
      <Row className={QuizTopicStyle.topRow}>
        <h2>Select Quiz Topic</h2>
      </Row>
      <Row className={QuizTopicStyle.topicRow}>
        <Col>
          <div
            className={QuizTopicStyle.topicCard}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedQuizTopic("javascript")}
          >
            <p>JavaScript</p>
          </div>
        </Col>
        <Col>
          <div
            className={QuizTopicStyle.topicCard}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedQuizTopic("nodejs")}
          >
            <p>NodeJS</p>
          </div>
        </Col>
        <Col>
          <div
            className={QuizTopicStyle.topicCard}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedQuizTopic("reactjs")}
          >
            <p>ReactJS</p>
          </div>
        </Col>
        <Col>
          <div
            className={QuizTopicStyle.topicCard}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedQuizTopic("reactnative")}
          >
            <p>React Native</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default QuizTopic;
