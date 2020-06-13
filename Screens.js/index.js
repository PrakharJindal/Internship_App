import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import CalendarScreen from './Calendar';
import SignUpStep1Screen from './SignUpStep1Screen';
import SignUpStep2Screen from './SignUpStep2Screen';
import SignUpStep3Screen from './SignUpStep3Screen';
import Question1Screen from './Question1Screen';
import Question1Screen2 from './Question1Screen2';
import Question2Screen from './Question2Screen';
import Question3Screen from './Question3Screen';
const Stack = createStackNavigator();

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Question1Screen" component={Question1Screen} /> */}
        {/* <Stack.Screen name="Question1Screen2" component={Question1Screen2} /> */}
        {/* <Stack.Screen name="Question2Screen" component={Question2Screen} /> */}
        <Stack.Screen name="Question3Screen" component={Question3Screen} />
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="SignUpStep1Screen" component={SignUpStep1Screen} />
        <Stack.Screen name="SignUpStep2Screen" component={SignUpStep2Screen} />
        <Stack.Screen name="SignUpStep3Screen" component={SignUpStep3Screen} /> */}
      </Stack.Navigator>
    );
  }
}

export default index;
