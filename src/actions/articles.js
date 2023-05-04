import {
  FETCH_ALL,
  CREATE,
  DELETE,
  FETCH_ALL_USER_ARTICLES,
  PIN_ARTICLE,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles();
    dispatch({ type: FETCH_ALL, payload: data.articles });
  } catch (error) {
    console.log(error.message);
  }
};
export const getUserArticles = () => (dispatch) => {
  const userArticles = api.fetchUserArticles();
  console.log(userArticles);
  dispatch({ type: FETCH_ALL_USER_ARTICLES, payload: userArticles });
};
export const createArticle = (article) => (dispatch) => {
  try {
    const data = api.createArticle(article);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArticle = (id) => (dispatch) => {
  try {
    api.deleteArticle(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const pinArticle = (article) => (dispatch) => {
  const payload = api.pinArticle(article);
  dispatch({ type: PIN_ARTICLE, payload });
};
