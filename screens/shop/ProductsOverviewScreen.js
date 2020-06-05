import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/shop/Product';
import { addToCart } from '../../store/actions/cart';

const ProductsOverviewScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <Product
          data={itemData.item}
          onViewDetails={() => {
            navigation.navigate('ProductDetail', { product: itemData.item });
          }}
          onAddToCart={() => dispatch(addToCart(itemData.item))}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
