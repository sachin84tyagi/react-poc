import React, { Component } from "react";

import "./_dashboardDescription.scss";
import laysLogo from "../../assets/images/image/barbecue.png";
import doritos from "../../assets/images/image/doritos.png";
import cheetos from "../../assets/images/image/cheetos.png";
import redLays from "../../assets/images/image/redLays.png";
import kettleLays from "../../assets/images/image/kettleLays.png";
import { rackDataService } from "../../services/rackData.service";

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
    slidesToSlide: 4, // optional, default to 1.
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
    console.log("_rackDetails Data :::::::", this.state._rackDetails);
    return (
      <div className="scrollmenu">

        {/* <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image={laysLogo}
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image={redLays}
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image={cheetos}
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image={laysLogo}
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image={kettleLays}
          />
          <WithStyles
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            image={doritos}
          /> */}
        {this.state._rackDetails && this.state._rackDetails.map((item, index) => (
          <div className="box-shadow" key={index}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
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

                // <div> {index} {innerindex}</div>
              )}
            </Carousel>
          </div>
        )
        )}

        {/* <div> <img src={doritos} height="90" width="100" alt="" /></div>
          <div> <img src={cheetos} height="90" width="100" alt="" /></div>
          <div> <img src={redLays} height="90" width="100" alt="" /></div>
          <div> <img src={kettleLays} height="90" width="100" alt="" /></div>
          <div> <img src={laysLogo} height="90" width="100" alt="" /></div> */}



        {this.state._rackDetails && this.state._rackDetails.map((shelf, index) => {
          return (
            <div className="box-shadow" key={index}>
              {shelf.map((pusher, index) => {
                return (
                  <div className="box-shadow1" key={index}>
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
                      <img src={laysLogo} alt="" />
                    </a>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
};
