import React, { useState, useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { withReduxStore } from "../lib/redux.js";
import { PersistGate } from "redux-persist/integration/react";
import setupAxios from "../store/setupAxios";
import axios from "axios";
import '../styles/globals.css'
import "../styles/antd.less";

function MyApp({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    setupAxios(axios, reduxStore);
  });

  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxStore.__PERSISTOR} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default withReduxStore(MyApp);