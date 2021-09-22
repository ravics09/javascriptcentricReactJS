import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: true,
      userName:"Ravi"
    };
  }

  logout = () => {
    this.setState({currentUser: false});
  }

  render() {
    const { currentUser, userName } = this.state;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            JavaScript Centric
          </Link>
          <div className="navbar-nav mr-auto">
            {currentUser ? (
              <div className="navbar-nav ml-auto d-flex">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {userName}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link" onClick={this.logout}>
                    Logout
                  </Link>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/signin"} className="nav-link">
                    Sign In
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
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
