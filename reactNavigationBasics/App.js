/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';




const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home/',
      navigationOptions: {
        title: 'Esta es la Home'
      }
    },
    About,
    Profile,
    Login,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'Un titulo genérico',
      headerTitleAllowFontScaling: true,
      headerBackTitle: 'Atras',
      gesturesEnabled: true,
      headerBackImage: <Text>{`<=`}</Text>,
      // header: <Text style={{color: 'white'}}>esto es un header</Text>,
    },
    initialRouteKey: 'login',
    initialRouteParams: {
      nombre: 'Leonidas Esteban'
    }
  }
);

export default AppNavigator;
