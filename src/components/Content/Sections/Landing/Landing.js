import React from "react";
import "./style.less";
import PropTypes from "prop-types";

const Landing = ({ id, name }) => {
  return (
    <div className="LandingHeader" id={id}>
      <h1 className="LandingHeader__title">{name}</h1>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export default Landing;
