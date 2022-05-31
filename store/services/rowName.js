import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const URL = `${publicRuntimeConfig.API_URL}`;

export function getItemGroupRowName(data) {
  return axios.post(`${URL}/rowName/getItemGroupRowName`, data);
}

export function getRowNameByFilter(data) {
  return axios.post(`${URL}/rowName/getRowNameByFilter`, data);
}

export function saveItemGroupRowName(data) {
  return axios.post(`${URL}/rowName/saveItemGroupRowName`, data);
}