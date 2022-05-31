import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as requestFromServer from "../services";

export const getItemGroupByfilter = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getItemGroupByfilter(req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status == 401) {
          const message = "You're not authorized to access the data.";
          swal("Error!", message, "error");
          const state = getState();
          Router.push({
            pathname: "/login",
            query: { from: state.page.fromPath },
          });
        } else {
          reject(error);
        }
      });
  });
};

export const saveItemGroup = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .saveItemGroup(req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status == 401) {
          const message = "You're not authorized to access the data.";
          swal("Error!", message, "error");
          const state = getState();
          Router.push({
            pathname: "/login",
            query: { from: state.page.fromPath },
          });
        } else {
          reject(error);
        }
      });
  });
};

export const cloneItemGroupByfilter = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .cloneItemGroupByfilter(req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status == 401) {
          const message = "You're not authorized to access the data.";
          swal("Error!", message, "error");
          const state = getState();
          Router.push({
            pathname: "/login",
            query: { from: state.page.fromPath },
          });
        } else {
          reject(error);
        }
      });
  });
};

export const checkItemGroupMapping = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .checkItemGroupMapping(req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status == 401) {
          const message = "You're not authorized to access the data.";
          swal("Error!", message, "error");
          const state = getState();
          Router.push({
            pathname: "/login",
            query: { from: state.page.fromPath },
          });
        } else {
          reject(error);
        }
      });
  });
};
