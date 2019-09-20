import React, { Component } from "react";
import "./_sidebar.scss";

const SidebarCollpase = props => {
  return (
    <nav id="sidebarAtCollapse">
      <br />

      <ul className="list-unstyled components">
        <li className="active">
          <a aria-expanded="false">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-briefcase"></i>
          </a>
        </li>
        <li>
          <a aria-expanded="false">
            <i className="fas fa-copy"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-image"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-question"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-paper-plane"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarCollpase;
