import {
  CREATE,
  DELETE,
  FETCH_ALL_USER_ARTICLES,
  PIN_ARTICLE,
} from "../constants/actionTypes";

export default (userArticles = [], action) => {
  switch (action.type) {
    case CREATE:
      return [action.payload,...userArticles];
    case DELETE:
      return userArticles.filter((article) => article.id !== action.payload);
    case FETCH_ALL_USER_ARTICLES: 
      return action.payload;
    case PIN_ARTICLE:
      return [...action.payload]
    default:
      return userArticles;
  }
};
