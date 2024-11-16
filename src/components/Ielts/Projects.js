import React from "react";
import { Container, Row, Col } from "react-bootstrap";
 
 
import Tilt from "react-parallax-tilt";
import bitsOfCode from "../../Assets/art6-removebg-preview.png";
import bitsOfCode1 from "../../Assets/art5-removebg-preview.png";
import editor from "../../Assets/art4-removebg-preview.png";
import editor1 from "../../Assets/art21-removebg-preview.png";
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
function Projects() {
  return (
    <Container fluid className="project-section text-reveal">
 
      <Container>

        <h1 className="project-heading">
          IELTS <strong className="purple"></strong>
        </h1>
        <p style={{ color: "text-color" }}>
          Ielts preparation with Artificial Intelligence!
        </p>
        <br></br>
        <br></br>
        <br></br>

        {/* Project 1: Image on the Left, Text on the Right */}
        <Row className="align-items-center project-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="project-image">
          <Tilt><img src={editor1} alt="Chatify" className="img-fluid" /></Tilt>
            
          </Col>
          <Col md={6} className="project-text">
            <h3 style={{ color: "text-color" }}>Ielts Speaking</h3>
            <p style={{ color: "text-color" }}>
              Learn how to construct sentence and speak like natives with Lang-AI. Our team of experts teaches accent using advance pheonetics! 
            </p>
          </Col>
       
        </Row>
        <br></br>
        <br></br>
     
        {/* Project 2: Text on the Left, Image on the Right */}
        <Row className="align-items-center project-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="project-text">
            <h3 style={{ color: "text-color" }}>Ielts Writing</h3>
            <p style={{ color: "text-color" }}>
            Customised feedback for your writing tasks so that you can achieve 9 band. Our models pinpoint mistakes and assure targetted practice!      </p>
          </Col>
          <Col md={6} className="project-image">
          <Tilt> <img src={bitsOfCode} alt="Bits-0f-C0de" className="img-fluid" /></Tilt>
           
          </Col>
        </Row>
           {/* Project 3: Image on the Left, Text on the Right */}
        <Row className="align-items-center project-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="project-image">
          <Tilt><img src={editor} alt="Editor.io" className="img-fluid" /></Tilt>
            
          </Col>
          <Col md={6} className="project-text">
            <h3 style={{ color: "text-color" }}>Ielts Reading</h3>
            <p style={{ color: "text-color" }}>  
            Aided with AI models, Lang-AI teaches you advance reading skills such as Pre-reading, Pointer method, Chunking, Skimming so that you achieve that coveted 9 band!</p>   </Col>
        </Row>
              {/* Project 2: Text on the Left, Image on the Right */}
              <Row className="align-items-center project-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="project-text">
            <h3 style={{ color: "text-color" }}>Ielts Listening</h3>
            <p style={{ color: "text-color" }}>
              Our data analytics point to the most common words and sentences that you get wrong so as to improve your listening skills!
            </p>
          </Col>
          <Col md={6} className="project-image">
          <Tilt><img src={bitsOfCode1} alt="Bits-0f-C0de" className="img-fluid" /></Tilt>
        
          </Col>
          <h1 ><a className="purple" href="https://docs.google.com/forms/d/e/1FAIpQLSfjPbnX1DxBkUqDLdjCFLWfETJIByBI3Rm2FnJJURWl4hbhHw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><button style={styles.button}>Book a Session</button> </a> </h1>
         
        </Row>

      </Container>
      <br></br>
      <br></br>
      <br></br>
     
    </Container>
  );
}

export default Projects;
