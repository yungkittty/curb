import _ from "lodash";
import axios from "axios";
import { signInActions } from "../../datas/sign-in";

// https://github.com/yungkittty/curb-api/tree/documentation-api-13

const configureWithStoreAxios = ({ dispatch }) => {
  axios.defaults.baseURL = "https://api.redux.curb-app.com";
  axios.interceptors.response.use(
    response => response,
    error => {
      const {
        status,
        data: { code }
      } = error.response;
      if (_.includes([400, 403], status) && _.includes(code, "ACCOUNTS_TOKEN_"))
        dispatch(signInActions.signOutSuccess());
      return Promise.reject(error);
    }
  );
};

export default configureWithStoreAxios;
