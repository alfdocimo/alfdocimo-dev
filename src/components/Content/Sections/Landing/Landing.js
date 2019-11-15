import React from "react";
import "./style.less";
import PropTypes from "prop-types";

const Landing = ({ id, title, subtitle }) => {
  return (
    <div className="LandingHeader" id={id}>
      <h1 className="LandingHeader__title">{title}</h1>
      <h1 className="LandingHeader__subtitle">{subtitle}</h1>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Landing;
