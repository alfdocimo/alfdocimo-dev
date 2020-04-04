import React from "react";

import { Menu, Icon } from "antd";
import "./style.less";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SideMenu = ({ items }) => {
  
  const renderSections = (items) =>
    items.map((item) => (
      <Menu.Item key={item.key} style={{ marginTop: "0px" }}>
        <Link to={item.uri}>
          <Icon type={item.sticker} />
          <span>{item.section}</span>
        </Link>
      </Menu.Item>
    ));

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      data-testid="side-menu"
    >
      {renderSections(items)}
    </Menu>
  );
};

SideMenu.propTypes = {
  items: PropTypes.array,
};

export default SideMenu;
