import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import homeStyle from "./home.module.css";

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
    <div className={homeStyle.container}>
      <div className="row">
        <div
          className="col-md-3"
          style={{
            marginTop: 10,
            marginRight: 5,
          }}
        >
          <div className="row">
            <div
              style={{
                marginBottom: 10,
                backgroundColor: "#ABCFF7",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <h4>Everything on one place</h4>
                <p>
                  A Platform where you can find everything related with
                  javascript like Interview questions, Javascript programs,
                  Javascript data structure, codeing challenge and latest
                  article on Javascript.
                </p>
              </div>
              <div style={{ marginBottom: 10 }}>
                <Stack gap={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    component={NavLink}
                    endIcon={<LoginIcon />}
                    to="/signin"
                  >
                    Sign In
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    component={NavLink}
                    to="/signup"
                  >
                    Create New Account
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 10,
                backgroundColor: "#F7DC6F",
              }}
            >
              <h4>Current Jobs</h4>
              <p>
                Please Sign Up to get notify for latest jobs related with
                javascript. You can click on below job links to apply for a
                particular job opportunity.
              </p>
            </div>
          </div>
        </div>

        <div
          className="col-md-5"
          style={{
            marginTop: 10,
            marginRight: 5,
          }}
        >
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
export default Home;
