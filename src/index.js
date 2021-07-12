import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./page/Home";
import About from "./part/About";
import Skills from "./part/Skills";
import Project from "./part/Project";
import ContactMe from "./part/ContactMe";
import Header from "./part/Header/Header";
import Footer from "./part/Footer";
import Taufik from "./part/Taufik";
// import Utama from "./components2/utama";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Taufik />
      </div>
      <div></div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route path="/about" component={About}></Route> */}
        <Route path="/skills" component={Skills}></Route>
        <Route path="/project" component={Project}></Route>
        <Route path="/contactMe" component={ContactMe}></Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
