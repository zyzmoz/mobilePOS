import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Alert, TextInput, Text } from 'react-native';
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
  const [table, setTable] = useState('');
  const [card, setCard] = useState('');

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
      { cancelable: false }
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
      { cancelable: false }
    );
  }

  const handleOrderCompletion = async () => {
    await completeOrder(card, table);
    props.navigation.navigate('Order', { isRoot: true });

  }

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => props.navigation.navigate('Order')}
      />
      <View style={styles.orderBy}>
        <View style={styles.inputContainer}>
          <Text>Card</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Card" 
            keyboardType="number-pad"
            value={card}
            onChangeText={text => setCard(text)}
            />
        </View>
        <View style={styles.inputContainer}>
          <Text>Table</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Table"
            keyboardType="number-pad"
            value={table}
            onChangeText={text => setTable(text)}
            />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => <CartItem item={item} index={index} removeProduct={handleProductRemoval} />}
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
            onPress={() => handleOrderCompletion()}
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
  orderBy: {
    display: 'flex',    
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  inputContainer: {
    width: '48%'
  },
  input: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 20,
    marginBottom: 15
  },
  buttonSet: {
    width: '100%',
  },
  button: {
    marginBottom: 8
  }
});

export default connect(mapState, actions)(Cart);

