import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import fullArticleStyle from "./fullArticle.module.css";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import { FaHeart, FaRegComment } from "react-icons/fa";

const FullArticle = () => {
  return (
    <Container className={fullArticleStyle.container}>
      <Row className="mb-3">
        <Col md={1}>
          <Row className={fullArticleStyle.firstColumn}>this</Row>
        </Col>
        <Col md={9}>
          <Row className={fullArticleStyle.secondColumn}>
            <div className={fullArticleStyle.cardHeader}>
              <Image src={LEADER_IMG} width={50} height={50} roundedCircle />
              <div className={fullArticleStyle.cardName}>
                <strong>Ravi Sharma</strong>
                <p>Posted on 5 Oct</p>
              </div>
            </div>
            <div className={fullArticleStyle.cardTitle}>
              <b>
                <h1>JavaScript References and Resource</h1>
              </b>
            </div>
            <div className={fullArticleStyle.cardSubtitle}>
              <article>
                <p>
                  Welcome, this is a series of posts that aim to teach front end
                  development from scratch to a level that the reader(you) will
                  gain confidence in building usable and accessible website(s).
                  The intended audience of this series are beginners or anyone
                  who consider themselves as beginners and in a constant state
                  of learning.
                </p>
                <p>
                  I will not be covering the ins and out of front end
                  development but I'll cover topics that will give you a strong
                  foundation to build upon. Some topics that I consider to be
                  'advanced' are not covered as they can be intimidating to a
                  beginner but I'll gladly mention them and point you to
                  resources that will be of help when you decide to learn them.
                </p>
                <p>
                  I am not a pro nor an expert, I am just trying to teach you
                  what I know. Below is the table of contents that links to the
                  article(s) in the series.
                </p>
              </article>
            </div>
          </Row>
        </Col>
        <Col md={2}>
          <Row className={fullArticleStyle.thirdColumn}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={LEADER_IMG} />
              <Card.Body>
                <Card.Title>Ravi Sharma</Card.Title>
                <Card.Text>
                  By Profession A Software Engineer. Having 5+ Year Of
                  Experience In Web And Mobile App Deveoplement.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-grid">
                <Button size="sm">Follow</Button>
              </Card.Footer>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default FullArticle;
