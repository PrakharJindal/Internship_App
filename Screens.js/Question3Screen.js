/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {Button} from 'native-base';
import Svg, {Path} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';
import SymptomsBtn from './SymptomsBtn';
import SymptomsBtn2 from './SymptomsBtn2';

class Question3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <RadialGradient
            style={{
              width: '100%',
              height: 'auto',
              zIndex: 0,
              flex: 1,
              paddingBottom: 50,
            }}
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
                source={require('../assets/pic.png')}
              />
            </View>
            <Text
              style={{
                fontSize: 38,
                fontWeight: 'bold',
                marginHorizontal: '7%',
                color: '#027E97',
              }}>
              Do you have these symptoms?
            </Text>
            <SymptomsBtn />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginHorizontal: '10%',
                color: '#027E97',
                marginTop: 60,
              }}>
              GASTROINTESTINAL
            </Text>
            <SymptomsBtn2 />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '80%',
                alignSelf: 'center',
              }}>
              <Button
                style={[
                  styles.btnStyle,
                  {
                    marginTop: 30,
                    backgroundColor: '#71B4CD',
                    width: '45%',
                  },
                ]}>
                <Text
                  style={{
                    width: '80%',
                    fontSize: 16,
                    color:
                      this.state.selectedSymptom == 'others'
                        ? '#fff'
                        : '#027E97',
                    paddingLeft: 20,
                  }}>
                  Others
                </Text>
                <Text
                  style={{
                    width: '20%',
                    fontSize: 30,
                    color: '#027E97',
                  }}>
                  +
                </Text>
              </Button>
              <Button
                onPress={() => {
                  this.pressbtn('others');
                }}
                style={[
                  styles.btnStyle,
                  {
                    marginTop: 30,
                    backgroundColor: '#71B4CD',
                    width: '45%',
                  },
                ]}>
                <Text
                  style={{
                    width: '80%',
                    fontSize: 16,
                    color:
                      this.state.selectedSymptom == 'others'
                        ? '#fff'
                        : '#027E97',
                    paddingLeft: 20,
                  }}>
                  More
                </Text>
                <Text
                  style={{
                    width: '20%',
                    fontSize: 30,
                    color: '#027E97',
                  }}>
                  +
                </Text>
              </Button>
            </View>
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
              <Text style={{fontSize: 16, color: '#FFFFFF'}}>
                Questions 2/5
              </Text>
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
        </ScrollView>
      </View>
    );
  }
}

export default Question3Screen;

const styles = StyleSheet.create({
  btnStyle: {
    alignSelf: 'center',
    borderRadius: 15,
    height: 39,
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
