import axios from "axios";

let userLoginToken = "Bearer" + " " + localStorage.getItem("user-login-jwt");
const headerConfig = {
  headers: {
    "Content-Type": "application/json",
    authorization: userLoginToken
  }
};
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const productApi =
  "http://gateway.och.40.122.144.129.nip.io/services/product/api/";

export const productDataService = {
  getAllProducts: async () => {
    let callAPI = await axios.get(
      proxyurl + productApi + "/products",
      headerConfig
    );
    return callAPI;
  }
};
