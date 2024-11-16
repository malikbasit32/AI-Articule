import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
 
import Particle from "../Particle";
 
 

import chatify from "../../Assets/art1-removebg-preview.png";
import bitsOfCode from "../../Assets/art120-removebg-preview.png";
import editor from "../../Assets/art15-removebg-preview.png";
import Tilt from "react-parallax-tilt";
 
const styles = {
  button: {
    padding: '15px 30px',
    fontSize: '17px',
    cursor: 'pointer',
    borderRadius: '8px',
    backgroundColor: '#a588c0 ',
    color: 'black',
    border: 'none',
  },
};
function Gre() {
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
            GRE <strong className="purple"></strong>
          </h1>
          <p style={{ color: "text-color" }} className="text-reveal">
            Insights from AI for GRE preparation!
          </p>
<br></br>
<br></br>
<br></br>
          {/* Project 1: Image on the Left, Text on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "80px" }} // Increased margin-bottom from 50px to 80px
          >
            <Col md={6} className="project-image">
            <Tilt><img src={chatify} alt="Chatify" className="img-fluid" /></Tilt>
              
            </Col>
            <Col md={6} className="project-text text-reveal">
              <h3 style={{ color: "text-color" }}>GRE Quantitative</h3>
              <p style={{ color: "text-color" }}>
                Gre quantitative focuses on key quantitative skills that are required by graduate programs. By continous monitoring and visualizing results via neural networks, we are able to determine which specific skill set 
                a learner needs to improve. After that, we use targetted practice overseen by experts to improve your abilities.
              </p>
            </Col>
          </Row>
          <br></br><br></br><br></br>
          {/* Project 2: Text on the Left, Image on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "80px" }} // Increased margin-bottom from 50px to 80px
          >
            <Col md={6} className="project-text">
              <h3 style={{ color: "text-color" }}>GRE Verbal</h3>
              <p style={{ color: "text-color" }}>
                 GRE verbal tests the ability of learners to draw conclusions from dense information. Sometimes, it gets little difficult to understand academic writing.
                 Here AI-Articulé helps determine the key comprehension and reading techniques that you require to solve verbal questions.
              </p>
            </Col>
            <Col md={6} className="project-image">
            <Tilt><img src={bitsOfCode} alt="Bits-0f-C0de" className="img-fluid" /></Tilt>
            </Col>
          </Row>
          <br></br><br></br><br></br>
          {/* Project 3: Image on the Left, Text on the Right */}
          <Row
            className="align-items-center project-row text-reveal"
            style={{ marginBottom: "80px" }} // Increased margin-bottom from 50px to 80px
          >
            <Col md={6} className="project-image">
              <Tilt><img src={editor} alt="Editor.io" className="img-fluid" /></Tilt>
            </Col>
            <Col md={6} className="project-text">
              <h3 style={{ color: "text-color" }}>GRE Writing</h3>
              <p style={{ color: "text-color" }}>
                GRE essays determine the ability of a learner to develop cogent arguments to support their claims. AI-Articulé improves the learning process by aiding in determining the correct structures.
              </p>
              
            </Col>
            <h1 ><a className="purple" href="https://docs.google.com/forms/d/e/1FAIpQLSfjPbnX1DxBkUqDLdjCFLWfETJIByBI3Rm2FnJJURWl4hbhHw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><button style={styles.button}>Book a Session</button> </a> </h1>
        
          </Row>
          
          <br></br><br></br><br></br>
        
           
        </Container>
      
      </Container>
    </div>
  );
}

export default Gre;
