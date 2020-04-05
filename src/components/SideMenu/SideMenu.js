import React from "react";

import { Menu, Icon } from "antd";
import "./style.less";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const SideMenu = ({ items }) => {
  const location = useLocation();

  const renderSections = (items) =>
    items.map((item) => (
      <Menu.Item key={item.uri} style={{ marginTop: "0px" }}>
        <Link to={item.uri} data-testid={`btn-${item.uri}`}>
          <Icon type={item.sticker} />
          <span>{item.section}</span>
        </Link>
      </Menu.Item>
    ));

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      selectedKeys={[location.pathname.replace("/", "")]}
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
