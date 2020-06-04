import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailScreen = (props) => {
  const { route, navigation } = props;
  const { title } = route.params.product;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
