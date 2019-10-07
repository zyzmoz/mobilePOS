import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux';

const mapState = (state) => ({
  cart: state.cart,
});

const Cart = (props) => {
  console.log('Cart', props.cart);
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

export default connect(mapState)(Cart);