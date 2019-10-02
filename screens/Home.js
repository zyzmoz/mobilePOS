import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { withFirebaseHOC } from '../config/Firebase';
import ProductGroupList from '../components/ProductGroupList';

class Home extends Component {  

  static navigationOptions = {
    title: 'Order'
  }
  
  state = {
    user: {},
    groups: [],
    products: []
  }

  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = async () => {
    const user = await this.props.firebase.getCurrentUser();    
    const groups = await this.props.firebase.getProductGroups();
    const products = await this.props.firebase.getProducts();
    this.setState({ groups, user, products });
  }

  openProducts = async(group) => {
    const { id } = group;    
    const products = await this.state.products.filter(product => product.groupId === id);    
    this.props.navigation.navigate('Products', {group, products})
  }

  render() {
    const { groups, user } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text>Operator: {user.name}</Text>
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
  }
});

export default withFirebaseHOC(Home)
