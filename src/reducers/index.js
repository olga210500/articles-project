import { combineReducers } from 'redux';

import articlesReducer from './articles';
import userArticles from './userArticles';
export const reducers = combineReducers({ articles: articlesReducer,userArticles });
