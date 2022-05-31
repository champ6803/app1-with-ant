import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const URL = `${publicRuntimeConfig.API_URL}`;

export function getDataEdit(data) {
  return axios.post(`${URL}/netContribution/getDataEdit`, data);
}

export function getDataView(data) {
  return axios.post(`${URL}/netContribution/getDataView`, data);
}
export function saveDataEdit(data) {
  return axios.post(`${URL}/netContribution/saveDataEdit`, data);
}

export function checkEditIsLock(data) {
  return axios.post(`${URL}/auth/getPermissionToEdit`, data);
}

export function unlockPermissionToEdit(data) {
  return axios.post(`${URL}/auth/unlockPermissionToEdit`, data);
}