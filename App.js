import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ShopNavigator from './navigation/ShopNavigator';

const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
