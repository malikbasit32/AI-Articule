import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/file.png";
import Toolstack from "./Toolstack";
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
function About() {
  return (
    <Container fluid className="about-section text-reveal">
 
      <Container>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          > 
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Leverage AI <strong className="purple">to speak like Natives.</strong>
            </h1>
            <Aboutcard />
          </Col>
          
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >   <h1 ><a className="purple" href="https://docs.google.com/forms/d/e/1FAIpQLSfjPbnX1DxBkUqDLdjCFLWfETJIByBI3Rm2FnJJURWl4hbhHw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><button style={styles.button}>Book a Session</button> </a> </h1>
         
            <Tilt><img src={laptopImg} alt="about" className="img-fluid" /></Tilt>
          </Col>
        </Row>

        <div style={{ marginTop: "50px" }}></div> {/* Add spacing before Toolstack */}
        <div style={{ marginTop: "50px" }}></div> {/* Add spacing before Toolstack */}  
        <Row style={{ justifyContent: "left", padding: "0px" }}> <Col md={5}> <h1 className="project-heading" >
        AI-Articulé uses <strong className="purple">Sound Models </strong>
        </h1>
</Col>  

<Techstack />
</Row>
<div style={{ marginTop: "50px" }}></div> {/* Add spacing before Toolstack */}
<div style={{ marginTop: "50px" }}></div> {/* Add spacing before Toolstack */}
        <Row style={{ justifyContent: "left", padding: "0px" }}>
        <Col md={6}>
        <h1 className="project-heading">
        AI-Articulé uses <strong className="purple"> Language Models</strong> 
        </h1>
        </Col> 
       
        <Toolstack />
        </Row>
     

       
      </Container>
    </Container>
  );
}

export default About ;
