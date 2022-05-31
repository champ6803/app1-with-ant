import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as requestFromServer from "../services";

export const getItemGroupRowName = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getItemGroupRowName(req)
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

export const getRowNameByFilter = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getRowNameByFilter(req)
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

export const saveItemGroupRowName = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .saveItemGroupRowName(req)
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

