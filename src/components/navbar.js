import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarStyle from "./navbar.module.css";
import { NavDropdown, Image } from "react-bootstrap";

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
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="navbar-nav ml-auto d-flex">
          <li className="nav-item">
            <NavLink className={NavBarStyle.navBrandLink} exact to="/home">
              JavaScript Centric
            </NavLink>
          </li>
        </div>
        <div className="navbar-nav ml-auto d-flex" style={{ paddingRight: 80 }}>
          <li className="nav-item">
            <NavLink
              to={"/home"}
              exact={true}
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/aboutus"}
              exact={true}
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/contactus"}
              exact={true}
              className={NavBarStyle.navLink}
              activeClassName={NavBarStyle.activeNavLink}
            >
              Contact
            </NavLink>
          </li>
          {currentUser ? (
            <NavDropdown title={userName} id="basic-nav-dropdown">
              <NavDropdown.Item to="/profile" exact>
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout} exact>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : // <div className="navbar-nav ml-auto d-flex">
          //   <li className="nav-item">
          //     <NavLink
          //       to={"/profile"}
          //       exact
          //       className={NavBarStyle.navLink}
          //     >
          //       {userName}
          //     </NavLink>
          //   </li>
          // <li className="nav-item">
          //   <NavLink
          //     to="/signin"
          //     exact
          //     className={NavBarStyle.navLink}
          //     onClick={this.logout}
          //   >
          //     Logout
          //   </NavLink>
          // </li>
          // </div>
          null}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
