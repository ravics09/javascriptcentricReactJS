import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarStyle from "./navbar.module.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false,
      userName: "Ravi",
    };
  }

  logout = () => {
    this.setState({ currentUser: true });
    localStorage.clear();
  };

  render() {
    const { currentUser, userName } = this.state;
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <NavLink className={NavBarStyle.navBrandLink} exact to="/">
            JavaScript Centric
          </NavLink>
          <div className="navbar-nav mr-auto">
            {currentUser ? (
              <div className="navbar-nav ml-auto d-flex">
                <li className="nav-item">
                  <NavLink to={"/profile"} exact className={NavBarStyle.navLink}>
                    {userName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/signin"
                    exact
                    className={NavBarStyle.navLink}
                    onClick={this.logout}
                  >
                    Logout
                  </NavLink>
                </li>
              </div>
            ) : null
            // (
            //   <div className="navbar-nav ml-auto">
            //     <li className="nav-item">
            //       <NavLink to={"/signin"} exact={true} className={NavBarStyle.navLink} activeClassName={NavBarStyle.activeNavLink}>
            //         Sign In
            //       </NavLink>
            //     </li>
            //     <li className="nav-item">
            //       <NavLink to={"/signup"} exact={true} className={NavBarStyle.navLink} ctiveClassName={NavBarStyle.activeNavLink}>
            //         Sign Up
            //       </NavLink>
            //     </li>
            //   </div>
            // )
            }
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
