import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./_sidebar.scss";

const SidebarCollpase = props => {
  return (
    <nav id="sidebarAtCollapse">
      <br />

      <ul className="list-unstyled components">
        <li>
          <Link to="/dashboard">
            <i className="fas fa-image" data-toggle="tooltip" title="Dashboard"></i>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-image" data-toggle="tooltip" title="Live Stream"></i>
          </Link>
        </li>
        <li>
          <Link to="/notificationData">
            <i className="fas fa-image" data-toggle="tooltip" title="Notification"></i>
          </Link>
        </li>
        <li className="active">
          <a aria-expanded="false">
            <i className="fas fa-home" data-toggle="tooltip" title="Home"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-briefcase" data-toggle="tooltip" title="About"></i>
          </a>
        </li>
        <li>
          <a aria-expanded="false">
            <i className="fas fa-copy" data-toggle="tooltip" title="Pages"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-image" data-toggle="tooltip" title="Portfolio"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-question" data-toggle="tooltip" title="FAQ"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-paper-plane" data-toggle="tooltip" title="Contact"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarCollpase;
