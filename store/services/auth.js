import "isomorphic-unfetch";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const LOGIN_URL = `${publicRuntimeConfig.API_URL}/auth/loginNoAD`;
export const LOGIN_AD_URL = `${publicRuntimeConfig.API_URL}/auth/loginAD`;
export const GET_USER_INFO_URL = `${publicRuntimeConfig.API_URL}/auth/getUserInfo`;
export const GET_USER_BY_ID = `${publicRuntimeConfig.API_URL}/auth/getUserByUserId`;
export const GET_USER_BY_FILTER = `${publicRuntimeConfig.API_URL}/auth/getUserByFilter`;
export const SAVE_USER = `${publicRuntimeConfig.API_URL}/auth/saveUser`;

export const login = async (params) => {
  return await axios.post(LOGIN_URL, params);
};

export const loginAD = async (params) => {
  return await axios.post(LOGIN_AD_URL, params);
};

export const getUserInfo = async (params) => {
  return await axios.post(GET_USER_INFO_URL, params);
};

export const getUserByUserId = async (params) => {
  return await axios.post(GET_USER_BY_ID, params);
};

export const getUserByFilter = async (params) => {
  return await axios.post(GET_USER_BY_FILTER, params);
};

export const saveUser = async (params) => {
  return await axios.post(SAVE_USER, params);
};

export function getRoleByFilter(data) {
  return axios.post(
    `${publicRuntimeConfig.API_URL}/auth/getRoleByFilter`,
    data
  );
}

export function saveRolePermission(data) {
  return axios.post(
    `${publicRuntimeConfig.API_URL}/auth/saveRolePermission`,
    data
  );
}

export function getRoleFunctionByRoleId(data) {
  return axios.post(
    `${publicRuntimeConfig.API_URL}/auth/getRoleFunctionByRoleId`,
    data
  );
}

