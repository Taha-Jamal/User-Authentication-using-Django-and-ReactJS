import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const LOGIN_URL = `${BASE_URL}token/`;
const REFRESH_URL = `${BASE_URL}token/refresh/`;
const NOTES_URL = `${BASE_URL}notes/`;
const LOGOUT_URL = `${BASE_URL}logout/`;
// const REGISTER_URL = `${BASE_URL}register/`;
// const AUTHENTICATED_URL = `${BASE_URL}authenticated/`;

export const login = async (username, password) => {
  const response = await axios.post(
    LOGIN_URL,
    { username: username, password: password },
    { withCredentials: true }
  );
  return response.data.success;
};

export const get_notes = async () => {
  try {
    const response = await axios.get(NOTES_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    return call_refresh(error, axios.get(NOTES_URL, { withCredentials: true }));
  }
};
export const refresh_token = async () => {
  try {
    await axios.get(REFRESH_URL, { withCredentials: true });
    return true;
  } catch (error) {
    return false;
  }
};

const call_refresh = async (error, func) => {
  if (error.response && error.response.status === 401) {
    const tokenRefreshed = await refresh_token();

    if (tokenRefreshed) {
      const retryResponse = await func();
      return retryResponse.data;
    }
  }
  return false;
};

export const logout =async  () => {
  try {
    await axios.post(LOGOUT_URL,{}, { withCredentials: true });
    return true;
  } catch (error) {
    return false;
  }
};