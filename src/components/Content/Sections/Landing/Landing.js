import React from "react";
import "./style.less";
import PropTypes from "prop-types";
import { Button } from "antd";

const Landing = ({ id, title, subtitle, cta }) => {
  const handleClickSection = ({ section }) => {
    const getSection = document.getElementById(`section-${section}`);
    getSection.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  return (
    <div className="LandingHeader" id={id}>
      <h1 className="LandingHeader__title">{title}</h1>
      <h2 className="LandingHeader__subtitle">{subtitle}</h2>
      <div className="LandingHeader__cta">
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => handleClickSection({ section: 2 })}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

Landing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string
};

export default Landing;
