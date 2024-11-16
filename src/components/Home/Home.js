import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/1689427341827.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
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
function Home() {
  return (
    <section>
      <Container fluid className="home-section text-reveal" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
            
 
              </h1>

              <h1 className="heading-name">
                We are <span className="lang-ai">AI-Articulé</span>,
                <strong className="main-name"> we offer:</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt><img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /></Tilt> 
            </Col>
        
          </Row>
     
       
        </Container>
 
      </Container>
      <h1 ><a className="purple" href="https://docs.google.com/forms/d/e/1FAIpQLSfjPbnX1DxBkUqDLdjCFLWfETJIByBI3Rm2FnJJURWl4hbhHw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><button style={styles.button}>Book a Session</button> </a> </h1>
         
      <Home2 />
    </section>
  );
}

export default Home;
