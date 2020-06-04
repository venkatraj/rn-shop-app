import PRODUCTS from '../../data/dummy-data';

const productsReducer = (state = PRODUCTS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
