import React, { useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  Container,
  Image,
  ProgressBar,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { useHistory, useParams, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import OnlineQuizStyle from "./onlineQuiz.module.css";
let quizData = [
  {
    id: 1,
    ques: "What will be printed on the browser console?",
    code: `
var a = 10;
function foo() {
console.log(a); // ??
var a = 20;
}

foo();
`,
    ans: "2",
    isCorrect: false,
  },
  {
    id: 2,
    ques: "What elements will be in the “newArray”?",
    code: `
    var array = [];
    for(var i = 0; i <3; i++) {
     array.push(() => i);
    }
    var newArray = array.map(el => el());
    console.log(newArray); // ??
`,
    ans: "1",
    isCorrect: false,
  }
];

const OnlineQuiz = () => {
  const history = useHistory();
  const { id } = useParams();
  //   const { state } = history.location;
  const [loading, setLoading] = useState(true);
  const [queNo, setQueNo] = useState(1);
  const [quizName, setQuizName] = useState("");

  useEffect(() => {
    switch (id) {
      case "js":
        setQuizName("JavaScript");
        break;
      case "rjs":
        setQuizName("React JS");
        break;
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const RenderQues = ({ item, index }) => {
    return (
        <Row key={index}>
          <div>
            <div className={OnlineQuizStyle.quesTitle}>
              <h4>{`Question ${item.id}:  ${item.ques}`}</h4>
            </div>
            <div className={OnlineQuizStyle.quesBody}>
              <Form.Control
                as="textarea"
                placeholder={item.code}
                style={{
                  maxHeight: "300px",
                  minHeight: "300px",
                  backgroundColor: "#242424",
                  borderRadius: "10px",
                  borderColor: "#181a1f",
                }}
                disabled={true}
              />
            </div>
            <Form style={{ paddingTop: "10px" }}>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="first radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="second radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="third radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="fourth radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                />
              </Col>
            </Form>
          </div>
        </Row>
    );
  };

  return (
    <Container className={OnlineQuizStyle.container}>
      {loading === true ? (
        <div className={OnlineQuizStyle.loader}>
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <Row className={OnlineQuizStyle.topRow}>
            <div className={OnlineQuizStyle.topRowItems}>
              <h3>{quizName} Quiz</h3>
              <div>
                <Button variant="success" size="sm">
                  Submit
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="danger" size="sm">
                  End Quiz
                </Button>
              </div>
            </div>
          </Row>
          { quizData
            ? quizData.map((item, index) => (
                <RenderQues item={item} index={index} />
            ))
            : null}
          <Row className={OnlineQuizStyle.bottomRow}>
            <div className={OnlineQuizStyle.bottomRowItems}>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setQueNo(queNo - 1)}
                disabled={queNo === 1 ? true : false}
              >
                Back
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="primary"
                size="sm"
                onClick={() => setQueNo(queNo + 1)}
                disabled={queNo === 2 ? true : false}
              >
                Next
              </Button>
            </div>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OnlineQuiz;
