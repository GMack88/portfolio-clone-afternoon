import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <div>
          <div className="logo">Start bootstrap</div>
          <nav>
            <ul>
              <li>
                <a href="#/services">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
