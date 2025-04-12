import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './Components/Home/home';
const App = () => {
  return (
    <View style={styles.container}>
      <Home/>
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
