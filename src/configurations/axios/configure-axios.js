import _ from "lodash";
import axios from "axios";
import { signInActions } from "../../datas/sign-in";

// https://github.com/yungkittty/curb-api/tree/documentation-api-13

const configureAxios = ({ dispatch }) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.interceptors.response.use(response => {
    const { status, data: { code } } = response;
    if ((status === 400 || status === 403) && _.includes(code, "TOKEN")) {
      dispatch(signInActions.signOutSuccess());
    }
    return response;
  });
};

export default configureAxios;
