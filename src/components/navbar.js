import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarStyle from "./navbar.module.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { signout } from "./../actions/authAction";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownActiveKey, setActiveKey] = useState(1);
  const [searchText, setSearchText] = useState("");
  const { isLoggedIn, loggedInUser } = useSelector(
    (state) => state.AuthReducer
  );

  useEffect(() => {
    if (isLoggedIn) {
      setCurrentUser(true);
      setUserName(loggedInUser.fullName);
    } else {
      setCurrentUser(false);
      setUserName("");
    }
  }, [isLoggedIn]);

  const handleSelect = (key) => {
    setActiveKey(Math.trunc(key));
  };

  const handleLogout = async () => {
    dispatch(signout()).then((response) => {
      if (response.status === "success") {
        navigate("/", { replace: true });
      }
    });
  };

  const handleSearchText = async (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    alert("You searched for" + searchText);
    // setSearchText("");
  };

  return (
    <Container>
      <Navbar className={NavBarStyle.navContainer} expand="lg">
        <Navbar.Brand className={NavBarStyle.navBrandLink}>
          <span style={{ color: "rgb(247, 220, 70)" }}>JS</span>Centric
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              exact
              as={NavLink}
              to="/home"
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              exact
              as={NavLink}
              to="/jobs"
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              Jobs
            </Nav.Link>
            <Nav.Link
              exact
              as={NavLink}
              to="/contactus"
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              exact
              as={NavLink}
              to="/aboutus"
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              About Us
            </Nav.Link>
            <Form className={NavBarStyle.searchBar}>
              <InputGroup size="sm">
                <FormControl
                  placeholder="Search here"
                  value={searchText}
                  onChange={(e) => {
                    handleSearchText(e);
                  }}
                />
                <Button variant="dark" onClick={() => handleSearch()}>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Nav>
          {currentUser ? (
            <Nav
              className="ms-auto"
              activeKey={dropdownActiveKey}
              onSelect={handleSelect}
            >
              <NavDropdown
                alignLeft
                flip
                title={<span className={NavBarStyle.navLink}>{userName}</span>}
                id="basic-nav-dropdown"
                className={NavBarStyle.navDropdownLink}
                eventKey={3}
              >
                <NavDropdown.Item
                  exact
                  as={NavLink}
                  to="/createpost"
                  eventKey={3.1}
                >
                  Create Post
                </NavDropdown.Item>
                <NavDropdown.Item
                  exact
                  as={NavLink}
                  to="/dashboard"
                  eventKey={3.1}
                >
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item
                  exact
                  as={NavLink}
                  to="/readinglist"
                  eventKey={3.2}
                >
                  Readling List
                </NavDropdown.Item>
                <NavDropdown.Item
                  exact
                  as={NavLink}
                  to="/account"
                  eventKey={3.3}
                >
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item
                  exact
                  as={NavLink}
                  to="/selectquiztopic"
                  eventKey={3.4}
                >
                  Coding Quiz
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default NavBar;
