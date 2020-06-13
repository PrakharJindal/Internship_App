/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {Button} from 'native-base';
import Svg, {Path} from 'react-native-svg';
import Octicons from 'react-native-vector-icons/Octicons';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonGroup} from 'react-native-elements';

class Question5Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOpt1: 0,
      selectedOpt2: 1,
      question1: [
        'You have a history of asthma',
        'You have a history of chronic obstructive pulmonary disease/copd or emphysema',
        'You have a history of chronic bronchitis',
        'You have a history of interstitial lung disease',
        'You have a history of a chronic lung disease not listed above',
      ],
      question2: [
        'You have a history of asthma',
        'You have a history of chronic bronchitis',
        'You have a history of interstitial lung disease',
        'You have a history of a chronic lung disease not listed above',
      ],
    };
  }

  pressbtn1 = (selectedOpt1) => {
    this.setState({selectedOpt1});
  };
  pressbtn2 = (selectedOpt2) => {
    this.setState({selectedOpt2});
  };

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
              paddingBottom: 70,
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
                  height: 150,
                }}
                resizeMode="contain"
                source={require('../assets/pic7.png')}
              />
            </View>
            <Text
              style={{
                fontSize: 38,
                fontWeight: 'bold',
                marginHorizontal: '11%',
                color: '#027E97',
              }}>
              Do you have a history of chronic lung disease?
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: '11%',
                color: '#027E97',
              }}>
              Answer to the below questions if any of these are true:
            </Text>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              colors={['#D0EAF3', 'rgba(255, 255, 255, 0.67284)']}
              style={{
                width: '80%',
                borderRadius: 21,
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}>
                {this.state.question1.map((u, i) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 15,
                        marginHorizontal: 15,
                      }}>
                      <Octicons name="primitive-dot" size={20} color="white" />
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          color: '#027E97',
                        }}>
                        {u}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <ButtonGroup
                onPress={(i) => {
                  this.pressbtn1(i);
                }}
                selectedIndex={this.state.selectedOpt1}
                buttons={['NO', 'YES']}
                containerStyle={{
                  height: 41,
                  width: '50%',
                  borderBottomRightRadius: 21,
                  borderTopLeftRadius: 21,
                  alignSelf: 'flex-end',
                }}
                selectedButtonStyle={{backgroundColor: '#FF7A59'}}
              />
            </LinearGradient>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              colors={['#D0EAF3', 'rgba(255, 255, 255, 0.67284)']}
              style={{
                width: '80%',
                borderRadius: 21,
                alignSelf: 'center',
                marginTop: 50,
              }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}>
                {this.state.question2.map((u, i) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 15,
                        marginHorizontal: 15,
                      }}>
                      <Octicons name="primitive-dot" size={20} color="white" />
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          color: '#027E97',
                        }}>
                        {u}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <ButtonGroup
                onPress={(i) => {
                  this.pressbtn2(i);
                }}
                selectedIndex={this.state.selectedOpt2}
                buttons={['NO', 'YES']}
                containerStyle={{
                  height: 41,
                  width: '50%',
                  borderBottomRightRadius: 21,
                  borderTopLeftRadius: 21,
                  alignSelf: 'flex-end',
                }}
                selectedButtonStyle={{backgroundColor: '#FF7A59'}}
              />
            </LinearGradient>
            <Button
              style={{
                width: 131,
                height: 46,
                borderRadius: 17,
                backgroundColor: '#FF7A59',
                alignSelf: 'center',
                marginTop: 50,
                elevation: 10,
              }}>
              <Text
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                }}>
                COMPLETE
              </Text>
            </Button>
            <View style={{width: '80%', alignSelf: 'center', marginTop: 20}}>
              <Text style={{fontSize: 16, color: '#FFFFFF'}}>
                Questions 5/5
              </Text>
              <View
                style={{
                  height: 5,
                  width: '100%',
                  backgroundColor: '#027E97',
                  marginTop: 20,
                }}
              />
            </View>
          </RadialGradient>
        </ScrollView>
      </View>
    );
  }
}

export default Question5Screen;

const styles = StyleSheet.create({
  btnStyle: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 22,
    height: 58,
    marginTop: 20,
    elevation: 10,
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
  },
});
