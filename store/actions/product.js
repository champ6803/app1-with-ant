import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as reqAPI from "../services";
import * as page from "../reducers/page";
import * as product from "../reducers/product";

export const getProduct = (params) => async (dispatch) => {
  dispatch(page.actions.setLoading(true));
  return new Promise(async (resolve, reject) => {
    reqAPI
      .request('post', reqAPI.API_PATH.GET_PRODUCT, params)
      .then(({ data }) => {
        if (data.isSuccess == true) {
          const productData = data.data.product;
          dispatch(product.actions.setProduct(productData));
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => {
        console.log("getProduct error => ", error);
        reject(error);
      })
      .finally(() => {
        dispatch(page.actions.setLoading(false));
      });
  });
};