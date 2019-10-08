import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CartItem = ({ item, index, removeProduct }) => {
  return (
    <View style={styles.container}>
      <View style={styles.value}>
        <Text>{item.quantity}x</Text>
      </View>
      <View style={styles.description}>
        <Text>{item.description}</Text>
      </View>
      <View style={styles.value}>
        <Text>{(item.quantity * item.price).toFixed(2)}</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => removeProduct(index)}
      >
        <Ionicons name="ios-trash" size={24} color="#d8737f"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 3,
    marginVertical: 3,
    borderBottomColor: "#d6d6d6",    
    borderBottomWidth: 1
  },
  value: {
    width: '10%'
  },
  description: {
    width: '70%'
  },
  button: {
    padding: 8,    
  }


});


export default CartItem;