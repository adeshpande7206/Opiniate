/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import produce from "immer";

export const auth = produce(
  (draft, { type, payload = null }) => {
    switch (type) {
      case "IS_LOGGED_IN_RECEIVED":
        draft.isLoggedIn = payload;
      case "LOG_IN_RECEIVED": {
        draft.isLoggedIn = true;
        draft.userData = payload;
      }
      case "LOG_OUT_RECEIVED": {
        draft.isLoggedIn = false;
        draft.userData = {};
      }
      case "GET_USER_DATA_RECEIVED":
        draft.userData = payload;
    }
  },
  { isLoggedIn: false, userData: {} }
);
