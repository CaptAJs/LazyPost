import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Registration from "./container/Registration";
import Login from "./container/Login";
import Landing from "./container/layout/Landing";
import Navbar from "./container/layout/Navbar";
import Footer from "./container/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Registration} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
