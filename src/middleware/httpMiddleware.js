import API from "../API";
const httpMiddleware = (store) => (next) => async (action) => {
  if (action["HTTP_ACTION"]) {
    const requesConfig = action["HTTP_ACTION"];

    next({ type: "WAITING", payload: true });
    next({ type: "FAILED", payload: false });

    try {
      let response = await API.request(requesConfig);
      response = await response.json();
      next({ type: "WATING", payload: false });
      next({ type: "FAILED", payload: false });
      next({ type: requesConfig.type + "_RECEIVED", payload: response });
    } catch (err) {
      next({ type: "WATING", payload: false });
      next({ type: "FAILED", payload: true });
    }
  } else {
    return next(action);
  }
};
export default httpMiddleware;
