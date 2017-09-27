import React, { Component } from 'react';
import { View, Text, Image, Picker, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Platform } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
const Item = Picker.Item;

import Container from './Container';
import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';

export default class Faq extends Component {
    constructor(props){
        super(props)
        this.state = {
            faqTopic: '',
            search: '',
            color: 'red',
            mode: Picker.MODE_DIALOG,
          };
          onValueChange: this.onValueChange
    }

    render() {
     return (
        <ScrollView> 
            <Header style={{height: 200}}/>
           
            <View style={styles.faq}>

            <View syle={{flexDirection: 'row', flex: 1}}>
                <Text style={{color: '#C0C0C0', alignItems: "center"}}>Filter by Topic</Text>
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

            <View syle={{flexDirection: 'row', flex: 1}}>
                  <View style={styles.questions}>
                        <View syle={{flexDirection: 'row', flex: 1}}>   
                          <Text h3 style={styles.question}>Questions</Text>

                          <Text style={styles.answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                          <Text h4 style={styles.question}>Questions</Text>

                          <Text style={styles.answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                      </View>
                  </View>    
              </View>
            </View>

            <View syle={{flexDirection: 'row', flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                <View style={{position: 'absolute', top: 0, left: 0, backgroundColor: '#8DC73F', width: '100%', height: '100%'}} >
                </View>

                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', marginTop: 50, marginBottom: 50}}>
                    <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 20}}>
                        {"Can't Find Your Answer?"}
                    </Text>
                    <TouchableOpacity activeOpacity={.5}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Contact Us</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    
        </ScrollView>
    );
  }
}

// changeMode = () => {
//     const newMode = this.state.mode === Picker.MODE_DIALOG
//         ? Picker.MODE_DROPDOWN
//         : Picker.MODE_DIALOG;
//     this.setState({mode: newMode});
//   };

//   onValueChange = (key: 'string', value: 'string') => {
//     const newState = {};
//     newState[key] = value;
//     this.setState(newState);
//   };

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
},

button: {
    backgroundColor: '#8DC73F',
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    marginLeft: 50,
    borderWidth: 2.5, 
    borderColor: '#fff',
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },

});



// <form action="/" method="POST">
// <View syle={{flexDirection: 'row', flex: 1}}>
//     <Picker style={styles.picker} selectedValue={this.state.faqTopic} onValueChange={this.onValueChange.bind(this, 'faqTopic')}  mode="dropdown">
//         <Item label="Eligibility" value="eligibility" />
//         <Item label="Recurrence" value="recurrence" />
//         <Item label="Concomitant Meds" value="concomitantMeds" />
//         <Item label="Adverse Event" value="adverseEvent" />
//         <Item label="Randomization" value="randomization" />
//         <Item label="Tumor Assessment" value="tumorAssessment" />
//         <Item label="Study Procedures" value="studyProcedures" />
//         <Item label="Study Drug" value="studyDrug" />
//         <Item label="Labs" value="labs" />
//         <Item label="Regulatory" value="regulatory" />
//         <Item label="Other" value="other" />
//         </Picker>
// </View>          
// <View syle={{flexDirection: 'row', flex: 1}}> 
//     <SearchBar lightTheme placeholder='Search Your Question Here...' onChangeText={(search) => this.setState({search})} value={this.state.search} />   
//     <TouchableOpacity onPress={this._onPressButton}>
//         <Button raised icon={{name: 'cached'}} title='Search' />
//     </TouchableOpacity>  
// </View>    
// </form>