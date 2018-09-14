import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import rootReducer from './configureReducers';

const axiosClient = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2',
  responseType: 'json',
});

export default () => {
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigation
  );
  return createStore(
    rootReducer,
    applyMiddleware(
      axiosMiddleware(axiosClient),
      // logger,
      navigationMiddleware,
      thunk
    )
  );
};
