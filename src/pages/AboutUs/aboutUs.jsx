import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutUsStyle from "./aboutUs.module.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import LEADER_IMG from "./../../assets/images/leader.jpeg";
import PLACEHOLDER_IMG from "./../../assets/images/h1.png";

const AboutUs = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
      }}
    />
  );

  return (
    <Container
      className={aboutUsStyle.container}
      style={{ border: "1px solid gray", borderRadius: 10 }}
    >
      <Row className="justify-content-md-center mb-2">
        <Col md="auto">
          <h4>About JavaScript Centric</h4>
        </Col>
      </Row>
      <ColoredLine color="gray" />
      <Row className="justify-content-md-center mb-5">
        <Col md="auto">
          <article>
            <p>
              JavaScript Centric is a platform of software developers getting together to help
              one another out. The software industry relies on collaboration and
              networked learning. We provide a place for that to happen. Our
              application is open source, meaning you can inspect every little
              detail of the code, or chip in yourself! We are working to make
              our platform available for anyone to stand up similar communities
              in any niche or passion. We believe in transparency and adding
              value to the ecosystem. We hope you poke around and like what you
              see!
            </p>
          </article>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-2">
        <Col md="auto">
          <h4>Meet Our Team Giriboss</h4>
        </Col>
      </Row>
      <ColoredLine color="gray" />
      <Row className="justify-content-md-center mb-5">
        <Col md="auto">
          <article>
            <p>
              We have team of 4 members who are working on different cut-off technologies.
            </p>
          </article>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-3">
        <Col style={{ color: "black" }} md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={LEADER_IMG} />
            <Card.Body>
              <Card.Title>Ravi Sharma</Card.Title>
              <Card.Text>
                By Profession A Software Engineer. Having 5+ Year Of Experience
                In Web And Mobile App Deveoplement.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/ravics09/">LinkedIn</Card.Link>
              <Card.Link href="https://github.com/ravics09">GitHub</Card.Link>
              <Card.Link href="https://javascriptcentric.medium.com/">Medium</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ color: "black" }} md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={PLACEHOLDER_IMG} />
            <Card.Body>
              <Card.Title>Sonu Mishra</Card.Title>
              <Card.Text>
                By Profession A Software Engineer. Having 5+ Year Of Experience
                In Web And Mobile App Deveoplement.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/ravics09/">LinkedIn</Card.Link>
              <Card.Link href="https://github.com/ravics09">GitHub</Card.Link>
              <Card.Link href="https://javascriptcentric.medium.com/">Medium</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ color: "black" }} md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={PLACEHOLDER_IMG} />
            <Card.Body>
              <Card.Title>Jay Verma</Card.Title>
              <Card.Text>
                By Profession A Software Engineer. Having 5+ Year Of Experience
                In Web And Mobile App Deveoplement.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/ravics09/">LinkedIn</Card.Link>
              <Card.Link href="https://github.com/ravics09">GitHub</Card.Link>
              <Card.Link href="https://javascriptcentric.medium.com/">Medium</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ color: "black" }} md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={PLACEHOLDER_IMG} />
            <Card.Body>
              <Card.Title>Varun Sharma</Card.Title>
              <Card.Text>
                By Profession A Software Engineer. Having 5+ Year Of Experience
                In Web And Mobile App Deveoplement.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/ravics09/">LinkedIn</Card.Link>
              <Card.Link href="https://github.com/ravics09">GitHub</Card.Link>
              <Card.Link href="https://javascriptcentric.medium.com/">Medium</Card.Link>
            </Card.Body>
          </Card>
        </Col>
       </Row>
    </Container>
  );
};
export default AboutUs;
