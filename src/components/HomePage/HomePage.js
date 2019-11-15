import React, { useState, useEffect } from "react";
import { setVM } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectLanding,
  getSelectAbout,
  getSelectMenu
} from "../../selectors";
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

  const { title, subtitle } = useSelector(getSelectLanding);
  const { test } = useSelector(getSelectAbout);
  const menu = useSelector(getSelectMenu);

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
          {menu && <SideMenu items={menu} />}
        </Sider>
        <Layout>
          <Content>
            <Landing id="section-1" title={title} subtitle={subtitle} />
            <About id="section-2" test={test} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default HomePage;
