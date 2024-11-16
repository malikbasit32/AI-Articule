import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/art9-removebg-preview.png";
import Tilt from "react-parallax-tilt";
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

function Home2() {
  return (
    <Container fluid className="home-about-section text-reveal" id="about">
      <Container>
        <Row>
        <Col md={12} className="home-about-social">


          </Col>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Our  <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              We are a group of Linguists and Artificial Intelligence practioners that love teaching languages, particularly English. 
              <br />
              <br />We use state of the art <b className="purple">Artificial Intelligence models</b> to measure the strengths and weaknesses of 
              <i>
                <b className="purple"> our Beloved Students. </b>
              </i>
              <br />
              <br />
              We offer Session on the following: <br></br>
              Accent Training  
              <br></br>
              <b className="purple"> IELTS</b>
              <br></br>
               TOEFL
              <br></br>
               <b className="purple"> GRE </b>&nbsp;
              
             
                  
              
              <br />
              <br />
              Join Our <b className="purple">1 hour Session</b> or <b className="purple"> Complete Training </b>Programs
 
              &nbsp;  
           
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
       
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
