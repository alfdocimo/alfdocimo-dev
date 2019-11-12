import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Landing from "./Sections/Landing";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    data-testid="Fullpage"
    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Landing />
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
