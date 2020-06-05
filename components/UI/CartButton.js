import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const CartButton = (props) => {
  const { onPress } = props;
  return (
    <Ionicons
      name="md-cart"
      size={22}
      color="white"
      style={{ paddingRight: 10 }}
      onPress={onPress}
    />
  );
};

export default CartButton;
