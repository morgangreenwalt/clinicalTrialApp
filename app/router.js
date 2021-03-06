import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Navigator, NativeModules } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui';
import Container from './components/Container';

import { TabRouter } from 'react-navigation';

// Importing components
import Faq from "./components/FAQ";
import Login from "./components/Login";
import Contact from "./components/Contact";
// import Search from "./components/Search";
import SignUp from "./components/SignUp";
import Resources from "./components/Resources";


const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20
    }
  }
}

const TabRoute = TabRouter({
  SignUp: { screen: SignUp },
  Login: { screen: Login },
  Resources: { screen: Resources },
  FAQ: { screen: Faq },
  Contact: { screen: Contact }
  // Search: { screen: Search }
  }, {
    initialRouteName: 'Login',
  }
);

class TabContentNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.value.active,
    };
  }

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.active,
    }); 
  }

  render() {
    const Component = TabRoute.getComponentForRouteName(this.state.active);
    return <Component/>;
  }
}

export default class Router extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      active: 'Login',
    };
  }

  static navigationOptions = {
    title: 'Menu',
  };

  navigate() {
    this.props.navigation.navigate('DrawerOpen'); // open drawer
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />

          <TabContentNavigator value={this.state} key={this.state} />

          <BottomNavigation active={this.state.active}
            hidden={false}
            style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
          >
            <BottomNavigation.Action
              key="Login"
              icon="person"
              label="Login"
              onPress={() => this.setState({ active: 'Login' })}
            />
            <BottomNavigation.Action
              key="Resources"
              icon="bookmark"
              label="Resources"
              onPress={() => {
                this.setState({ active: 'Resources' });
              }}
            />
            <BottomNavigation.Action
              key="FAQ"
              icon="question-answer"
              label="FAQ"
              onPress={() => {
                this.setState({ active: 'FAQ' });
              }}
            />
            {/* <BottomNavigation.Action
              key="Search"
              icon="search"
              label="Search"
              onPress={() => {
                this.setState({ active: 'Search' });
              }}
            /> */}
            <BottomNavigation.Action
              key="Contact"
              icon="people"
              label="Contact"
              onPress={() => this.setState({ active: 'Contact' })}
            />
          </BottomNavigation>
        </Container>
      </ThemeProvider>
    );
  }
}