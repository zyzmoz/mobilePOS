import React from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';

const mapState = (state) => ({
  products: state.cart.products,
});

const Cart = (props) => {
  const { products } = props;
  console.log('Cart', products);


  
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem= {({item}) => <CartItem item={item}/>}
        keyExtractor={({}, index) => index.toString()}
        
      />
          
    </View>
  );
};

const CartItem = ({item, deleteProduct}) => {
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

export default connect(mapState)(Cart);