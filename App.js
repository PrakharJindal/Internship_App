import React, {Component} from 'react';
import WelcomeScreen from './Screens.js/WelcomeScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <WelcomeScreen />;
  }
}

export default App;
