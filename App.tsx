import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './Components/Home/home';
import User from './Components/User/user';
import Cart from './Components/AddToCart/cart';
const App = () => {
  return (
    <View style={styles.container}>
      <Cart/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    width: '100%',
  },
});
