import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as requestFromServer from "../services";
import * as page from "../reducers/page";
import * as auth from "../reducers/auth";

export const getDataEdit = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getDataEdit(req)
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

export const getDataView = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getDataView(req)
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

export const saveDataEdit = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .saveDataEdit(req)
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

export const checkEditIsLock = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .checkEditIsLock(req)
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

export const unlockPermissionToEdit = (req) => (dispatch, getState) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .unlockPermissionToEdit(req)
      .then((response) => {
        dispatch(page.actions.setLoading(false));
        dispatch(auth.actions.setEditParams(undefined));
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
