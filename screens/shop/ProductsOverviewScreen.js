import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';

const ProductsOverviewScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <Product
          data={itemData.item}
          onViewDetails={() => {
            navigation.navigate('ProductDetail', { product: itemData.item });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
