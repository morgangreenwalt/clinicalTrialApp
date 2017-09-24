
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
import HTMLView from 'react-native-htmlview';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

// Importing components
import Footer from "./Footer";
import Faq from "./FAQ";
import Hero from "./Hero";
import Login from "./Login";
import Header from "./Header";
import SignUp from "./SignUp";
import Contact from "./Contact";
import Search from "./Search";
import Router from './router';

const stackNavigator = StackNavigator({
  SignUp: { screen: SignUp },
  Login: { screen: Login },
  FAQ: { screen: Faq },
  Contact: { screen: Contact },
  Search: { screen: Search },
}, {
  headerMode: 'none'
});

const ClinicalTrialApp = DrawerNavigator({
  Home: {
    screen: Router,
  },
  Stack: {
    screen: stackNavigator
  }
}, {
  // contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});

AppRegistry.registerComponent('clinicalTrialApp', () => ClinicalTrialApp);
