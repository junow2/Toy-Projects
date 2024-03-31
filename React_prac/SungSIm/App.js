import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Shop from './src/Shop';
import Home from './src/Home';

const Stack = createStackNavigator(); 

const App = () => {
  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name = "Home" component={Home}></Stack.Screen>
            <Stack.Screen name = "Shop" component={Shop}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;