import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const Products = ({ navigation }) => {
  const products = navigation.getParam('products');
  return (
    <View style={styles.container}>
      <ProductList products={products}/>
    </View>
  );
};

Products.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('group').name
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  } 

})

export default Products;