import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from './Screens.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.disableYellowBox = true;
  };

  render() {
    return (
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    );
  }
}

export default App;
