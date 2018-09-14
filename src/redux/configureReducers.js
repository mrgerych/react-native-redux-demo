import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import userSession from './userSession/userSession';
import questions from './questions/questions';
import { AppNavigator } from './navigation/navigation';

const navigation = createNavigationReducer(AppNavigator);

export default combineReducers({ questions, userSession, navigation });
