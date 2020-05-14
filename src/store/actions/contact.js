import * as actionType from "./actionTypes";

export const createContact = (data) => {
  return {
    type: actionType.createContact,
    HTTP_ACTION: {
      url: "/api/contacts",
      method: "post",
      data,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: actionType.deleteContact,
    HTTP_ACTION: {
      url: `/api/contacts/${id}`,
      method: "delete",
    },
  };
};
export const updateContact = ({ id, data }) => {
  return {
    type: actionType.updateContact,
    HTTP_ACTION: {
      url: `/api/contacts/${id}`,
      method: "put",
      data,
    },
  };
};
export const getContactById = (id) => {
  return {
    type: actionType.getContactById,
    HTTP_ACTION: {
      url: `/api/contacts/${id}`,
      method: "get",
    },
  };
};
