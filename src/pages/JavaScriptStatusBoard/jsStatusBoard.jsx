import React, { useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  Container,
  Image,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import JSStatusBoardStyle from "./jsStatusBoard.module.css";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";

const JavaScriptStatusBoard = () => {
  const history = useHistory();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const now = 40;
  const ProgressInstance = () => (
    <ProgressBar now={now} label={`${now}% Questions`} />
  );

  const handleStartQuiz = () => {
    let Id = "js"
    history.push(`/onlinequiz/${Id}`);
  }

  return (
    <Container className={JSStatusBoardStyle.container}>
      <Row className={JSStatusBoardStyle.topRow}>
        <div className={JSStatusBoardStyle.topRowItems}>
          <h3>JavaScript Quiz Dashboard</h3>
          <Button variant="success" size="sm" onClick={()=>handleStartQuiz()}>
            Start Quiz
          </Button>
        </div>
      </Row>
      <Row className={JSStatusBoardStyle.profileRow}>
        <div className={JSStatusBoardStyle.userDetail}>
          <Image src={PLACEHOLDER_IMG} width={150} height={150} />
          <div style={{ paddingLeft: "30px" }}>
            <h2>Ravi Sharma</h2>
            <p>Software Developer</p>
            <hr />
            <ProgressInstance />
            <div className={JSStatusBoardStyle.statusData}>
              <div
                className={JSStatusBoardStyle.statusDataItem}
                style={{
                  backgroundColor: "black",
                }}
              >
                <big>400</big>
                <p>Total</p>
              </div>
              <div
                className={JSStatusBoardStyle.statusDataItem}
                style={{
                  backgroundColor: "green",
                }}
              >
                <big>50</big>
                <p>Correct</p>
              </div>
              <div
                className={JSStatusBoardStyle.statusDataItem}
                style={{
                  backgroundColor: "red",
                }}
              >
                <big>100</big>
                <p>Wrong</p>
              </div>

              <div
                className={JSStatusBoardStyle.statusDataItem}
                style={{
                  backgroundColor: "darkgreen",
                }}
              >
                <big>350</big>
                <p>Unattempt</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className={JSStatusBoardStyle.bottomRow}>
        <Col>
          <h4>Your Achievements</h4>
          <p>Your Rank: 10222</p>
          <p>Your Rank:</p>
          <p>Your Rank:</p>
        </Col>
        <Col>
          <h4>Badges</h4>
          <p>HuntClear Badge</p>
          <p>FastGuru Badge</p>
          <p>The Master Badge</p>
          <p>Fighter Badge</p>
        </Col>
      </Row>
    </Container>
  );
};
export default JavaScriptStatusBoard;
