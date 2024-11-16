import React from "react";
import { Col, Container, Row } from "react-bootstrap";
 
import laptopImg from "../../Assets/about.jpeg";
import art1rem from "../../Assets/art1-removebg-preview.png";
import Tilt from "react-parallax-tilt";
function Techstack() {
  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col md={7}>
          <ul>
            <div style={{ marginTop: "20px" }}></div> {/* Add spacing before Toolstack */}
            <li className="about-activity">
              <h5>To tell which <strong className="purple">words</strong> you can't pronounce!</h5>
            </li>
            <div style={{ marginTop: "20px" }}></div> {/* Add spacing before Toolstack */}
            <li className="about-activity">
              <h5>To teach you how to pronounce those <strong className="purple">words!</strong></h5>
            </li>
            <div style={{ marginTop: "20px" }}></div> {/* Add spacing before Toolstack */}
            <li className="about-activity">
              <h5>To improve accent by <strong className="purple">sound</strong> exercises.</h5>
            </li>
          </ul>
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
          className="about-img"
        >
          <Tilt><img src={art1rem} alt="about" className="img-fluid" /></Tilt>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
