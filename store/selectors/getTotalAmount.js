const getTotalAmount = (cartItems) => {
  let grandTotal = 0;
  cartItems.forEach((cart) => {
    grandTotal += cart.totalAmount;
  });
  return grandTotal;
};

export default getTotalAmount;
