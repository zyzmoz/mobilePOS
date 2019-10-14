import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {getPlacedOrders} from '../actions/cart';
import moment from 'moment';

const mapState = (state) => ({
  orders: state.cart.orders
});

const actions = {
  getPlacedOrders
}

const PlacedOrders = (props) => {
  const { orders } = props;
  useEffect(() => {
    props.getPlacedOrders();
  }, [])
  console.log('Orders,', orders)
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}       
        renderItem={({ item, index }) => <Text>{moment(item.createdAt.toDate()).format('DD/MM/YYYY hh:mm:ss')} - Card:{item.card} - Table:{item.table} - Total:{item.total.toFixed(2)}</Text>}
        keyExtractor={({ }, index) => index.toString()}   


      />
    </View>
  );
};

PlacedOrders.navigationOptions = {
  title: 'Placed Orders',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  },
});

export default connect(mapState,actions)(PlacedOrders);