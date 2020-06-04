import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';

const configureStore = () => {
  return createStore(
    combineReducers({
      products: productsReducer,
      cartItems: cartReducer,
    })
  );
};

export default configureStore;
