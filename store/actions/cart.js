const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  product,
});

const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  productId,
});

export { addToCart, removeFromCart };
