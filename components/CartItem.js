import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartItem = ({ item, deleteProduct }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{item.quantity}x</Text>
      </View>
      <View>
        <Text>{item.description}</Text>
      </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  },

});


export default CartItem;