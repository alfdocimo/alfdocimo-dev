import React from "react";
import PropTypes from "prop-types";
import "./style.less";

const Landing = ({ id, test }) => {
  return (
    <div className="About" id={id}>
      <h1>{test}</h1>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string,
  test: PropTypes.string
};

export default Landing;
