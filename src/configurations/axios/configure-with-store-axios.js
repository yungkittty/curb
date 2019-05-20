import _ from "lodash";
import axios from "axios";
import { signInActions } from "../../datas/sign-in";

// https://github.com/yungkittty/curb-api/tree/documentation-api-13

const configureWithStoreAxios = ({ dispatch }) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  axios.interceptors.response.use(
    response => response,
    error => {
      const { status, data: { code: errorCode = "UNKNOWN" } = {} } = (error || {}).response || {} || {};
      if (_.includes([400, 403], status) && _.includes(errorCode, "ACCOUNTS_TOKEN_"))
        dispatch(signInActions.signOutSuccess());
      return Promise.reject(error);
    }
  );
};

export default configureWithStoreAxios;
