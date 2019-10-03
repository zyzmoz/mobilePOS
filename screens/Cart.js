import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      
      <Text>Hello Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  },
  
});

export default Cart;