import React, { Component } from "react";

import "./_dashboardDescription.scss";
import laysLogo from "../../assets/images/image/barbecue.png";
import doritos from "../../assets/images/image/doritos.png";
import cheetos from "../../assets/images/image/cheetos.png";
import redLays from "../../assets/images/image/redLays.png";
import kettleLays from "../../assets/images/image/kettleLays.png";
import { rackDataService } from "../../services/rackData.service";
import Spinner from "../../shared/spinner/spinner"
import { history } from "../../helpers/history";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default class DashboardDescription extends Component {
  state = {
    _rackDetails: [],
    _rackDetails2: [laysLogo, doritos, cheetos, redLays, kettleLays]
  }

  componentDidMount() {
    rackDataService.getRackById(1).then(result => {
      result.data && this.processData(result.data.pusherShelfLists);
      /* this.setState({
        _rackDetails: result.data.pusherShelfLists
      }); */
    });
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const idA = a.id;
    const idB = b.id;

    let comparison = 0;
    if (idA > idB) {
      comparison = 1;
    } else if (idA < idB) {
      comparison = -1;
    }
    return comparison;
  }

  processData = (pusherShelfLists) => {
    const rackDetails = [];
    pusherShelfLists.sort(this.compare);
    while (pusherShelfLists.length) {
      rackDetails.push(pusherShelfLists.splice(0, 4));
    }
    this.setState({
      _rackDetails: rackDetails
    });
  }

  render() {
    const { _rackDetails } = this.state;

    return (
      <React.Fragment>

        {_rackDetails.length === 0 ? <Spinner /> :
          <div className="scrollmenu">
            <div style={{ margin: "5px 0px 6px 5px" }}><button type="button" className="btn btn-dark btn-sm" onClick={history.goBack}>Go Back</button></div>

            {_rackDetails && _rackDetails.map((item, index) => (
              <div className="box-shadow" key={index}>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {item.map((pusher, innerindex) => (
                    <div className="box-shadow1" key={`${index}${innerindex}`}>
                      <a href="#" className="photocard">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <img height="90" width="100" src={laysLogo} alt={`${index} = ${innerindex}`} />
                      </a>
                    </div>
                  )
                  )}
                </Carousel>
              </div>
            )
            )}
          </div>}
      </React.Fragment>
    );
  }
};
