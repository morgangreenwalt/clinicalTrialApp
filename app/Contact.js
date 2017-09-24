import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Hero from "./Hero";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Login from "./Login";
import Header from "./Header";
import Container from './Container';

export default class Contact extends Component {  
    constructor(props){
        super(props)
    }

    render() {

        return (
      <View style={styles.container}>
        <Header/>
          <View style={styles.wrapper}>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Name" 
                placeholderTextColor="#FFF"
                style={styles.input} 
              />
            </View>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Email" 
                placeholderTextColor="#FFF"
                style={styles.input} 
              />
            </View>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Topic" 
                style={styles.input} 
                secureTextEntry 
              />
            </View>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Question" 
                style={styles.input} 
                secureTextEntry 
              />
            </View>

            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableOpacity>

          </View>
          <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    wrapper: {
      paddingVertical: 30,
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: "#CCC"
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      height: 20,
      width: 20,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: "#FF3366",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
    },
    forgotPasswordText: {
      color: "#D8D8D8",
      backgroundColor: "transparent",
      textAlign: "right",
      paddingRight: 15,
    },
    signupWrap: {
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    accountText: {
      color: "#D8D8D8"
    },
    signupLinkText: {
      color: "#FFF",
      marginLeft: 5,
    }
  });