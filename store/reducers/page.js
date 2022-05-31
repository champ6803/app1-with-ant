import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetLoading: "SET_LOADING",
  SetPageLoading: "SET_PAGE_LOADING",
  SetFromPath: "SET_FROM_PATH",
};

export const initialPageState = {
  isLoading: false,
  isPageLoading: true,
  fromPath: "",
};

export default persistReducer(
  {
    storage,
    key: "app-page",
    whitelist: ["fromPath"],
  },
  (state = initialPageState, action) => {
    switch (action.type) {
      case actionTypes.SetLoading: {
        const isLoading = action.payload.isLoading;
        return { ...state, isLoading: isLoading };
      }
      case actionTypes.SetPageLoading: {
        const isPageLoading = action.payload.isLoading;
        return { ...state, isPageLoading: isPageLoading };
      }
      case actionTypes.SetFromPath: {
        const fromPath = action.payload.fromPath;
        return { ...state, fromPath: fromPath };
      }
      default:
        return state;
    }
  }
);

export const actions = {
  setLoading: (isLoading) => ({
    type: actionTypes.SetLoading,
    payload: { isLoading },
  }),
  setPageLoading: (isPageLoading) => ({
    type: actionTypes.SetPageLoading,
    payload: { isPageLoading },
  }),
  setFromPath: (fromPath) => ({
    type: actionTypes.SetFromPath,
    payload: { fromPath },
  }),
};
