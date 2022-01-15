import { FETCH_ALL, CREATE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (jokes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...jokes, action.payload];

    default:
      return jokes;
  }
};
