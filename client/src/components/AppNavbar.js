import React, { Fragment } from "react";
import { Collapse, Container, Navbar, NavbarToggler, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";
const AppNavbar = () => {
  return (
    <Fragment>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            Develop & Daily blog
          </Link>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {false ? <h1 className="text-white">authLink</h1> : <LoginModal />}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {/* <nav id="navigation">
        <div className="container">
          <Link to="/" className="blackTxt bold">
            황상한 블로그
          </Link>
          <button className="toggleBtn">버튼</button>
        </div>

        <div className="navibar">
          <div className="header__navibar__inner">
            {true ? <h1 className="whiteTxt">authLink</h1> : <h1 className="whiteTxt">guestLink</h1>}
          </div>
        </div>
      </nav> */}
    </Fragment>
  );
};
export default AppNavbar;
