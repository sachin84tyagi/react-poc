import axios from "axios";

export const liveStreamVideoService = {
  liveStreamVideo: () => {
    let axiosConfig = {
      headers: {
        "Content-Type":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
      }
    };
    return axios
      .get(
        "https://ubs2syt3te.execute-api.us-east-1.amazonaws.com/prod/getlivestream",
        axiosConfig
      )
      .then(resp => {
        return resp.data;
      })
      .catch(err => {
        return err;
      });
  }
};
