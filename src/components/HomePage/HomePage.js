import React, { useState, useEffect } from "react";
import { setVM } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { getSelectTest } from "../../selectors";

import { Layout } from "antd";
import SideMenu from "../SideMenu";
import Landing from "../../components/Content/Sections/Landing";
import About from "../../components/Content/Sections/About";
import "./style.less";
const { Content, Footer, Sider } = Layout;

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
    <div className="HomePage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={state.collapsed}
          onCollapse={onCollapse}
          collapsedWidth={0}
          style={{ position: "absolute", height: "100%", zIndex: 1 }}
        >
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <Landing id="section-1" />
            <About id="section-2" />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default HomePage;
