import axios from "axios";
let userLoginToken = "Bearer" + " " + localStorage.getItem("user-login-jwt")
const headerConfig = {
  headers: {
    "Content-Type": "application/json",
    authorization: userLoginToken
  }
};
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const racksAPI = "http://gateway.och.40.122.144.129.nip.io/services/rack/api";
export const rackDataService = {
  getAllRacks: async () => {
    let callAPI = await axios.get(
      proxyurl + racksAPI + "/racks",
      headerConfig
    )
    return callAPI;
  },
  getRackById: async (id) => {
    let callAPI = await axios.get(
      proxyurl + racksAPI + "/racks/" + id,
      headerConfig
    )
    return callAPI;
  }
};
