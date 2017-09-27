import React, { Component } from 'react';
import { View, Text, Image, Picker, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Platform } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
const Item = Picker.Item;

import Container from './Container';
import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: ''
          };
    }

    render() {
     return (
        <ScrollView> 
            <Header/>
                <View style={styles.wrapper}>
                    <View style={styles.faq}>        
                        <View syle={{flexDirection: 'row', flex: 1}}> 
                            <View style={styles.inputWrap}>
                                <TextInput placeholder="Enter Search Here..." placeholderTextColor="#C0C0C0" style={styles.input} onChangeText={(search) => this.setState({search})} value={this.state.search}/>
                            </View>  
                        </View> 
                        <TouchableOpacity activeOpacity={.5}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Search</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>    
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  questions: {
    marginTop: 20,
    marginBottom: 20
  },

  wrapper: {
    paddingVertical: 30,
  },

  answer: {
    marginBottom: 20
  },

  question: {
    marginBottom: 20
  },

contactModule: {
    backgroundColor: '#8DC73F',
    height: 300,
    marginTop: 20
},

inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: '#8DC73F',
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2.5, 
    borderColor: '#fff',
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },

faq: {
    margin: 20
},

contactText: {
    paddingTop: 80,
    paddingBottom: 20
},

a: {
    color: '#000'
},

picker: {
    width: '100%',
}

});