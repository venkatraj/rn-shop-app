import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products';

const configureStore = () => {
  return createStore(
    combineReducers({
      products: productsReducer,
    })
  );
};

export default configureStore;
