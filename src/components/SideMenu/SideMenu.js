import React from "react";

import { Menu, Icon } from "antd";
import "./style.less";
import PropTypes from "prop-types";

const SideMenu = ({ items }) => {
  const handleClickSection = elem => {
    const section = document.getElementById(`section-${elem.key}`);
    section.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const renderSections = items =>
    items.map(item => (
      <Menu.Item
        key={item.key}
        onClick={e => handleClickSection(e)}
        style={{ marginTop: "0px" }}
        data-testid={`btn-${item.section.replace(" ", "-").toLowerCase()}`}
      >
        <Icon type={item.sticker} />
        <span>{item.section}</span>
      </Menu.Item>
    ));

  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      {renderSections(items)}
    </Menu>
  );
};

SideMenu.propTypes = {
  items: PropTypes.array
};

export default SideMenu;
