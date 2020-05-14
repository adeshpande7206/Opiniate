import * as actionType from "./actionTypes";

export const isLoggedIn = () => {
  return {
    type: actionType.isLoggedIn,
    HTTP_ACTION: {
      url: "/api/current_user",
      method: "get",
    },
  };
};

export const logOut = () => {
  return {
    type: actionType.logOut,
    HTTP_ACTION: {
      url: "/api/logout",
      method: "get",
    },
  };
};

export const getUserData = () => {
  return {
    type: actionType.getUserData,
    HTTP_ACTION: {
      url: "/api/current_user",
      method: "get",
    },
  };
};
