import React, { useState, useEffect } from "react";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";
import moment from "moment";
import LoginIcon from "@mui/icons-material/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import homeStyle from "./home.module.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";
import CODING_IMG from "./../../assets/images/coding.png";
import INTERVIEW_IMG from "./../../assets/images/interview.png";
import PROGRAM_IMG from "./../../assets/images/program.png";
import DATA_IMG from "./../../assets/images/data.png";
import { FaHeart, FaRegComment } from "react-icons/fa";

import FeedService from "./../../services/feedService";

const Home = () => {
  const history = useHistory();
  const [userPosts, setUserPosts] = useState([]);
  const [currentUserD, setCurrentUser] = useState(false);
  // const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setCurrentUser(true);
    }

    async function fetchData() {
      const result = await FeedService.getAllPosts();
      if (result.status === "success") {
        setUserPosts(result.posts);
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

  // if (!currentUserD) {
  //   return <Redirect to="/signin" />;
  // }

  const openInterviewQuestion = () => {
    history.push("/interviewquestions");
  };

  const openCodingChallenge = () => {
    history.push("/codingchallenge");
  };

  const openAllPrograms = () => {
    history.push("/programs");
  };

  const openDataStructures = () => {
    history.push("/interviewquestions");
  };

  const openSelectedPost = (item) => {
    let Id = item._id;
    history.push(`/fullarticle/${Id}`, { data: item });
  };

  const onSave = (index) => {
    alert("You saved item with index value: " + index);
  };

  const PostCard = ({ item, index }) => {
    const formateDate = moment(item.createdAt).format("MMM Do");
    const hourAgo = moment(item.createdAt).startOf("hour").fromNow();
    const minAgo = moment(item.createdAt).startOf("minute").fromNow();
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
          <Image
            src={item.postedBy.profilePic ? LEADER_IMG : PLACEHOLDER_IMG}
            width={50}
            height={50}
            roundedCircle
          />
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
            {currentUserD ? (
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => onSave(item)}
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
            {currentUserD ? null : (
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
              <h4>Current Jobs</h4>
              <p>
                Please Sign Up to get notify for latest jobs related with
                javascript. You can click on below job links to apply for a
                particular job opportunity.
              </p>
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
          <Row className={homeStyle.interviewSection}>
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
                <div className={homeStyle.interviewSectionBody}>
                  <Image
                    src={INTERVIEW_IMG}
                    width={80}
                    height={80}
                    style={{ paddingRight: 10 }}
                  />
                  <p>
                    We provides more then 400 interview question which helps you
                    to prepare for any javascript interview.
                  </p>
                </div>
              </article>
            </div>
          </Row>
          <Row className={homeStyle.codingSection}>
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
                <div className={homeStyle.codingSectionBody}>
                  <Image
                    src={CODING_IMG}
                    width={100}
                    height={100}
                    style={{ paddingRight: 10 }}
                  />
                  <p>
                    We provide Wide range of coding problems for preparation of
                    coding round.
                  </p>
                </div>
              </article>
            </div>
          </Row>
          <Row className={homeStyle.programSection}>
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
                <div className={homeStyle.programSectionBody}>
                  <Image
                    src={PROGRAM_IMG}
                    width={100}
                    height={100}
                    style={{ paddingRight: 10 }}
                  />
                  <p>
                    100+ Basic to advance level JS programs that test help you
                    for coding round.
                  </p>
                </div>
              </article>
            </div>
          </Row>
          <Row className={homeStyle.dataStructureSection}>
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
                <div className={homeStyle.dataStructureSectionBody}>
                  <Image
                    src={DATA_IMG}
                    width={100}
                    height={100}
                    style={{ paddingRight: 10 }}
                  />
                  <p>
                    We provide one of the best content on JS DataStrucutre with
                    clean and easy understanding.
                  </p>
                </div>
              </article>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
