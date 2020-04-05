import React from "react";
import "./style.less";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { selectors } from "../../../../../shared";

const Landing = ({ id, title, subtitle, cta }) => {
  return (
    <div className="LandingHeader" id={id}>
      <h1
        className="LandingHeader__title"
        data-testid={selectors.pages.landing.title}
      >
        {title}
      </h1>
      <h2
        className="LandingHeader__subtitle"
        data-testid={selectors.pages.landing.subtitle}
      >
        {subtitle}
      </h2>
      <div className="LandingHeader__cta">
        <Link to="/about-me" data-testid={selectors.pages.landing.cta}>
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
