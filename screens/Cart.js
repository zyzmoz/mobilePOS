import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';

const mapState = (state) => ({
  products: state.cart.products
})

const Cart = (props) => {
  const { products } = props;
  console.log('props', props)
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => props.navigation.navigate('Order')}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={({ }, index) => index.toString()}
      />

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

export default connect(mapState)(Cart);//withCartHOC(Cart);

