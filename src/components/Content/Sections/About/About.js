import React from "react";
import PropTypes from "prop-types";
import "./style.less";

const Landing = ({ id }) => {
  return (
    <div className="About" id={id}>
      <h1>Me gustan muxo las arepas</h1>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string
};

export default Landing;
