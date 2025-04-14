import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppHome from './AppHome';
import Home from './Components/Home/home';
import User from './Components/User/user';
import Cart from './Components/AddToCart/cart';
import Categories from './Components/Categories/categories';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{
          headerShown: false,
        }} component={Home} />
        <Stack.Screen name="User" options={{
          headerShown: false,
        }} component={User} />
        <Stack.Screen name="Cart" options={{
          headerShown: false,
        }} component={Cart} />
        <Stack.Screen name="Categories" options={{
          headerShown: false,
        }} component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
