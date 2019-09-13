import React from "react";
import { NavLink } from "react-router-dom";

import "./_internalHeader.scss";

const iHeaderJSON = [
  {
    name: "Home",
    navigation: "/managerDashboard"
  },
  {
    name: "Add Rack",
    navigation: "/addRack"
  }
];

const InternalHeader = () => {
  return (
    <header className="align-items-center internal-header d-flex justify-content-between">
      <NavLink to="/addRack" activeClassName="active">
        <i className="fa fa-plus-circle" aria-hidden="true" />
      </NavLink>
      {/* {iHeaderJSON.map((data, index) => {
        return (
          <NavLink key={index} to={data.navigation} activeClassName="active">
            {data.name}
          </NavLink>
        );
      })} */}
    </header>
  );
};

export default InternalHeader;
