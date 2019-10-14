import React from 'react';
import { createStackNavigator, } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home'
import Products from '../screens/Products'
import Cart from '../screens/Cart';
import { Ionicons } from '@expo/vector-icons';
import ProductOptions from '../screens/ProductOptions';
import PlacedOrders from '../screens/PlacedOrders';


const OrderNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Products: { screen: Products },
    ProductOptions: { screen: ProductOptions }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Order'
    }
  }
)

const CartNavigation = createStackNavigator(
  {
    Cart: { screen: Cart },

  },
  {
    initialRouteName: 'Cart',
    defaultNavigationOptions: {
      title: 'Cart',

    }
  }
)

const PlacedOrdersNavigation = createStackNavigator(
  {
    Orders: { screen: PlacedOrders }
  }
)

const AppNavigation = createBottomTabNavigator({
  Order: {
    screen: OrderNavigation,
    navigationOptions: ({ navigation }) => {
      const isRoot = navigation.getParam('isRoot');

      console.log('isRoot', isRoot);
      if (isRoot) {
        navigation.setParams({ isRoot: null });
        navigation.navigate('Home');
      }
      return;
    }
  },
  Cart: {
    screen: CartNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: () => {
        const { routeName } = navigation.state;
        if (routeName === 'Cart')
          navigation.replace(routeName);
        // console.log('CLICK BAIT')
      }
    })
  },
  PlacedOrders: {
    screen: PlacedOrdersNavigation,
    navigationOptions: {
      title: 'Placed Orders',      
    }
    
  }

}, {
  initialRouteName: 'Order',
  activeColor: '#FCB880',
  inactiveColor: '#999',
  barStyle: { backgroundColor: '#475c7a' },


  defaultNavigationOptions: ({ navigation }) => ({

    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Order') {

        iconName = `ios-clipboard`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge;
      } else if (routeName === 'Cart') {
        iconName = `ios-cart`;
      } else if (routeName === 'PlacedOrders') {
        iconName = `ios-cube` 
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    // 
  })

})

export default AppNavigation
