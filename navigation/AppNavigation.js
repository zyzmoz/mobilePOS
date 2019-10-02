import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home'
import Products from '../screens/Products'

const AppNavigation = createStackNavigator(
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

export default AppNavigation
