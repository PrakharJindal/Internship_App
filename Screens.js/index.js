import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import CalendarScreen from './Calendar';
import SignUpStep1Screen from './SignUpStep1Screen';
import SignUpStep2Screen from './SignUpStep2Screen';
import SignUpStep3Screen from './SignUpStep3Screen';
const Stack = createStackNavigator();

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="SignUpStep1Screen" component={SignUpStep1Screen} />
        <Stack.Screen name="SignUpStep2Screen" component={SignUpStep2Screen} />
        <Stack.Screen name="SignUpStep3Screen" component={SignUpStep3Screen} />
      </Stack.Navigator>
    );
  }
}

export default index;
