import React from 'react';
import { View, StyleSheet } from 'react-native';
import { selectProduct } from '../actions/cart';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';


const mapState = (state) => ({  
  product: state.cart.product,
  products: state.product.products,
  group: state.product.group
});

const actions = {
  selectProduct
}

const Products = (props) => {
  const { selectProduct, navigation, products } = props;  

  const handleProductSelection = (product) => {
    selectProduct(product);    
    navigation.navigate('ProductOptions', {title: product.description});
  }

  return (
    <View style={styles.container}>
      <ProductList products={products} selectProduct={handleProductSelection} />
    </View>
  );
};

Products.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title')
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  }

})

export default connect(mapState, actions)(Products);