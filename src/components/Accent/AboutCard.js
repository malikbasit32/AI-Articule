import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Tilt from "react-parallax-tilt";
function AboutCard() {
  return (
    <Card className="quote-card-view text-reveal">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Here at AI-Articulé.<br /> We are  <span className="purple">Different. </span>
            <br />
            <br />
            We are <span className="purple"> Unique</span>
            <br />
            We use Audio and Vision Models to track performance of speakers.
            <br />
             
            <br />
            <br />
             
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Measuring pitch
            </li>
            <li className="about-activity">
              <ImPointRight /> Addressing diphthong pronunciation
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving word enunciation
            </li>
          </ul>

          <p style={{ color: "rgba(142 114 142 .7)" }}>
            "Improve your language skills today!"{" "}
          </p>
          <footer className="blockquote-footer"> AI-Articulé</footer>
        </blockquote>
      </Card.Body>
      
    </Card>
  );
}

export default AboutCard;
