/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {Button} from 'native-base';
import Svg, {Path} from 'react-native-svg';

class Question2Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
    };
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }

  pressbtn = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <RadialGradient
          style={{width: '100%', height: 'auto', zIndex: 0, flex: 1}}
          colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
          stops={[0.0, 0.2, 0.75]}
          center={[130, 100]}
          radius={200}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Button
              hasText
              style={{
                width: '22%',
                height: 47,
                backgroundColor: 'rgba(2, 126, 151, 0.21)',
                elevation: 0,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 15,
              }}>
              <Text
                style={{
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'rgba(255, 255, 255, 0.79)',
                }}>
                SKIP
              </Text>
            </Button>
            <Image
              style={{
                marginLeft: 'auto',
                marginRight: 30,
              }}
              resizeMode="contain"
              source={require('../assets/pic3.png')}
            />
          </View>
          <Text style={styles.QuesStyle}>
            How are you related to the patient?
          </Text>
          <TextInput
            placeholder="Type here"
            value=""
            style={styles.InputStyle}
          />
          <Text style={styles.QuesStyle}>
            Where can this provider call you for follow-up, If needed?
          </Text>
          <TextInput
            placeholder="Contact Number"
            value=""
            style={styles.InputStyle}
          />
          <Text style={styles.QuesStyle}>
            Invite guest(s) to join your visit?
          </Text>
          <TextInput
            placeholder="Optional"
            value=""
            style={styles.InputStyle}
          />

          <View style={styles.nextBtn}>
            <Svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M2 2L11 11L2 20"
                stroke="white"
                stroke-opacity="0.56"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <Svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M2 2L11 11L2 20"
                stroke="white"
                stroke-opacity="0.82"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <View style={{width: '80%', alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, color: '#FFFFFF'}}>Questions 1/5</Text>
            <View style={{marginTop: 15, flexDirection: 'row'}}>
              <View
                style={{height: 5, width: '20%', backgroundColor: '#027E97'}}
              />
              <View
                style={{height: 5, width: '80%', backgroundColor: '#D5E9F4'}}
              />
            </View>
          </View>
        </RadialGradient>
      </View>
    );
  }
}

export default Question2Screen;

const styles = StyleSheet.create({
  QuesStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    width: '100%',
    paddingHorizontal: '15%',
    color: '#027E97',
    textAlign: 'left',
    marginTop: 20,
  },
  InputStyle: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '70%',
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  nextBtn: {
    width: 42,
    height: 42,
    backgroundColor: '#027E97',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: '10%',
  },
});
