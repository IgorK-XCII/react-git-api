import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS
} from "../types";

const handlers = {
  [SEARCH_USERS]: (state, { payload, numberUsers }) => ({
    ...state,
    users: payload,
    numberUsers,
    loading: false
  }),
  [GET_REPOS]: (state, { payload }) => ({
    ...state,
    repos: payload,
    loading: false
  }),
  [GET_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false
  }),
  [SET_LOADING]: state => ({ ...state, loading: true, numberUsers: null }),
  [CLEAR_USERS]: state => ({ ...state, users: [] }),
  DEFAULT: state => state
};

export const gitHubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
