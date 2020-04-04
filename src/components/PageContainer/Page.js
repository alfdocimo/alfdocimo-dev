import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getSelectMenu } from "../../selectors";
import PropTypes from "prop-types";

import { Layout } from "antd";
import SideMenu from "../SideMenu";
import "./style.less";
const { Content, Sider } = Layout;

const HomePage = ({ children }) => {
  const [state, setState] = useState({
    collapsed: true,
  });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };

  const menu = useSelector(getSelectMenu);

  return (
    <div className="HomePage">
      <Layout style={{ height: "100vh" }}>
        <Sider
          collapsible
          collapsed={state.collapsed}
          onCollapse={onCollapse}
          collapsedWidth={0}
          style={{ position: "absolute", height: "100%", zIndex: 1 }}
        >
          {menu && <SideMenu items={menu} />}
        </Sider>
        <Layout style={{ height: "100vh" }}>
          <Content style={{ height: "100vh" }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
