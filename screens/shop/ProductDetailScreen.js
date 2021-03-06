import React from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { addToCart } from '../../store/actions/cart';

const ProductDetailScreen = (props) => {
  const { route } = props;
  const { imageUrl, price, description } = route.params.product;
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add To Cart"
          onPress={() => dispatch(addToCart(route.params.product))}
        />
      </View>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  actions: {
    marginVertical: 20,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
  },
});

export default ProductDetailScreen;
