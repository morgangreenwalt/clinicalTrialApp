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
            <Header style={{height: 200}}/>
                <View style={styles.faq}>        
                    <View syle={{flexDirection: 'row', flex: 1}}> 
                        <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image style={styles.icon} resizeMode="contain" />
                        
                        </View>
                        <TextInput 
                        placeholder="Enter Question Here..." placeholderTextColor="#C0C0C0" style={styles.input} onChangeText={(search) => this.setState({search})} value={this.state.search}
                        />
                        </View>  
                        
                    </View> 
                    <TouchableOpacity onPress={this._onPressButton}>
                            <Button raised icon={{name: 'cached'}} title='Search' style={{marginTop: 20}}/>
                    </TouchableOpacity> 
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
    // paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
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