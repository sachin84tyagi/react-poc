import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

import "./_footer.scss";

class Footer extends Component {
  state = {
    selectedTab: "Racks"
  };
  footerJSON = [
    {
      name: "Home",
      classes: "fa fa-home footer-icons",
      navigation: "/home"
    },
    {
      name: "Racks",
      classes: "fa fa-cubes footer-icons",
      navigation: "/managerDashboard"
    },
    {
      name: "QrScan",
      classes: "fa fa-qrcode footer-icons",
      navigation: "/qrscan"
    },
    {
      name: "Cart",
      classes: "fa fa-shopping-cart footer-icons",
      navigation: "/cartReview"
    }
  ];

  setSelected(data) {
    this.setState({ selectedTab: data.name });
  }
  render() {
    // console.log("in the footer", this.props.isAuthorized);
    return this.props.isAuthorized ? (
      <footer className="footer-row d-flex footer-row-inner justify-content-between ">
        {this.footerJSON.map((data, index) => {
          return (
            <div
              className="icon-row"
              key={index}
              onClick={() => this.setSelected(data, index)}
            >
              <NavLink to={data.navigation}>
                <i
                  className={classnames(data.classes, {
                    active: this.state.selectedTab === data.name
                  })}
                  aria-hidden="true"
                />
                <span
                  className={classnames("footer-text", {
                    active: this.state.selectedTab === data.name
                  })}
                >
                  {data.name}
                </span>
              </NavLink>
            </div>
          );
        })}
      </footer>
    ) : null;
  }
}

export default Footer;
