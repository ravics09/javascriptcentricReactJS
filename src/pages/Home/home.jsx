import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";

const Home = () => {
  return (
    <div className="container-fluid">
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
                backgroundColor: "white",
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
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <Stack spacing={2} direction="row">
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
                    Sign In With Google
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
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 10,
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
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 10,
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
          className="col-md-5"
          style={{
            marginTop: 10,
            marginRight: 5,
          }}
        >
          <div className="row">
            <div
              className="d-flex"
              style={{
                paddingTop: 10,
              }}
            >
              <Button variant="text">Feed</Button>
              <Button variant="text">Latest</Button>
              <Button variant="text">Top</Button>
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
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 5,
              }}
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
                backgroundColor: "white",
              }}
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
                backgroundColor: "white",
              }}
            >
              <h4>100+ Programs</h4>
              <p>
              JavaScript Centric have more then 100 basic to advance level programs that can help you to solve problems.
              and helps you for any coding challenge.
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
