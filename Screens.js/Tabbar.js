/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('screen').width;

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{height: 50, backgroundColor: 'white', flexDirection: 'row'}}>
        <View
          style={{
            width: width / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Entypo name="home" color="#027E97" size={30} />
        </View>
        <View
          style={{
            width: width / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <EvilIcons
            name="envelope"
            color="rgba(2, 126, 151, 0.21)"
            size={30}
          />
        </View>
        <View
          style={{
            width: width / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="setting" color="rgba(2, 126, 151, 0.21)" size={30} />
        </View>
        <View
          style={{
            width: width / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Entypo name="heart" color="rgba(2, 126, 151, 0.21)" size={30} />
        </View>
      </View>
    );
  }
}

export default Tabbar;
