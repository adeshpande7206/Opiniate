/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import produce from "immer";

export const contact = produce((draft, { type, payload = null }) => {
  switch (type) {
    case "CREATE_CONTACT_RECEIVED":
      draft.push(payload);
    case "DELETE_CONTACT_RECEIVED":
      draft.filter((contact) => contact.id !== payload.id);
    case "UPDATE_CONTACT_RECEIVED":
      draft[draft.findIndex((contact) => contact.id === payload.id)] = payload;
  }
}, []);
