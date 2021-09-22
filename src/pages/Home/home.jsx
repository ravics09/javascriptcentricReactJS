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
              <h4>Right Section</h4>
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
              <h4>Right Section</h4>
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
              <h4>Right Section</h4>
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
              <h4>Right Section</h4>
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
