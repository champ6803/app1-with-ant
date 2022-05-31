import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as requestFromServer from "../services";
import * as page from "../reducers/page";

export const getLookingForwardByAdjust = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getLookingForwardByAdjust(req)
      .then((response) => {
        dispatch(page.actions.setLoading(false));
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

export const getLookingForwardByIRAdjust = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getLookingForwardByIRAdjust(req)
      .then((response) => {
        dispatch(page.actions.setLoading(false));
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

export const getLookingForwardByModel = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getLookingForwardByModel(req)
      .then((response) => {
        dispatch(page.actions.setLoading(false));
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

export const getPerformanceReport = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getPerformanceReport(req)
      .then((response) => {
        dispatch(page.actions.setLoading(false));
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
