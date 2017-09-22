import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Grid, Row } from 'react-native-elements';

// Importing components
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Login from "./Login";

export default class Hero extends Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <Grid>
                <View style={{ flex: 1, backgroundColor: '#eee', }}>
                    <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} >
                        <Image style={{flex: 3, resizeMode: 'cover', opacity: .6}} source={{ uri: 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-30-39.jpg'}}/>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center',}}>
                        <Text style={{ textAlign: 'center', fontSize: 50,}}>
                            {"FAQ"}
                        </Text>
                    </View>
                </View>
                
                <Row style={1}>
                    <Text style={styles.faqCopy}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text> 
                </Row>
            </Grid>            
        )
    }
}

const styles = StyleSheet.create({
    faqHero: {
        color: '#000'
    },
    
    faqCopy: {
        color: '#000',
        fontSize: 16, 
        margin: 20
    },

    faqTitle: {
        color: '#000',
        fontSize: 30
    }
});