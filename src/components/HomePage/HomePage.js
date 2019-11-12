import React, { useState, useEffect } from "react";
import { setVM } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { getSelectTest } from "../../selectors";

import { Layout } from "antd";
import SideMenu from "../SideMenu";
import Fullpage from "../../components/Content";
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
            <Fullpage />
          </Content>
          <Footer data-testid="footer" style={{ textAlign: "center" }}>
            {test}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default HomePage;
