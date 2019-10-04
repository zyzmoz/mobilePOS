import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FormButton from './FormButton';

const ProductList = ({products, selectProduct}) => {
  return (
    <View style={styles.container}>
      {products && products.map((product, i) =>
        <View key={i} style={styles.item}>
          <View style={styles.description}>
            <Text style={{fontSize: 18}}>{product.description}</Text>
            <Text>{product.price.toFixed(2)}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <FormButton
              buttonType='outline'
              onPress={() => selectProduct(product)}
              title='Add'
              buttonColor='#039BE5'
              // disabled={!isValid || isSubmitting}
              // loading={isSubmitting}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6'
  },
  description: {
    display: 'flex',    
    width: '75%'
  },
  buttonContainer:{
    width: '25%',    
  }
})



export default ProductList;