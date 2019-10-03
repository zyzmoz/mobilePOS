import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '../screens/Home'
import Products from '../screens/Products'
import Cart from '../screens/Cart';
import { Ionicons } from '@expo/vector-icons';


const OrderNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Products: { screen: Products }
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

const AppNavigation = createMaterialBottomTabNavigator({
  Order: { screen: OrderNavigation },
  Cart: { screen:  CartNavigation}

},{
  initialRouteName: 'Order',
    activeColor: '#FCB880',
    inactiveColor: '#999',
    barStyle: { backgroundColor: '#475c7a' },
    defaultNavigationOptions: ({navigation}) =>({      
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
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      // 
    })
      

      
    
  // defaultNavigationOptions: ({navigation}) => ({
  //   tabBarIcon: () => {
  //     const { routeName } = navigation.state;
  //     let IconComponent = Ionicons;
  //     let iconName;
  //     if (routeName === 'Order') {
  //       iconName = `ios-clipboard`;//${focused ? '' : '-outline'}`;
  //       // Sometimes we want to add badges to some icons.
  //       // You can check the implementation below.
  //       // IconComponent = HomeIconWithBadge;
  //     } else if (routeName === 'Cart') {
  //       iconName = `ios-cart`;
  //     }

  //     // You can return any component that you like here!
  //     return <IconComponent name={iconName} size={25} />;
  //   },    
  // })
})

export default AppNavigation
