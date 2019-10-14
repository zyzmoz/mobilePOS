import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlacedOrders = () => {
  return (
    <View style={styles.container}>
      <Text>Placed Orders</Text>      
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

export default PlacedOrders;