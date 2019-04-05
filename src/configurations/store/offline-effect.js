import axios from "axios";

// https://github.com/redux-offline/redux-offline/blob/develop/docs/recipes/customize-requests.md#example-using-axios

const offlineEffect = async effect => (await axios(effect)).data;

export default offlineEffect;
