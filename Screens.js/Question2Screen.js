/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {Button} from 'native-base';
import Svg, {Path} from 'react-native-svg';
import {TouchableHighlight} from 'react-native-gesture-handler';

class Question2Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSymptom: '',
      reasons1: ['Cough', 'Cold', 'COVID'],
      reasons2: ['Sore Throat', 'Influenza (Flu)'],
      reasons3: ['Prescription Refill', 'Urinary Tract Infection (UTI)'],
    };
  }

  pressbtn = (selectedSymptom) => {
    this.setState({selectedSymptom});
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
              source={require('../assets/pic4.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 38,
              fontWeight: 'bold',
              marginLeft: '10%',
              color: '#027E97',
            }}>
            Reason for the visit?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 20,
            }}>
            {this.state.reasons1.map((u, i) => {
              return (
                <TouchableHighlight
                  onPress={() => {
                    this.pressbtn(u);
                  }}
                  style={[
                    styles.btnStyle,
                    {
                      marginTop: 30,
                      backgroundColor:
                        this.state.selectedSymptom == u ? '#FF7A59' : '#fff',
                      width: 'auto',
                      paddingHorizontal: 25,
                    },
                  ]}>
                  <Text
                    style={{
                      width: '100%',
                      fontSize: 16,
                      color:
                        this.state.selectedSymptom == u ? '#fff' : '#027E97',
                      textAlign: 'center',
                    }}>
                    {u}
                  </Text>
                </TouchableHighlight>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 20,
            }}>
            {this.state.reasons2.map((u, i) => {
              return (
                <Button
                  onPress={() => {
                    this.pressbtn(u);
                  }}
                  style={[
                    styles.btnStyle,
                    {
                      marginTop: 30,
                      backgroundColor:
                        this.state.selectedSymptom == u ? '#FF7A59' : '#fff',
                      width: '45%',
                      paddingHorizontal: 10,
                    },
                  ]}>
                  <Text
                    style={{
                      width: '100%',
                      fontSize: 16,
                      color:
                        this.state.selectedSymptom == u ? '#fff' : '#027E97',
                      textAlign: 'center',
                    }}>
                    {u}
                  </Text>
                </Button>
              );
            })}
          </View>
          <View>
            {this.state.reasons3.map((u, i) => {
              return (
                <Button
                  onPress={() => {
                    this.pressbtn(u);
                  }}
                  style={[
                    styles.btnStyle,
                    {
                      marginTop: 30,
                      backgroundColor:
                        this.state.selectedSymptom == u ? '#FF7A59' : '#fff',
                      width: '90%',
                    },
                  ]}>
                  <Text
                    style={{
                      width: '100%',
                      fontSize: 16,
                      color:
                        this.state.selectedSymptom == u ? '#fff' : '#027E97',
                      textAlign: 'center',
                    }}>
                    {u}
                  </Text>
                </Button>
              );
            })}
          </View>
          <Button
            onPress={() => {
              this.pressbtn('others');
            }}
            style={[
              styles.btnStyle,
              {
                marginTop: 30,
                backgroundColor:
                  this.state.selectedSymptom == 'other' ? '#FF7A59' : '#fff',
                width: '90%',
              },
            ]}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color:
                  this.state.selectedSymptom == 'others' ? '#fff' : '#027E97',
                paddingLeft: 20,
              }}>
              Others
            </Text>
            <Text
              style={{
                width: '10%',
                fontSize: 30,
                color: '#027E97',
              }}>
              +
            </Text>
          </Button>
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
            <Text style={{fontSize: 16, color: '#FFFFFF'}}>Questions 2/5</Text>
            <View style={{marginTop: 15, flexDirection: 'row'}}>
              <View
                style={{height: 5, width: '40%', backgroundColor: '#027E97'}}
              />
              <View
                style={{height: 5, width: '60%', backgroundColor: '#D5E9F4'}}
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
  btnStyle: {
    alignSelf: 'center',
    borderRadius: 15,
    height: 39,
    marginTop: 20,
    elevation: 10,
    justifyContent: 'center',
  },
  nextBtn: {
    width: 42,
    height: 42,
    backgroundColor: '#027E97',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginLeft: 'auto',
    marginRight: '10%',
    elevation: 10,
  },
});
