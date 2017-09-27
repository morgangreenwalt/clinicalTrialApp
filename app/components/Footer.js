import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

export default class Footer extends Component {
    
      render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>Copyright &copy;2016</Text>
            </View>
        );
      }
    }

    const styles = StyleSheet.create({
        footer: {
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000'
          },
        
          footerText: {
            color: 'white'
          }
    });