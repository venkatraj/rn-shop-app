const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case 'PLACE_ORDER':
      return [...state, action.order];
    default:
      return state;
  }
};
