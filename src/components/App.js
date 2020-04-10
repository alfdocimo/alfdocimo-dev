/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import routes from "../routes";

import Page from "./PageContainer";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fbClient } from "../../firebase";
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
    async function populateVM() {
      const vm = await fbClient.getVM();
      dispatch(setVM(vm));
      window.sessionStorage.setItem("vm", JSON.stringify(vm));
    }

    const vm = window.sessionStorage.getItem("vm");
    if (vm) {
      dispatch(setVM(JSON.parse(vm)));
    } else {
      // When the component mounts, fetch data and populate VM
      populateVM();
    }
  }, []);

  return (
    <div>
      <Switch>
        {routes.map(({ Component, name, path, selector }) => {
          const pageProps = useSelector(selector);

          return (
            <Route
              key={name}
              exact
              path={path}
              component={() => (
                <Page>
                  <Component {...pageProps} />
                </Page>
              )}
            />
          );
        })}
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
