import React, { Component } from "react";
import "../../App.css";

import { Link } from "react-router-dom";
import Home from "../../page/Home";
import About from "../About";
import Skills from "../Skills";
import Project from "../Project";
import ContactMe from "../ContactMe";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#e2edff" }}
          // className="bg-header"
        >
          <div className="container">
            <a className="navbar-brand" href="#" style={{ color: "black" }}>
              <Link className="Link Taufik" to="/">
                Taufik
              </Link>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  ms-auto">
                {/* <li class="nav-item">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    <Link className="Link" to="/">
                      Home
                    </Link>
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "black" }}>
                    <Link className="Link" to="/">
                      About
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "black" }}>
                    <Link className="Link" to="/skills">
                      Skills
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "black" }}>
                    <Link className="Link" to="/project">
                      Project
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    style={{ color: "black" }}
                  >
                    <Link className="Link" to="/contactMe">
                      Contack
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
