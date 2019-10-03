import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';
import { signOut, getCurrentUser } from '../actions/auth';
import ProductGroupList from '../components/ProductGroupList';


const mapState = (state) => ({
  products: state.product.products,
  groups: state.product.groups,
  user: state.auth.user
});

const actions = {
  getProducts,
  signOut,
  getCurrentUser
}


class Home extends Component {


  handleSignout = async () => {
    await this.props.signOut();
  }

  componentDidMount = async () => {
    await this.props.getCurrentUser();
    await this.props.getProducts();
  }

  openProducts = async (group) => {
    const { id } = group;
    const products = await this.props.products.filter(product => product.groupId === id);
    this.props.navigation.navigate('Products', { group, products })
  }

  render() {
    const { groups, user } = this.props;
    return (
      <ScrollView style={styles.container}>
        {user && <Text>Operator: {user.name}</Text>}
        {/* <Button 
          onPress={() => this.handleSignout()}
          title="Sign Out"
        /> */}
        <ProductGroupList groups={groups} openProducts={this.openProducts} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  },
  cartButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});

export default connect(mapState, actions)(Home);
