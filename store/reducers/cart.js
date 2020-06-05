const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product } = action;
      let cartItem;
      if (product.id in state) {
        cartItem = state[product.id];
        const { id, quantity, title, price, totalAmount } = cartItem;
        cartItem = {
          id,
          quantity: quantity + 1,
          title: title,
          price: price,
          totalAmount: totalAmount + price,
        };
      } else {
        cartItem = {
          id: product.id,
          quantity: 1,
          title: product.title,
          price: product.price,
          totalAmount: product.price,
        };
      }
      return {
        ...state,
        [product.id]: cartItem,
      };
    default:
      return state;
  }
};

export default cartReducer;
