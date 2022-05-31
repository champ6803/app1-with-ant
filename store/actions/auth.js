import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as auth from "../reducers/auth";
import * as page from "../reducers/page";
import * as reqAPI from "../services";

export const login = (params) => async (dispatch) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    reqAPI
      .request('post', reqAPI.API_PATH.LOGIN, params)
      .then(({ data }) => {
        if (data.isSuccess == true) {
          const token = data.data.token;
          const userPermission = data.data.userPermission;
          dispatch(auth.actions.login(token));
          dispatch(auth.actions.setPermission(userPermission));
          resolve(data);
        } else {
          reject(data);
        }  
      })
      .catch((error) => {
        console.log("login error => ", error);
        reject(error);
      })
      .finally(() => {
        dispatch(page.actions.setLoading(false));
      });
  });
};

export const getUserInfo = (params) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .getUserInfo(params)
      .then(({ data }) => {
        if (data.isSuccess) {
          const token = data.data.token;
          const userInfo = data.data.userInfo;
          const userPermission = data.data.userPermission;
          dispatch(auth.actions.setToken(token));
          dispatch(auth.actions.setUser(userInfo));
          dispatch(auth.actions.setPermission(userPermission));
          resolve(true);
        }
        resolve(false);
      })
      .catch((error) => {
        console.log("getUserInfo error => ", error);
        resolve(false);
      });
  });
};

export const getUserByUserId = (params) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .getUserByUserId(params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("getUserInfo error => ", error);
        resolve(false);
      });
  });
};

export const getUserByFilter = (params) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .getUserByFilter(params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("getUserInfo error => ", error);
        resolve(false);
      });
  });
};

export const saveUser = (params) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .saveUser(params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("getUserInfo error => ", error);
        resolve(false);
      });
  });
};

export const getRoleByFilter = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .getRoleByFilter(req)
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

export const saveRolePermission = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .saveRolePermission(req)
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

export const getRoleFunctionByRoleId = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    reqAPI
      .getRoleFunctionByRoleId(req)
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

export const setToken = (token) => (dispatch) => {
  dispatch(auth.actions.setToken(token));
};

export const logout = () => (dispatch) => {
  dispatch(auth.actions.logout());
};

export const setUserAD = (userAD) => (dispatch) => {
  dispatch(auth.actions.setUserAD(userAD));
};

export const setEditParams = (edit_params) => (dispatch) => {
  dispatch(auth.actions.setEditParams(edit_params));
};
