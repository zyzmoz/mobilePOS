import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { sellProduct } from '../actions/cart';
import ProductList from '../components/ProductList';


const mapState = (state) => ({
  products: state.cart.products
});

const actions = {
  sellProduct
}

const Products = (props) => {
  const {sellProduct, navigation } = props;    
  const products = navigation.getParam('products');

  const handleSellProduct = (product) =>{
    sellProduct(product);
    //id the product has optionals push a page to select it
    //verify where to put that
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ProductList products={products} sellProduct={handleSellProduct}/>
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

export default connect(mapState, actions)(Products);