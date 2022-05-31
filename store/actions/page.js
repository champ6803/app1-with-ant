import _ from "lodash";
import swal from "sweetalert";
import Router from "next/router";
import * as page from "../reducers/page";
import * as reqAPI from "../../store/services";

const { actions } = page;

export const setLoading = (isLoading) => (dispatch) => {
  dispatch(actions.setLoading(isLoading));
};

export const setFromPath = (fromPath) => (dispatch) => {
  dispatch(actions.setFromPath(fromPath));
};