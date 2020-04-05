import React from "react";
import { setSideMenuCollapsed } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { getSelectMenu, getIsSideMenuCollapsed } from "../../selectors";
import PropTypes from "prop-types";

import { Layout } from "antd";
import SideMenu from "../SideMenu";
import "./style.less";
const { Content, Sider } = Layout;

const HomePage = ({ children }) => {
  const dispatch = useDispatch();
  const sideMenuState = useSelector(getIsSideMenuCollapsed);
  const sideMenu = useSelector(getSelectMenu);
  const _handleOnCollapse = () =>
    dispatch(setSideMenuCollapsed(!sideMenuState));

  return (
    <div className="Page">
      <Layout style={{ height: "100vh" }}>
        <Sider
          collapsible
          collapsed={sideMenuState}
          onCollapse={_handleOnCollapse}
          collapsedWidth={0}
          style={{ position: "absolute", height: "100%", zIndex: 1 }}
        >
          {sideMenu && <SideMenu items={sideMenu} />}
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
