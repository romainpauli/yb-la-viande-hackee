import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://s61ca2kyrk.execute-api.eu-west-1.amazonaws.com/dev",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  hello(qui) {
    return apiClient.get("hello/" + qui);
  },
  validateSeat(seatnr) {
    return apiClient.get("validateseat/" + seatnr);
  },
  seatMap(seatnr) {
    return apiClient.get("seatmap/" + seatnr);
  },
  getWaitingTime(time) {
    return apiClient.get("waitingtime/" + time);
  }
  // createCatergoriePage(AUTH_TOKEN, data) {
  //   apiClient.defaults.headers.common.Authorization = AUTH_TOKEN;
  //   return apiClient.post("categorie", data);
  // }
};
