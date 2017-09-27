import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Hero from "./Hero";
import Footer from "./Footer";
import Faq from "./FAQ";
import Header from "./Header";
import Container from './Container';

export default class Login extends Component {  
    constructor(props){
        super(props)
        this.state = {
          username: 'Username',
          password: 'Password'
        };
    }

    render() {

        return (
      <View style={styles.container}>
          <Header/>
          <View style={styles.wrapper}>

            <View style={styles.inputWrap}>
              <TextInput 
                placeholder="Username" placeholderTextColor="#C0C0C0" style={styles.input} onChangeText={(username) => this.setState({username})} value={this.state.username}
              />
            </View>

            <View style={styles.inputWrap}>
              <TextInput 
              placeholder="Username" placeholderTextColor="#C0C0C0" style={styles.input} onChangeText={(password) => this.setState({password})} value={this.state.password} secureTextEntry 
              />
            </View>

            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.signupLinkText}>Don't have an account? Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
      borderBottomColor: "#CCC",
      marginLeft: 30,
      marginRight: 30,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      // color: "#000",
    },
    button: {
      backgroundColor: '#8DC73F',
      // borderColor: "#8DC73F",
      // borderWidth: 4.5,
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 30,
    },
    buttonText: {
      color: "#FFF",
      // color: "#000",
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
      color: "#D8D8D8",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    signupLinkText: {
      color: "#000",
      marginLeft: 5,
    }
  });