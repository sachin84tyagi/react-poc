import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./_header.scss";
import logo from "../../assets/images/hcl-logo.png";

class Header extends Component {
  state = {
    visible: false
  };

  renderHdrRight() {
    if (this.props.isAuthorized) {
      return (
        <div className="d-flex">
          <i style={{ color: "#232838" }} className="far fa-bell ml-4 mr-2">
            <span className="badge">9</span>
          </i>
          <img
            className="rounded-circle dropdown-toggle"
            src="https://www.w3schools.com/howto/img_avatar.png"
            width="30"
            height="30"
            alt="Profile"
            data-toggle="dropdown"
          />

          <div
            className="dropdown-menu image-dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            <i className="fas fa-caret-up" />
            <Link className="dropdown-item" to="/logoutPage">
              Logout
            </Link>
          </div>
        </div>
      );
    }
  }
  onMenuClick = () => {
    this.setState({
      visible: !this.state.visible
    });
    this.props.onClickFn(this.state.visible);
  };

  render() {
    console.log("in header props", this.props);
    return (
      <header className="align-items-center top-header d-flex justify-content-between">
        {/* <nav className="navbar navbar-expand-lg navbar-light navbarAdditionClass"> */}
        {this.props.displaySideBar ? 
        <button
          type="button"
          id="sidebarCollapse"
          className={
            "btn btn-warning btn-bg "
            
          }
          onClick={this.onMenuClick}
        >
          <i className="fas fa-align-left"></i>
        </button>: ''}
        {/* </nav> */}
        <a href="#">
          <img
            src={logo}
            className="logo-image"
            height="150"
            alt="pepsico logo"
          />
        </a>
        <div>{this.renderHdrRight()}</div>
      </header>
    );
  }
}

// function mapStateToProps(state) {
//   console.log("state in header", state)
//   return {
//     sideBarStatus: state.sideBarStatusReducer

//   }
// }

// const mapDispatchToProps =  ({
//   sideBarStatus : param  => SideBarStatusAction.sidebarStatus(param)
// })

export default Header;
