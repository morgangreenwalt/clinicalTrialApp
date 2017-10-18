import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, ScrollView, TouchableOpacity, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Header from "./Header";
import Container from './Container';
import Add_Resource from './Add_Resource';
const Item = Picker.Item;

export default class Resources extends Component {  
    constructor(props){
    super(props)
}

    render() {

    return (
    <ScrollView>     
        <View style={styles.container}>
        <Header/>
            <View style={styles.wrapper}>
                <View syle={{flexDirection: 'row', flex: 1}}>
                    <Image style={{width: '100%', height: 200}} source={require('../assets/img/investigators_brochure.png')}/>
                    <Add_Resource resourceTitle="Investigators Brochure" resourceDesc="Treatment of patients with resected melanoma, American Joint Committee on Cancer (AJCC) stages IIB, IIC, or III, who have not received prior adjuvant therapy." cta="Download PDF"/>
                </View>
                <View syle={{flexDirection: 'row', flex: 1}}>
                    <Image style={{width: '100%', height: 200}}  source={require('../assets/img/phase_3_trial_high_risk_reoccurrence.png')}/>
                    <Add_Resource resourceTitle="Investigators Brochure" resourceDesc="Many patients with successfully resected stage IIB to III melanoma relapse after surgery. The only treatment approved by the US FDA and other international regulatory agencies for these patients has limited effectiveness and frequent toxicity." cta="Download PDF"/>
                </View> 
                <View syle={{flexDirection: 'row', flex: 1}}>
                    <Image style={{width: '100%', height: 200}} source={require('../assets/img/prohibited_mediciations_for_polynoma_protocol.png')}/>
                    <Add_Resource resourceTitle="Prohibited Medications" resourceDesc="Restricted only if administered systemically. Inhaled or topical uses are permitted. Contact the Study Monitor if there is any uncertainty regarding a medication." cta="Download PDF"/>
                </View> 
            </View>
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
      paddingVertical: 30,
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
    }
  });