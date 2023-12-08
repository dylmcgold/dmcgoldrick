import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Contact from "./index-sections/Contact.js";
import BasicBackground from "./index-sections/BasicBackground.js";

function Index() {
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
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="main">
          <Contact />
          <BasicBackground />
          <CompleteExamples />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
