import React from "react";
import PropTypes from "prop-types";
import "./style.less";

const About = ({ id, title, content }) => {
  return (
    <div className="About" id={id}>
      <div className="About__cornerRight" />
      {/* <div className="About__cornerLeft" /> */}
      <div className="About__textContainer">
        <h1 className="About__title">{title}</h1>
        <span className="About__content">{content}</span>
      </div>
    </div>
  );
};

About.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default About;
