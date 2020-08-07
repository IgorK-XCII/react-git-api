import React, { useReducer } from 'react';
import { GitHubContext } from './gitHubContext';
import { gitHubReducer } from './gitHubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  CLEAR_USERS
} from '../types';
import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCredit = url =>
  `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export const GitHubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
    numberUsers: null
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const search = async value => {
    setLoading();
    const response = await axios.get(
      withCredit(`https://api.github.com/search/users?q=${value}&`)
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
      numberUsers: response.data.total_count
    });
  };

  const getUser = async name => {
    setLoading();

    const response = await axios.get(
      withCredit(`https://api.github.com/users/${name}?`)
    );

    dispatch({ type: GET_USER, payload: response.data });
  };

  const getRepos = async name => {
    setLoading();

    const response = await axios.get(
      withCredit(`https://api.github.com/users/${name}/repos?per_page=5&`)
    );

    dispatch({ type: GET_REPOS, payload: response.data });
  };

  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading, numberUsers } = state;

  return (
    <GitHubContext.Provider
      value={{
        search,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
        numberUsers
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
