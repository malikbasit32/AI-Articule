import React from "react";
import { Container, Row, Col } from "react-bootstrap";
 

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>An Intellectual property of H2VEC</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AI-Articulé</h3>
        </Col>
        <Col md="4" className="footer-body">
        <h3>AI Empowered Site</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
