import React, { Component } from "react";
import Header from "../part/Header/Header";
import About from "../part/About";
import Taufik from "../part/Taufik";
import Project from "../part/Project";
import ContactMe from "../part/ContactMe";
import Footer from "../part/Footer.js";
import Skills from "../part/Skills";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// bisa menerima porp dan state
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Taufik />
        {/* <Footer /> */}
      </div>
    );
  }
}
