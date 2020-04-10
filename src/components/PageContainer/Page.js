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
      <Layout className="Page__LayoutContainer">
        <Sider
          collapsible
          collapsed={sideMenuState}
          onCollapse={_handleOnCollapse}
          collapsedWidth={0}
          className="Page__LayoutSider"
        >
          {sideMenu && <SideMenu items={sideMenu} />}
        </Sider>

        <Content>{children}</Content>
      </Layout>
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
