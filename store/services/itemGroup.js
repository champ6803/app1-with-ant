import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const URL = `${publicRuntimeConfig.API_URL}`;

export function getItemGroupByfilter(data) {
  return axios.post(`${URL}/itemGroup/getItemGroupByfilter`, data);
}

export function saveItemGroup(data) {
  return axios.post(`${URL}/itemGroup/saveItemGroup`, data);
}

export function checkItemGroupMapping(data) {
  return axios.post(`${URL}/itemGroup/checkItemGroupMapping`, data);
}

export function cloneItemGroupByfilter(data) {
  return axios.post(`${URL}/itemGroup/cloneItemGroupByfilter`, data);
}
