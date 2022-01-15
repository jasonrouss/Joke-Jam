import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (jokes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...jokes, action.payload];
    case UPDATE:
      return jokes.map((joke) =>
        joke._id === action.payload._id ? action.payload : joke
      );
    case DELETE:
      return jokes.filter((joke) => joke._id !== action.payload);
    default:
      return jokes;
  }
};
