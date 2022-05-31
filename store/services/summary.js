import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const URL = `${publicRuntimeConfig.API_URL}`;

export function getLookingForwardByAdjust(data) {
  return axios.post(`${URL}/summaryReport/getLookingForwardByAdjust`, data);
}

export function getLookingForwardByIRAdjust(data) {
  return axios.post(`${URL}/summaryReport/getLookingForwardByIRAdjust`, data);
}

export function getLookingForwardByModel(data) {
  return axios.post(`${URL}/summaryReport/getLookingForwardByModel`, data);
}

export function getPerformanceReport(data) {
  return axios.post(`${URL}/summaryReport/getPerformanceReport`, data);
}