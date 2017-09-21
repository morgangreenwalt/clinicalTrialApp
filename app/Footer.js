import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableHighlight, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { SearchBar, Button, Grid, Col, Row } from 'react-native-elements';
   

export default class Footer extends Component {
    
      render() {
        return (
           <div className="footer">
                <footer className="footer">
                    <div className="container">
                    <div className="footerSocial">
                        <span className="title">Connect With Us</span>
                            <ul className="social-networks">
                                <li><NavLink to=""><span className="icon-twitter"></span></NavLink></li>
                                <li><NavLink to=""><span className="icon-facebook"></span></NavLink></li>
                                <li><NavLink to=""><span className="icon-instagram"></span></NavLink></li>
                                <li><NavLink to=""><span className="icon-linkedin"></span></NavLink></li>
                                <li><NavLink to=""><span className="icon-youtube"></span></NavLink></li>
                                <li><NavLink to=""><span className="icon-pinterest"></span></NavLink></li>
                            </ul>
                        <span className="copyright">&copy;Refundo, Inc.</span>
                    </div>

                    <p className="text-muted text-center">&copy; Clinical Trial App</p>
                    </div>
                </footer>
            </div>
        );
      }
    }

    const styles = StyleSheet.create({
        
    });