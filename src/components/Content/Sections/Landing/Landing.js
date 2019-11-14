import React from "react";
import "./style.less";
import PropTypes from "prop-types";

const Landing = ({ id }) => {
  return (
    <div className="LandingHeader" id={id}>
      <h1 className="LandingHeader__title">Me gustan las arepas</h1>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string
};

export default Landing;
