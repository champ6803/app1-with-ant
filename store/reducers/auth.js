import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  Login: "LOGIN",
  SetUser: "SET_USER",
  SetToken: "SET_TOKEN",
  SetPermission: "SET_PERMISSION",
  SetUserAD: "SET_USER_AD",
  SetEditParams: "SET_EDIT_PARAMS",
  Logout: "LOGOUT",
};

const initialAuthState = {
  user: undefined,
  token: undefined,
  permission: undefined,
  userAD: undefined,
  edit_params: undefined,
};

export default persistReducer(
  {
    storage,
    key: "app-auth",
    whitelist: ["token", "permission", "edit_params"],
  },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const token = action.payload.token;
        return { token, user: undefined };
      }
      case actionTypes.SetUser: {
        const user = action.payload.user;
        return { ...state, user };
      }
      case actionTypes.SetToken: {
        const token = action.payload.token;
        return { ...state, token };
      }
      case actionTypes.SetPermission: {
        const permission = action.payload.permission;
        return { ...state, permission };
      }
      case actionTypes.Logout: {
        return initialAuthState;
      }
      case actionTypes.SetUserAD: {
        const userAD = action.payload.userAD;
        return { ...state, userAD };
      }

      case actionTypes.SetEditParams: {
        const edit_params = action.payload.edit_params;
        return { ...state, edit_params };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (token) => ({ type: actionTypes.Login, payload: { token } }),
  logout: () => ({ type: actionTypes.Logout }),
  setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
  setToken: (token) => ({ type: actionTypes.SetToken, payload: { token } }),
  setPermission: (permission) => ({
    type: actionTypes.SetPermission,
    payload: { permission },
  }),
  setUserAD: (userAD) => ({ type: actionTypes.SetUserAD, payload: { userAD } }),
  setEditParams: (edit_params) => ({
    type: actionTypes.SetEditParams,
    payload: { edit_params },
  }),
};
