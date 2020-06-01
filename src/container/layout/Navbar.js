import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const guestLinks = (
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    );
    const authLinks = (
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              //   onClick={this.onLogoutClick.bind(this)}
              //   href="/"
            >
              <img
                className="rounded-circle"
                style={{ width: "25px", marginRight: "5px" }}
                title="You must have gratvar connected to your email to display image"
              />
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light text-dark bg-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              LaZy PoSTS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    {" "}
                    Posts
                  </Link>
                </li>
              </ul>
              {false ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
