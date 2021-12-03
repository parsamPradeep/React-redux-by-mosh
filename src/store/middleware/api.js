import axios from "axios";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCallBegan") return next(action);
    const { url, data, onError, onSuccess, methode } = action.payload;

    next(action);
    try {
      const response = await axios.request({
        baseURL: "http://localhost:9000/api",
        url,
        methode,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };
export default api;
