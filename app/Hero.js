import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';

// Importing components
import Nav from "./Nav";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Watching from "./Watching";
import Results from "./Results";

export default class Hero extends Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <Grid>
                <Row>
                    <View styles={styles.faqHero}></View>
                    <Text h2 styles={styles.faqTitle}>Frequenty Asked Questions</Text>

                    <Text styles={styles.faqCopy}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text> 
                </Row> 
            </Grid>            
        )
    }
}

const styles = StyleSheet.create({
    faqHero: {
        backgroundImage: url("https://pixnio.com/free-images/2017/03/25/2017-03-25-09-30-39.jpg"),
        height: 300,
        opacity: .6,
        marginTop: -90,
        color: '#000'
    },
    
    faqCopy: {
        color: '#000',
        position: 'absolute',
        left: '100',
        top: '140',
        right: 100
    },

    faqTitle: {
        color: '#000',
        position: 'absolute',
        left: 250,
        top: 40,
        fontSize: 50
    }
});