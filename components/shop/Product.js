import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const Product = (props) => {
  const { title, imageUrl, price } = props.data;
  const { onViewDetails, onAddToCart } = props;

  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="View Details"
          onPress={onViewDetails}
        />
        <Button color={Colors.primary} title="To Cart" onPress={onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    height: 300,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    height: '60%',
    width: '100%',
  },
  details: {
    height: '15%',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '25%',
  },
});

export default Product;
