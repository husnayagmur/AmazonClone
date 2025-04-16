import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../clone/redux/store';
import Home from './Components/Home/home';
import User from './Components/User/user';
import Cart from './Components/AddToCart/cart';
import Categories from './Components/Categories/categories';
import ProductList from './Components/Products/productList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="User" options={{ headerShown: false }} component={User} />
          <Stack.Screen name="Cart" options={{ headerShown: false }} component={Cart} />
          <Stack.Screen name="Categories" options={{ headerShown: false }} component={Categories} />
          <Stack.Screen name="Gida" options={{ headerShown: false }} component={ProductList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
//<NavigationContainer>
// <Stack.Navigator initialRouteName="Home">
// <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
// <Stack.Screen name="User" options={{ headerShown: false }} component={User} />
//<Stack.Screen name="Cart" options={{ headerShown: false }} component={Cart} />
// <Stack.Screen name="Categories" options={{ headerShown: false }} component={Categories} />
// </Stack.Navigator>
//  </NavigationContainer>