import React from 'react';
import { Button, FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import getTotalAmount from '../../store/selectors/getTotalAmount';

const renderCartItem = (itemData) => {
  const { title, quantity, price, totalAmount } = itemData.item;
  return (
    <View style={styles.cartItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.totalAmount}>{totalAmount}</Text>
      <Ionicons name="md-trash" size={22} color="red" onPress={() => {}} />
    </View>
  );
};

const CartScreen = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  const cartItemsArray = Object.values(cartItems);
  const grandTotal = getTotalAmount(cartItemsArray);

  return (
    <View style={styles.container}>
      <View style={styles.grandTotal}>
        <Text>Grand Total: ${grandTotal.toFixed(2)}</Text>
        <Button title="Order Now" />
      </View>
      <View style={styles.cartItemsContainer}>
        <Text>Cart Items:</Text>
        <FlatList data={cartItemsArray} renderItem={renderCartItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  grandTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  cartItemsContainer: {
    marginVertical: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
  },
  title: {},
  quantity: {},
  price: {},
  totalAmount: {},
});

export default CartScreen;
