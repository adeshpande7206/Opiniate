import * as actionType from "./actionTypes";

export const createPoll = (data) => {
  return {
    type: actionType.createPoll,
    HTTP_ACTION: {
      url: "/api/polls",
      method: "post",
      data,
    },
  };
};

export const getPollById = (id) => {
  return {
    type: actionType.getPollById,
    HTTP_ACTION: {
      url: `/api/polls/${id}`,
      method: "get",
    },
  };
};
export const getPollDistribution = (id) => {
  return {
    type: actionType.getPollDistribution,
    HTTP_ACTION: {
      url: `/api/polls/distribution/${id}`,
      method: "get",
    },
  };
};
export const votePossible = ({ pollId, voterId }) => {
  return {
    type: actionType.votePossible,
    HTTP_ACTION: {
      url: `/api/polls/vote/${pollId}/${voterId}`,
      method: "get",
    },
  };
};
export const casteVote = ({ pollId, voterId, option }) => {
  return {
    type: actionType.casteVote,
    HTTP_ACTION: {
      url: `/api/polls/vote/${pollId}/${voterId}`,
      method: "post",
      data: option,
    },
  };
};
