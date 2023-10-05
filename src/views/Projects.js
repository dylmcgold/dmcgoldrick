import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ProjExpNavbar from "components/Navbars/ProjExpNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Tabs from "./index-sections/Tabs.js";

function Projects() {
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
              <i className="now-ui-icons ui-1_settings-gear-63"></i>
            </h1>
            <Tabs />
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Projects;
