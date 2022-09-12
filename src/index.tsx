import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main'
import AboutScreen from './screens/about'
import Sidebar from './components/sidebar'

const Drawer = createDrawerNavigator()
const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen name='Main' component={MainScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default App