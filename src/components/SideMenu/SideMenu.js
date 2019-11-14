import React from "react";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
import "./style.less";

const SideMenu = () => {
  const handleClickSection = elem => {
    const section = document.getElementById(`section-${elem.key}`);
    section.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item
        key="1"
        onClick={e => handleClickSection(e)}
        style={{ marginTop: "0px" }}
      >
        <Icon type="smile" />
        <span>Home</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={e => handleClickSection(e)}>
        <Icon type="user" />
        <span>About me</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            <span>User</span>
          </span>
        }
      >
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="team" />
            <span>Team</span>
          </span>
        }
      >
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9">
        <Icon type="file" />
        <span>File</span>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
