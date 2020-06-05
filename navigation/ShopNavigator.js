import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import CartButton from '../components/UI/CartButton';

const Stack = createStackNavigator();

const ShopNavigator = () => {
  const screenOptions = (props) => {
    const { navigation } = props;
    return {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: 'white',
      headerRight: () => {
        return <CartButton onPress={() => navigation.navigate('Cart')} />;
      },
    };
  };

  const homeScreenOptions = {
    title: 'All Products',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={ProductsOverviewScreen}
          options={homeScreenOptions}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={({ navigation, route }) => ({
            title: route.params.product.title,
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
