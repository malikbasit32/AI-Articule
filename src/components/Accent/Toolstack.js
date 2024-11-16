import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/art8-removebg-preview.png";
const styles = {
  button: {
    padding: '15px 30px',
    fontSize: '17px',
    cursor: 'pointer',
    borderRadius: '8px',
    backgroundColor: '#a588c0',
    color: 'black',
    border: 'none',
  },
};
function Toolstack() {
  return (
    <Container>
    <Row style={{ alignItems: "center" }}>
      <Col md={7}>
        <ul>
          <div style={{ marginTop: "20px" }}></div> {/* Add spacing before Toolstack */}
          <li className="about-activity">
            <h5>To teach <strong className="purple">sentence</strong> construction like natives!</h5>
          </li>
          <div style={{ marginTop: "20px" }}></div> {/* Add spacing before Toolstack */}
          <li className="about-activity">
            <h5>To point mistakes in <strong className="purple">Sentences!</strong></h5>
          </li>
          <div style={{ marginTop: "20px" }}></div> {/* Add spacing before Toolstack */}
          <li className="about-activity">
            <h5>To improve structure of sentence as natives <strong className="purple">speak!</strong></h5>
          </li>
        </ul>
      </Col>
      <Col
        md={5}
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
        className="about-img"
      >
       <Tilt><img src={laptopImg} alt="about" className="img-fluid" /></Tilt> 
      </Col>
    
    </Row>
    
    <br></br>
    <br></br>
 
  </Container>
   
  );
}

export default Toolstack;
