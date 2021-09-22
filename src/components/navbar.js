import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false,
      userName:"Ravi"
    };
  }

  logout = () => {
    this.setState({currentUser: true});
  }

  render() {
    const { currentUser, userName } = this.state;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid" style={{paddingLeft: 100, paddingRight: 190}}>
          <NavLink className="navbar-brand" exact to="/">
            JavaScript Centric
          </NavLink>
          <div className="navbar-nav mr-auto">
            {currentUser ? (
              <div className="navbar-nav ml-auto d-flex">
                <li className="nav-item">
                  <NavLink to={"/profile"} exact className="nav-link">
                    {userName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signin" exact className="nav-link" onClick={this.logout}>
                    Logout
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to={"/signup"} exact className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
