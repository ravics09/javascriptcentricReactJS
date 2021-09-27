import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const InterviewQuestions = () => {
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
    if (loggedInUser) {
      if (loggedInUser.expiry && Math.abs(loggedInUser.expiry - now) > 30) {
      } else {
        setUser(loggedInUser.user);
      }
    } else {
      return null;
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-8"
          style={{
            marginTop: 10,
            marginRight: 5,
          }}
        >
          <div className="row">
            <div
              className="d-flex"
              style={{
                padding: 10,
                marginBottom: 10,
                backgroundColor: "#ABCFF7",
                borderRadius: 5,
              }}
            >
              <h5>400+ JavaScript Interview Questions</h5>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "white",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3"
          style={{
            marginTop: 10,
          }}
        >
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#ABCFF7",
                borderWidth: 1,
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={openInterviewQuestion}
            >
              <h4>400+ Interview Questions</h4>
              <p>
                JavaScript Centric Provides more then 400 interview question
                which helps you to prepare for any javascript interview. We
                covered almost all important questions from basic to advance
                level with the exact answers.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#F9E79F",
                borderWidth: 1,
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={openCodingChallenge}
            >
              <h4>100+ Coding Challenge</h4>
              <p>
                JavaScript Centric Provides different varity of coding problems
                that helps you in coding round of any big MNC like Amazon,
                Google, Flipkart, Paytm, Wallmart and many more.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#F1948A",
                borderWidth: 1,
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={openAllPrograms}
            >
              <h4>100+ Programs</h4>
              <p>
                JavaScript Centric have more then 100 basic to advance level
                programs that can help you to solve problems. and helps you for
                any coding challenge.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#F7DC6F",
                borderWidth: 1,
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={openDataStructures}
            >
              <h4>JS Data Structure</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                architecto vero, omnis harum, illo quo ex voluptas et quae
                incidunt tenetur ipsam dolorem, ullam similique voluptatibus vel
                rerum non reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterviewQuestions;
