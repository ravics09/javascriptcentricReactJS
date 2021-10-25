import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dashboardStyle from "./dashboard.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import moment from "moment";
import { FaHeart, FaRegComment } from "react-icons/fa";
import FeedService from "./../../services/feedService";

const Dashboard = () => {
  const history = useHistory();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      fecthUserPosts(loggedInUser.user._id);
    }

    async function fecthUserPosts(id) {
      const result = await FeedService.getUserPosts(id);
      if (result.status === "success") {
        setUserPosts(result.posts);
      } else {
        setUserPosts([]);
      }
    }
  }, []);

  const openSelectedPost = (item) => {
    let Id = item._id;
    history.push(`/fullarticle/${Id}`, { data: item });
  };

  const editSelectedPost = (item) => {
    let Id = item._id;
    history.push(`/${Id}/editpost`, { data: item });
  };

  const deleteSelectedPost = (item) => {
    let Id = item.id;
    // history.push(`/fullarticle/${Id}`, { data: item });
    alert("You are deleteing article id  " + Id);
  };

  const RenderAllPost = ({ item, index }) => {
    console.log("items==", item);
    const formateDate = moment(item.createdAt).format("MMM Do");
    return (
      <div className={dashboardStyle.renderPost} key={index}>
        <div className={dashboardStyle.titleSection}>
          <h5
            style={{ cursor: "pointer", color: "white" }}
            onClick={() => openSelectedPost(item)}
          >
            {item.postTitle}
          </h5>
          <p>Published:  {formateDate}</p>
        </div>
        <div className={dashboardStyle.postInfo}>
          <FaHeart color="red" /> &nbsp; &nbsp;
          <FaRegComment color="#0C6EFD" /> {item.comments.length}
        </div>
        <div>
          <Button
            className={dashboardStyle.customBtn}
            variant="primary"
            onClick={() => editSelectedPost(item)}
          >
            Edit
          </Button>
          {"  "}
          <Button
            className={dashboardStyle.customBtn}
            variant="outline-danger"
            onClick={() => deleteSelectedPost(item)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Container className={dashboardStyle.container}>
      <Row className={dashboardStyle.topRow}>
        <h2>Dashboard</h2>
      </Row>
      <Row className={dashboardStyle.cardRow}>
        <Col md={3}>
          <div className={dashboardStyle.headerCard}>
            <big>10</big>
            <p>Total Posts</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={dashboardStyle.headerCard}>
            <big>10000</big>
            <p>Total Post Views</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={dashboardStyle.headerCard}>
            <big>20</big>
            <p>Total Likes</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={dashboardStyle.headerCard}>
            <b>14</b>
            <p>Total Comments</p>
          </div>
        </Col>
      </Row>
      <Row className={dashboardStyle.postRow}>
        <Col md={3} className={dashboardStyle.otherInfoSection}>
          <Row>
            <h5>Other Info</h5>
          </Row>
          <Row style={{ paddingTop: "20px", paddingBottom: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <b>Followers</b>
              <b>20</b>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <b>Following users</b>
              <b>20</b>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <b>Following Organizations</b>
              <b>20</b>
            </div>
          </Row>
          <Row style={{ marginLeft: "1px", marginRight: "1px" }}>
            <Button variant="outline-info" as={NavLink} to="/account">
              Account
            </Button>
          </Row>
        </Col>
        <Col md={9} className={dashboardStyle.postsSection}>
          <Row>
            <div className={dashboardStyle.mainPostHeader}>
              <h5>Posts</h5>
              <Form.Control
                as="select"
                style={{
                  width: 130,
                  backgroundColor: "#0C6EFD",
                  borderRadius: 10,
                  color: "#FFFFF",
                }}
                custom
              >
                <option value="1">Most Views</option>
                <option value="2">Most Likes</option>
                <option value="3">Most Comments</option>
              </Form.Control>
            </div>
          </Row>
          <Row className={dashboardStyle.mainPostRow}>
            {userPosts
              ? userPosts.map((item, index) => (
                  <RenderAllPost item={item} index={index} />
                ))
              : null}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
