import React from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { clearCart, removeProduct, completeOrder } from '../actions/cart';
import CartItem from '../components/CartItem';
import FormButton from '../components/FormButton';

const mapState = (state) => ({
  products: state.cart.products
});

const actions = {
  clearCart,
  removeProduct,
  completeOrder
}

const Cart = (props) => {
  const { products, clearCart, removeProduct, completeOrder } = props;

  const handleClearCart = () => {
    Alert.alert(
      'Alert',
      'Do really you want to empty the cart?',
      [
        {
          text: 'Yes',
          onPress: () => clearCart()
        },
        { text: 'No', style: 'cancel', onPress: () => console.log('cancelled') }
      ],
      {cancelable: false}
    );
  }

  const handleProductRemoval = (index) => {    
    Alert.alert(
      'Alert',
      'Do really you want to remove this product?',
      [
        {
          text: 'Yes',
          onPress: () => {
            removeProduct(index);            
          }
        },
        { text: 'No', style: 'cancel', onPress: () => console.log('cancelled') }
      ],
      {cancelable: false}
    );
  }

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => props.navigation.navigate('Order')}
      />
      <FlatList
        data={products}
        renderItem={({ item, index }) => <CartItem item={item} index={index} removeProduct={handleProductRemoval}/>}
        keyExtractor={({ }, index) => index.toString()}
      />

      {products &&
        <View style={styles.buttonSet}>
          <FormButton
            style={styles.button}
            buttonType='outline'
            onPress={() => handleClearCart()}
            title='Cancel'
            buttonColor='#d8737F'
          />

          <FormButton
            style={styles.button}
            buttonType='outline'
            onPress={() => completeOrder()}
            title='Confirm'
            buttonColor='#8cc152'
          />
        </View>
      }


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
  buttonSet: {
    width: '100%',
  },
  button: {

    marginBottom: 8
  }

});

export default connect(mapState, actions)(Cart);

