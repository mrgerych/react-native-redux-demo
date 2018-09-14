// @flow
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import getStore from './src/redux/configureStore';

const store = getStore();

const App = () => {
  const Navigator = require('./src/components/Navigator').default;

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
