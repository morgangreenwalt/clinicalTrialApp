import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, ScrollView, TouchableOpacity, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Header from "./Header";
import Container from './Container';
const Item = Picker.Item;

export default class Add_Resource extends Component {  
    constructor(props){
    super(props)
}

    render() {

    return (
    <ScrollView>     
        <View style={styles.container}>
            <View style={styles.wrapper}>
             
                <View syle={{flexDirection: 'row', flex: 1}}>
                    <Image style={{flex: 3, resizeMode: 'cover'}} source={this.props.resourceImg}/>
                </View> 

                <View syle={{flexDirection: 'row', flex: 1}}>
                    <View style={styles.resourceDetails}>
                        <Text style={styles.resourceTitle}>{this.props.resourceTitle}</Text>
                        <Text style={styles.resourceDesc}>{this.props.resourceDesc}</Text>
                    </View>
                </View> 
            </View>
            <TouchableOpacity activeOpacity={.5}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.cta}</Text>
                </View>
            </TouchableOpacity>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 1}}/>
        </View>
    </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
      wrapper: {
      paddingVertical: 10,
      paddingHorizontal: 30,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      color: '#C0C0C0',
    },
    button: {
      backgroundColor: '#8DC73F',
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 30,
      marginBottom: 30,
    },
      buttonText: {
      color: "#FFF",
      fontSize: 18,
    },
    resourceDetails: {
        // borderRadius: 4,
        // borderWidth: 1,
        // borderColor: '#000',
    },
    resourceTitle: {
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
    }
  });