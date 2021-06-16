import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="spacing-sm sticky-top">
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              <span>OjiStore</span>
            </a>
            <div className="collapse-navbar-collapse ml-auto">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Special
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Featured
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Designer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
