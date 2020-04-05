import React from "react";
import "./style.less";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Landing = ({ id, title, subtitle, cta }) => {
  return (
    <div className="LandingHeader" id={id}>
      <h1 className="LandingHeader__title">{title}</h1>
      <h2 className="LandingHeader__subtitle">{subtitle}</h2>
      <div className="LandingHeader__cta">
        <Link to="/about-me">
          <Button type="primary" shape="round" size="large">
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
};

export default Landing;
