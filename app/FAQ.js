import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';
// import Picker from 'react-native-picker';

export default class FAQ extends Component {


  render() {
    return (
        <View styles={styles.faq}>
           
              <Grid>
                  <form action="/" method="POST">
                      <Row>
                          <Picker
                            selectedValue={this.state.faqTopic}
                            onValueChange={(itemValue, itemIndex) => this.setState({faqTopic: itemValue})}>
                            <Picker.Item label="Eligibility" value="eligibility" />
                            <Picker.Item label="Recurrence" value="recurrence" />
                            <Picker.Item label="Concomitant Meds" value="concomitantMeds" />
                            <Picker.Item label="Adverse Event" value="adverseEvent" />
                            <Picker.Item label="Randomization" value="randomization" />
                            <Picker.Item label="Tumor Assessment" value="tumorAssessment" />
                            <Picker.Item label="Study Procedures" value="studyProcedures" />
                            <Picker.Item label="Study Drug" value="studyDrug" />
                            <Picker.Item label="Labs" value="labs" />
                            <Picker.Item label="Regulatory" value="regulatory" />
                            <Picker.Item label="Other" value="other" />
                          </Picker>
                      </Row>

                      <Row>   
                        <SearchBar lightTheme onChangeText={someMethod}placeholder='Search Your Question Here...' />   
                        <TouchableOpacity onPress={this._onPressButton}>
                          <Button raised icon={{name: 'cached'}} title='Search' />
                        </TouchableOpacity>  
                      </Row>
                  </form>

                  <View styles={styles.questions}>
                      <Row>   
                          <Text h4 styles={styles.question}>Questions</Text>

                          <Text styles={styles.answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                          <Text h4 styles={styles.question}>Questions</Text>

                          <Text styles={styles.answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                      </Row>
                  </View>    
              </Grid>
              <Grid>
                  <Row>
                      <Text h2 styles={styles.contactText}>Can't Find Your Answer?</Text>
                      <Button raised icon={{name: 'cached'}} title='Conact Us' />
                  </Row>
              </Grid>
        </View>
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

contactText: {
    paddingTop: 80,
    paddingBottom: 20
},

contactBtn: {
    border: 2.5 'solid' '#fff'
    backgroundColor: '#8DC73F'
},

contactBtn2: {
    border: 2.5 'solid' '#000'
},

searchBtn: {
    border: 2.5 'solid' '#8DC73F',
    backgroundColor: '#fff'
},

a: {
    color: 'inherit'
}

});
