import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Registration.css";
export default class Registration extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    ph_no: "",
    gender: "Male",
    errors: {},
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let status;
    const newUser = {
      name: this.state.name,
      email_id: this.state.email,
      phone_number: this.state.ph_no,
      gender: this.state.gender,
      password: this.state.password,
      confirm_password: this.state.password2,
    };

    fetch("http://127.0.0.1:8000/user/sign_up/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        status = response.status;
        console.log(newUser);
        console.log(response);
        console.log(response.headers["Content-Length"]);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (status >= 200 && status <= 209) {
          this.setState({ errors: {} });
        } else if (status === 400) {
          this.setState({ errors: data });
        }

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>Ready to Post some lazy Stuff!</p>
            <ul className="nav-item">
              <p></p> Already a Member?
              <Link
                className="nav-link text-light font-weight-bold"
                to="/login"
              >
                Login
              </Link>
            </ul>
            <br />
          </div>
          <div className="col-md-9 register-right">
            {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Employee
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Hirer
                </a>
              </li>
            </ul> */}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h1 className="register-heading">Register</h1>
                <form onSubmit={this.onSubmit}>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name *"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="maxl text-left">
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="gender"
                              value="Male"
                              onChange={this.onChange}
                              checked
                            />
                            <span> Male </span>
                          </label>
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="gender"
                              value="Female"
                              onChange={this.onChange}
                            />
                            <span>Female </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username *"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Phone *"
                          name="ph_no"
                          value={this.state.ph_no}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          name="password2"
                          value={this.state.password2}
                          onChange={this.onChange}
                        />
                      </div>
                      <input
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
