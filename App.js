import React, {Component} from 'react';
import CalendarScreen from './Screens.js/Calendar';
import WelcomeScreen from './Screens.js/WelcomeScreen';
import SignUpStep1Screen from './Screens.js/SignUpStep1Screen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // return <WelcomeScreen />;
    // return <CalendarScreen />;
    return <SignUpStep1Screen />;
  }
}

export default App;
