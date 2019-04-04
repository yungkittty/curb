// import _ from "lodash";
import axios from "axios";
// import { signInActions } from "../../datas/sign-in";

// https://github.com/yungkittty/curb-api/tree/documentation-api-13

const configureAxios = (/* { dispatch } */) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  /* axios.interceptors.response.use(
    response => response,
    error => {
       const {
        status,
        data: { code }
      } = error.reponse;
      if (_.includes([400, 403], status) && _.includes(code, "TOKEN")) {
        dispatch(signInActions.signOutSuccess());
        return error;
      } 
      return error;
    }
  ); */
};

export default configureAxios;
