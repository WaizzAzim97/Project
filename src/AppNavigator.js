import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screen/Splash';
import Home from './screen/Home';
import StartScreen from './screen/StartScreen';
import Login from './screen/Login';
import Register from './screen/Register';
import PackageDetails1 from './screen/PackageDetails1';
import RecList from './screen/RecList';
import HistList from './screen/HistList';
import ShopList from './screen/ShopList';
import TransportList from './screen/TransportList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="PackageDetails"
          options={{headerShown: false}}
          component={PackageDetails1}
        />
        <Stack.Screen name="RecList" component={RecList} />
        <Stack.Screen name="HistList" component={HistList} />
        <Stack.Screen name="ShopList" component={ShopList} />
        <Stack.Screen name="TransportList" component={TransportList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
