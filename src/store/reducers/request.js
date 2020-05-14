/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import produce from "immer";

export const request = produce(
  (draft, { type, payload = null }) => {
    switch (type) {
      case "WAITING":
        draft.waiting = payload;
      case "FAILED":
        draft.error = payload;
    }
  },
  { waiting: false, error: false }
);
