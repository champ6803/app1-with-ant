import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetProduct: "SET_PRODUCT",
};

const initialProductState = {
  product: undefined,
};

export default persistReducer(
  {
    storage,
    key: "app-product",
    whitelist: [],
  },
  (state = initialProductState, action) => {
    switch (action.type) {
      case actionTypes.SetProduct: {
        const product = action.payload.product;
        return { ...state, product };
      }
      default:
        return state;
    }
  }
);

export const actions = {
  setProduct: (product) => ({
    type: actionTypes.SetProduct,
    payload: { product },
  }),
};
