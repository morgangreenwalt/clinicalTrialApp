import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Hero from "./Hero";
import Footer from "./Footer";
import Faq from "./FAQ";
import Login from "./Login";

export default class Header extends Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>Clinical Trial</Text>
            </View>          
        )
    }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8DC73F',
    flexDirection: 'row'
  },

  headerText: {
    fontSize: 36,
    color: 'white'
  }
});