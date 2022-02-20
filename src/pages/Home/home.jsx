import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";
import moment from "moment";
import LoginIcon from "@mui/icons-material/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import homeStyle from "./home.module.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";
import JAVASCRIPT_IMG2 from "./../../assets/images/js2.png";
import RN_IMG from "./../../assets/images/rn.jpg";
import REACTJS_IMG from "./../../assets/images/react.png";
import NODE_JPG from "./../../assets/images/node.jpg";
import { FaHeart, FaRegComment } from "react-icons/fa";
import DataService from "./../../services/dataService";

import FeedService from "./../../services/feedService";

const Home = () => {
  const history = useHistory();
  const [userPosts, setUserPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [userId, setUserId] = useState("");
  const { user: exisitingUser } = useSelector((state) => state.auth);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setCurrentUser(true);
      setUserId(loggedInUser.userId);
    }
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };

    async function fetchData() {
      const result = await FeedService.getAllPosts();
      if (result.status === "success") {
        setUserPosts(result.posts.reverse());
      } else {
        swal({
          title: "Error!",
          text: `${result.message}`,
          icon: "warning",
          timer: 2000,
          button: false,
        });
      }
    }

    fetchData();
  }, []);

  // if (!exisitingUser) {
  //   console.log("value of current user==",currentUser);
  //   return <Redirect to="/signin" />;
  // }

  const openJavaScriptSection = () => {
    history.push("/topic/javascript");
  };

  const openReactJSSection = () => {
    history.push("/topic/reactjs");
  };

  const openReactNativeSection = () => {
    history.push("/topic/reactnative");
  };

  const openNodeJSSection = () => {
    history.push("/topic/nodejs");
  };

  const openMongoDBSection = () => {
    history.push("/topic/mongodb");
  };

  const openSelectedPost = (item) => {
    let Id = item._id;
    history.push(`/fullarticle/${Id}`, { data: item });
  };

  const onSave = async (postId) => {
    const result = await DataService.addToReadingList(userId, postId);
    if (result.status === "success") {
      swal({
        title: "Done!",
        text: `${result.message}`,
        icon: "success",
        timer: 2000,
        button: false,
      });
    } else {
      swal({
        title: "Error!",
        text: `${result.message}`,
        icon: "warning",
        timer: 2000,
        button: false,
      });
    }
  };

  const PostCard = ({ item, index }) => {
    const formateDate = moment(item.createdAt).format("MMM Do");
    const hourAgo = moment(item.createdAt).startOf("hour").fromNow();
    const minAgo = moment(item.createdAt).startOf("minute").fromNow();

    if (item.postedBy.profilePhoto) {
      var imgstr = item.postedBy.profilePhoto;
      imgstr = imgstr.replace("public", "");
      var profilePic = "http://localhost:9090" + imgstr;
    } else {
      profilePic = PLACEHOLDER_IMG;
    }
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
          <Image src={profilePic} width={50} height={50} roundedCircle />
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
              <FaHeart color="red" /> &nbsp; {item.likes} Likes &nbsp;{" "}
              <FaRegComment color="#0C6EFD" /> &nbsp; {item.comments.length}{" "}
              Comments
            </span>
            {currentUser ? (
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => onSave(item._id)}
              >
                Save
              </Button>
            ) : null}
          </div>
        </div>
      </Row>
    );
  };

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
              <h4>Other Technologies</h4>
              <p>ExpressJS</p>
              <p>MongoDB</p>
              <p>Redux</p>
              <p>Redux Saga</p>
              <p>AWS</p>
              <p></p>
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
          <Row
            className={homeStyle.rightCardSection}
            // style={{ backgroundColor: "#abcff7" }}
          >
            <Image
              src={JAVASCRIPT_IMG2}
              style={{
                cursor: "pointer",
                borderRadius: "30px",
                width: "100%",
                height: "200px",
              }}
              onClick={openJavaScriptSection}
            />
          </Row>
          <Row
            className={homeStyle.rightCardSection}
            // style={{ backgroundColor: "#f9e79f" }}
          >
            <Image
              src={REACTJS_IMG}
              style={{
                cursor: "pointer",
                borderRadius: "30px",
                width: "100%",
                height: "200px",
              }}
              onClick={openReactJSSection}
            />
          </Row>
          <Row
            className={homeStyle.rightCardSection}
            // style={{ backgroundColor: "#f1948a" }}
          >
            <Image
              src={RN_IMG}
              style={{
                cursor: "pointer",
                borderRadius: "30px",
                width: "100%",
                height: "200px",
              }}
              onClick={openReactNativeSection}
            />
          </Row>
          <Row
            className={homeStyle.rightCardSection}
            // style={{ backgroundColor: "#f7dc6f" }}
          >
            <Image
              src={NODE_JPG}
              style={{
                cursor: "pointer",
                borderRadius: "30px",
                width: "100%",
                height: "100%",
              }}
              onClick={openNodeJSSection}
            />
          </Row>
          <Row
            className={homeStyle.rightCardSection}
            // style={{ backgroundColor: "#f7dc6f" }}
          >
            <Image
              src={NODE_JPG}
              style={{
                cursor: "pointer",
                borderRadius: "30px",
                width: "100%",
                height: "100%",
              }}
              onClick={openNodeJSSection}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
