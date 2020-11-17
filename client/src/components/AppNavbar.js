import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Collapse, Container, Navbar, NavbarToggler, Nav, NavItem, Form, Button } from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../redux/types";
import RegisterModal from "./auth/RegisterModal";
const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);
  console.log(userRole, "userRole");

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const addPostClick = () => {};
  const authLink = (
    <Fragment>
      <NavItem>
        {userRole === "MainJuin" ? (
          <Form className="col mt-2">
            <Link to="post" className="btn btn-success block text-white px-3" onClick={addPostClick}>
              Add Post
            </Link>
          </Form>
        ) : (
          ""
        )}
      </NavItem>
      <NavItem className="d-flex justify-content-center">
        <Form className="col mt-2">
          {user && user.name ? (
            <Link>
              <Button outline color="light" className="px-3" block>
                <strong>{user ? `Welcome ${user.name}` : ""}</strong>
              </Button>
            </Link>
          ) : (
            <Button outline color="light" className="px-3" block>
              <strong>"No user!"</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem>
        <Form className="col">
          <Link onClick={onLogout} to="#">
            <Button outline color="light" className="mt-2" block>
              Logout
            </Button>
          </Link>
        </Form>
      </NavItem>
    </Fragment>
  );
  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );
  return (
    <Fragment>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            Develop & Daily blog
          </Link>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {isAuthenticated ? authLink : guestLink}
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
