import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Layout, Breadcrumb } from "antd";
import SideMenu from "../SideMenu";

const { Header, Content, Footer, Sider } = Layout;

const HomePage = () => {
  // eslint-disable-next-line no-console
  const test = useSelector(state => state.homePageReducer.vm.test);

  const [state, setState] = useState({
    collapsed: false
  });

  const onCollapse = collapsed => {
    setState({ collapsed });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
        <SideMenu />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>{test}</Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
