/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import produce from "immer";

export const poll = produce(
  (draft, { type, payload = null }) => {
    switch (type) {
      case "ADD_POLL_RECEIVED":
        draft.polls.push(payload);
      case "GET_POLL_BY_ID_RECEIVED":
        draft.currentPoll = payload;
      case "GET_DISTRIBUTION_RECEIVED":
        draft.currentPollDistribution = payload;
      case "CASTE_VOTE_RECEIVED":
        draft.currentPollDistribution = payload;

      // case "VOTE_POSSIBLE_RECEIVED":
      //   draft;
    }
  },
  { polls: [], currentPoll: {}, currentPollDistribution: {} }
);
