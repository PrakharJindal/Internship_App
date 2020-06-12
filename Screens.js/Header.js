/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Header, Right, Left, Body} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          style={{backgroundColor: '#00000000', elevation: 0}}
          androidStatusBarColor="transparent">
          <Left>
            <Ionicons
              name="ios-arrow-back"
              style={{marginLeft: 10}}
              size={30}
              color="#027E97"
            />
          </Left>
          <Body />
          <Right style={{flexDirection: 'column'}}>
            <Svg
              width="13"
              height="5"
              viewBox="0 0 13 4"
              fill="none"
              style={{
                borderColor: '#027E97',
                borderWidth: 2,
                borderRadius: 3,
                marginBottom: 3,
              }}>
              <Path
                d="M2.40723 1.89282H10.5516"
                stroke="#027E97"
                stroke-strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Svg
              width="23"
              height="5"
              viewBox="0 0 23 4"
              fill="none"
              style={{
                borderColor: '#027E97',
                borderWidth: 2,
                borderRadius: 3,
                marginBottom: 3,
              }}>
              <Path
                d="M1.89111 2.10254H21.4377"
                stroke="#027E97"
                stroke-strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Svg
              width="12"
              height="5"
              viewBox="0 0 12 4"
              fill="none"
              style={{
                marginRight: 11,
                borderColor: '#027E97',
                borderWidth: 2,
                borderRadius: 3,
              }}>
              <Path
                d="M1.89111 2.17773H10.0355"
                stroke="#027E97"
                stroke-strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Right>
        </Header>
      </View>
    );
  }
}

export default Button;
