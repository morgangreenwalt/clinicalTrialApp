import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Footer from "./Footer";
import Header from "./Header";
import Container from './Container';
const Item = Picker.Item;

export default class Contact extends Component {  
    constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      topic: '',
      inquiry: '',
      faqTopic: ''
    };
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
                placeholderTextColor="#C0C0C0"
                style={styles.input} onChangeText={(name) => this.setState({name})} value={this.state.name}
              />
            </View>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Email" placeholderTextColor="#C0C0C0" style={styles.input} onChangeText={(email) => this.setState({email})} value={this.state.email}
              />
              
            </View>

            <View syle={{flexDirection: 'row', flex: 1}}>
              <Text style={{color: '#C0C0C0', marginLeft: 40, fontSize: 18, alignItems: "center", justifyContent: "center"}}>Select Topic</Text>
              <Picker style={styles.picker} selectedValue={this.state.faqTopic} onValueChange={(topic) => this.setState({faqTopic: topic})}>
                <Item label="Eligibility" value="eligibility" />
                <Item label="Recurrence" value="recurrence" />
                <Item label="Concomitant Meds" value="concomitantMeds" />
                <Item label="Adverse Event" value="adverseEvent" />
                <Item label="Randomization" value="randomization" />
                <Item label="Tumor Assessment" value="tumorAssessment" />
                <Item label="Study Procedures" value="studyProcedures" />
                <Item label="Study Drug" value="studyDrug" />
                <Item label="Labs" value="labs" />
                <Item label="Regulatory" value="regulatory" />
                <Item label="Other" value="other" />
              </Picker>
            </View> 

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#C0C0C0"
                placeholder="Enter Comments/ Questions Here..." 
                style={styles.input} onChangeText={(inquiry) => this.setState({inquiry})} value={this.state.inquiry}
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
      color: '#C0C0C0',
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