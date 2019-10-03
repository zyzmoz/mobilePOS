import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';
import { withFirebaseHOC } from '../config/Firebase';
import ProductGroupList from '../components/ProductGroupList';


const mapState = (state) => ({
  products: state.product.products,
  groups: state.product.groups
});

const actions = {
  getProducts
}


class Home extends Component {

  state = {
    user: {},
    groups: [],
    products: []
  }

  handleSignout = async () => {
    // try {
    //   await this.props.firebase.signOut()
    //   this.props.navigation.navigate('Auth')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  componentDidMount = async () => {
    // const user = await this.props.firebase.getCurrentUser();    
    // const groups = await this.props.firebase.getProductGroups();
    // const products = await this.props.firebase.getProducts();
    await this.props.getProducts();
    // this.setState({ groups, user, products });
  }

  openProducts = async (group) => {
    const { id } = group;
    const products = await this.state.products.filter(product => product.groupId === id);
    this.props.navigation.navigate('Products', { group, products })
  }

  render() {
    const { groups, user } = this.props;
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        {/* <Text>Operator: {user.name}</Text> */}
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
    paddingHorizontal:15,
    paddingVertical: 10,
  }
});

export default connect(mapState, actions)(Home)//withFirebaseHOC(Home)
