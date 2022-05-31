import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as requestFromServer from "../services";
import * as page from "../reducers/page";

export const getRegion = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getRegion(req)
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

export const getRegionAll = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getRegionAll(req)
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

export const getChainById = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getChainById(req)
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

export const getReason = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getReason(req)
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

export const getRole = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getRole(req)
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

export const getYear = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getYear(req)
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

export const getChainLookingForwardByNetConChainId =
  (req) => (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      requestFromServer
        .getChainLookingForwardByNetConChainId(req)
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

export const getAllModule = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getAllModule(req)
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

export const getAllFunction = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getAllFunction(req)
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

export const getCombineModuleFunction = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getCombineModuleFunction(req)
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

export const getYearItemGroup = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getYearItemGroup(req)
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

export const getGroupRegion = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getGroupRegion(req)
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

export const getOpenPeriod = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .getOpenPeriod(req)
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

export const setOpenPeriod = (req) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    requestFromServer
      .setOpenPeriod(req)
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



