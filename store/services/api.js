import "isomorphic-unfetch";
import axios from "axios";
import getConfig from "next/config";
import swal from "sweetalert";
import * as auth from "../reducers/auth";
import Router from "next/router";
import { getTokenExpirationDate, isExpiredToken } from "../../helpers";
const { publicRuntimeConfig } = getConfig();
import { initializeStore } from "../../store";
import * as actionsRedux from "../../store/actions";

export const API_PATH = {
  LOGIN: `${publicRuntimeConfig.API_URL}/auth/loginNoAD`,
  GET_PRODUCT: `${publicRuntimeConfig.API_URL}/product/getProduct`
};

export const request = async (
  method,
  url,
  params,
  { headersOption, ...rest } = {}
) => {
  if (API_PATH.LOGIN !== url) {
    await checkAuthenticated();
  }

  const result = await axios({
    method: method,
    url: url,
    data: params,
    headers: {
      "Content-Type": "application/json",
      ...headersOption,
    },
    ...rest,
  });
  return result;
};

const checkAuthenticated = async () => {
  let store = initializeStore();
  const { auth } = store.getState();

  const userIsAuthenticated = !!auth.token;
  const userTokenExpired = isExpired(auth.token);
  const RoutePayload = {
    pathname: "/login",
    query: { from: fromPath },
  };

  if (!userIsAuthenticated) {
    return Router.replace(RoutePayload);
  }

  if (userTokenExpired) {
    return Router.replace(RoutePayload);
  }

  const userIsTaked = await getUserInfo(auth.token);
  if (!userIsTaked) {
    return Router.replace(RoutePayload);
  }
};

const isExpired = (token) => {
  return isExpiredToken(token);
};

const getUserInfo = async (token) => {
  return actionsRedux.getUserInfo({ token });
};
