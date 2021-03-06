import axios from "axios";
import * as actions from "../apiActions";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const { url, data, onError, onSuccess, onStart, methode } = action.payload;
    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        methode,
        data,
      });
      //General
      dispatch(actions.apiCallSuccess(response.data));
      //Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      //General
      dispatch(actions.apiCallFailed(error.message));
      //Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };
export default api;
