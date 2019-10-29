import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { sellProduct } from '../actions/cart';
import FormButton from '../components/FormButton';

const mapState = (state) => ({
  product: state.cart.product,
  
});

const actions = {
  sellProduct,
}


const ProductOptions = (props) => {
  const { navigation, product, sellProduct } = props;
  const [quantity, setQuantity] = useState('1');
  const [note, setNote] = useState('');

  const handleCancel = () => {
    navigation.goBack();
  }

  handleConfirmation = () => {    
    sellProduct({...product, quantity});
    navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Quantity</Text>
        <TextInput 
          style={styles.input} 
          defaultValue="1" 
          value={quantity} 
          keyboardType="numeric" 
          onChangeText={text => setQuantity(text)}
          selectTextOnFocus
        />
        <Text>Notes</Text>
        <TextInput 
          style={styles.textArea} 
          defaultValue="" 
          value={note}           
          onChangeText={text => setNote(text)}          
          multiline
          numberOfLines={9}

        />
      </View>
      <View style={styles.buttonSet}>
        <FormButton
          style={styles.button}
          buttonType='outline'
          onPress={() => handleCancel()}
          title='Cancel'
          buttonColor='#d8737F'
        />

        <FormButton
          style={styles.button}
          buttonType='outline'
          onPress={() => handleConfirmation()}
          title='Confirm'
          buttonColor='#8cc152'
        />
      </View>


    </View>

  );
};

ProductOptions.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title')
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
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
  textArea: {
    textAlignVertical: 'top',
    height: 150,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 20,
    marginBottom: 15

  },
  buttonSet: {
    // position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0
  },
  button: {

    marginBottom: 8
  }
})

export default connect(mapState, actions)(ProductOptions);