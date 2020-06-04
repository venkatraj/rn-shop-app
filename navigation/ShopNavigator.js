import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const Stack = createStackNavigator();

const ShopNavigator = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: 'white',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
