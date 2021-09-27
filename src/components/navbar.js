import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarStyle from "./navbar.module.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("userData"));
    if (loggedInUser) {
      setUserName(loggedInUser.user);
    }
  }, []);

  const logout = () => {
    setCurrentUser(false);
    localStorage.clear();
    history.push("/signin");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Navbar className={NavBarStyle.navContainer} expand="lg" sticky="top">
            <Navbar.Brand className={NavBarStyle.navBrandLink}>
              JavaScript Centric
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer
                  exact
                  to="/home"
                  activeClassName={NavBarStyle.activeNavLink}
                >
                  <Nav.Link className={NavBarStyle.navLink}>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer
                  exact
                  to="/contactus"
                  activeClassName={NavBarStyle.activeNavLink}
                >
                  <Nav.Link className={NavBarStyle.navLink}>
                    Contact Us
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer
                  exact
                  to="/aboutus"
                  activeClassName={NavBarStyle.activeNavLink}
                >
                  <Nav.Link className={NavBarStyle.navLink}>About Us</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className="ms-auto">
                <NavDropdown title="Ravi" id="basic-nav-dropdown" className={NavBarStyle.navDropdownLink}>
                  <LinkContainer exact to="/profile">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer exact to="/profile">
                    <NavDropdown.Item>Readling List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer exact to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer exact to="/profile">
                    <NavDropdown.Item>Settings</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
