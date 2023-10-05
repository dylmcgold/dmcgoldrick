import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ProjExpNavbar from "components/Navbars/ProjExpNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Carousel from "./index-sections/Carousel.js";
import ExpExample from "./index-sections/ExpExample.js";

function Experience() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ProjExpNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section">
            <h1 className="title">
              <i className="now-ui-icons business_briefcase-24"></i>
            </h1>
            <Carousel />
            <ExpExample />
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Experience;
