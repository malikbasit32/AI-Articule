import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
 
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
 

import chatify from "../../Assets/art18-removebg-preview.png";
import bitsOfCode from "../../Assets/art17-removebg-preview.png";
import editor from "../../Assets/art19-removebg-preview.png";
import bitsOfCode1 from "../../Assets/art16-removebg-preview.png";
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
function Toefl() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading text-reveal">
            TOEFL <strong className="purple"></strong>
          </h1>
          <p style={{ color: "text-color" }} className="text-reveal">
            AI empowered Toefl learning experience!
          </p>
          <br></br><br></br>
          {/* Project 1: Image on the Left, Text on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "50px" }}
          >
            <Col md={6} className="project-image">
             <Tilt><img src={chatify} alt="Chatify" className="img-fluid" /></Tilt> 
            </Col>
            <Col md={6} className="project-text text-reveal">
              <h3 style={{ color: "text-color" }}>Toefl Speaking</h3>
              <p style={{ color: "text-color" }}>
                Learn Toefl specific techniques how to construct sentence and
                speak like natives with AI-Articulé. Our team of experts teaches
                accent using advance phonetics!
              </p>
            </Col>
          </Row>

          {/* Project 2: Text on the Left, Image on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "50px" }}
          >
            <Col md={6} className="project-text">
              <h3 style={{ color: "text-color" }}>Toefl Writing</h3>
              <p style={{ color: "text-color" }}>
                Learner tailored intervention for writing tasks that are
                complemented by Artificial Intelligence pointing specific key
                areas for high scores.
              </p>
            </Col>
            <Col md={6} className="project-image">
            <Tilt><img src={bitsOfCode} alt="Bits-0f-C0de" className="img-fluid" /></Tilt>
            </Col>
          </Row>

          {/* Project 3: Image on the Left, Text on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "50px" }}
          >
            <Col md={6} className="project-image">
            <Tilt><img src={editor} alt="Bits-0f-C0de" className="img-fluid" /></Tilt> 
            </Col>
            <Col md={6} className="project-text">
              <h3 style={{ color: "text-color" }}>Toefl Reading</h3>
              <p style={{ color: "text-color" }}>
                Toefl specific narrative oriented techniques so that you
                achieve your desired results!
              </p>
            </Col>
          </Row>

          {/* Project 4: Text on the Left, Image on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "50px" }}
          >
            <Col md={6} className="project-text">
              <h3 style={{ color: "text-color" }}>Toefl Listening</h3>
              <p style={{ color: "text-color" }}>
                Training your ear via customised exercises to maximise sound
                comprehension and word understanding based on AI aided sound
                engineering!
              </p>
            </Col>
            <Col md={6} className="project-image">
            <Tilt><img src={bitsOfCode1} alt="Bits-0f-C0de" className="img-fluid" /></Tilt> 
    
            </Col>
            <h1 ><a className="purple" href="https://docs.google.com/forms/d/e/1FAIpQLSfjPbnX1DxBkUqDLdjCFLWfETJIByBI3Rm2FnJJURWl4hbhHw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><button style={styles.button}>Book a Session</button> </a> </h1>
      
          </Row>
       
        </Container>
        <br></br><br></br>
      </Container>
   
    </div>
  );
}

export default Toefl;
