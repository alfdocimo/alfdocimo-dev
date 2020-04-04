/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import Page from "./PageContainer";
import About from "./Content/Sections/About";
import Landing from "./Content/Sections/Landing";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { getSelectAbout, getSelectLanding } from "../selectors";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../firebase";
import { setVM } from "../actions";

import { hot } from "react-hot-loader";
import "./style.less";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if VM is stored in sessionStorage
    const vm = window.sessionStorage.getItem("vm");
    if (vm) {
      dispatch(setVM(JSON.parse(vm)));
    } else {
      // When the component mounts, fetch data and populate VM
      firebase
        .firestore()
        .collection("vm")
        .get()
        .then(({ docs }) => {
          const vm = docs.map((doc) => doc.data())[0];
          window.sessionStorage.setItem("vm", JSON.stringify(vm));
          dispatch(setVM(vm));
        });
    }
  }, []);

  const aboutState = useSelector(getSelectAbout);
  const landingContent = useSelector(getSelectLanding);

  return (
    <div>
      <Switch>
        <Route
          exact
          path={["/", "/home"]}
          component={() => (
            <Page>
              <Landing {...landingContent} />
            </Page>
          )}
        />
        <Route
          exact
          path="/about-me"
          component={() => (
            <Page>
              <About {...aboutState} />
            </Page>
          )}
        />
        <Route
          component={() => (
            <Page>
              <NotFoundPage />
            </Page>
          )}
        />
      </Switch>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
