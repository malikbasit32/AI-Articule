import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo1 from "../Assets/logo2.png";
import { GiTalk } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GoSignIn} from "react-icons/go";
 
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import {
 
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillExperiment,
 
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo1} className="img-fluid logo" alt="brand" />  
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />Home 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Accent"
                onClick={() => updateExpanded(false)}
              >
                <GiTalk style={{ marginLeft:"2px", marginBottom: "2px" }} />Accent Training
              </Nav.Link>
            </Nav.Item>
 
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Ielts"
                onClick={() => updateExpanded(false)}
              >
                <IoBookOutline
                  style={{ marginBottom: "2px" }}
                />{" "}
                IELTS
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Toefl"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineCastForEducation style={{ marginBottom: "2px" }} />TOEFL
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/GRE"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />GRE
              </Nav.Link>
            </Nav.Item>

            {/* New Nav Item for SAT */}
            <Nav.Item>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfjPbnX1DxBkUqDLdjCFLWfETJIByBI3Rm2FnJJURWl4hbhHw/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <GoSignIn style={{ marginBottom: "2px" }} />Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;