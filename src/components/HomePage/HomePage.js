import React, { useState, useEffect } from "react";
import { setVM } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { getSelectTest } from "../../selectors";

import { Layout, Breadcrumb } from "antd";
import SideMenu from "../SideMenu";

const { Header, Content, Footer, Sider } = Layout;

const HomePage = () => {
  const dispatch = useDispatch();

  const test = useSelector(getSelectTest);

  const [state, setState] = useState({
    collapsed: false
  });

  const onCollapse = collapsed => {
    setState({ collapsed });
  };

  useEffect(() => {
    // When the component mounts, fetch data and populate VM
    dispatch(setVM({ test: "arepas" }));
  }, []);

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
        <Footer data-testid="footer" style={{ textAlign: "center" }}>{test}</Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
