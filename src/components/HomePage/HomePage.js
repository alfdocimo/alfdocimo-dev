import React, { useState, useEffect } from "react";
import { setVM } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getSelectLandingName } from "../../selectors";
import firebase from "../../firebase";

import { Layout } from "antd";
import SideMenu from "../SideMenu";
import Landing from "../../components/Content/Sections/Landing";
import About from "../../components/Content/Sections/About";
import "./style.less";
const { Content, Sider } = Layout;

const HomePage = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    collapsed: false
  });

  const onCollapse = collapsed => {
    setState({ collapsed });
  };

  useEffect(() => {
    // When the component mounts, fetch data and populate VM
    firebase
      .firestore()
      .collection("vm")
      .get()
      .then(({ docs }) => {
        const vm = docs.map(doc => doc.data())[0];

        dispatch(setVM(vm));
      });
  }, []);

  const name = useSelector(getSelectLandingName);

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
            <Landing id="section-1" name={name} />
            <About id="section-2" />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default HomePage;
