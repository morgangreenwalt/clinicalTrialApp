import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

// Importing components
import Header from "./Header";
import Footer from "./Footer";
import Faq from "./FAQ";
import Login from "./Login";
import Container from './Container';

export default class Hero extends Component {  
    constructor(props){
        super(props)
    }

    render() {

        return(
            <View style={{flex: 1}}>
                <View style={{ flexDirection: 'row', flex: 1, backgroundColor: '#eee', }}>
                    <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} >
                        <Image style={{flex: 3, resizeMode: 'cover', opacity: .6}} source={{ uri: 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-30-39.jpg'}}/>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center',}}>
                        <Text style={{ textAlign: 'center', fontSize: 50, color: '#fff'}}>
                            {"FAQ"}
                        </Text>
                    </View>
                </View>
                
                <View syle={{flexDirection: 'row', height: 100, flex: 1}}>
                    <Text style={styles.faqCopy}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text> 
                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    faqCopy: {
        color: '#000',
        fontSize: 16, 
        margin: 20
    }
});