/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {Button} from 'native-base';
import Svg, {Path} from 'react-native-svg';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native-gesture-handler';

class Question4Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
      options: [
        'I have an insurance',
        'I dont have insurance',
        'My plan is not listed',
      ],
    };
  }

  getSearch = (i) => {
    if (this.state.selectedIndex == i) {
      return (
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: 'rgba(255, 255, 255, 0.49)',
            width: '80%',
            alignSelf: 'center',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Search for your insurance company"
            placeholderTextColor="white"
            style={{width: '90%', fontSize: 13, color: 'white'}}
          />
          <Fontisto name="search" size={20} color="white" />
        </View>
      );
    }
  };

  pressbtn = (selectedIndex) => {
    this.setState({selectedIndex});
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
                source={require('../assets/pic6.png')}
              />
            </View>
            <Text
              style={{
                fontSize: 38,
                fontWeight: 'bold',
                marginLeft: '10%',
                color: '#027E97',
              }}>
              Choose the correct options
            </Text>
            {this.state.options.map((u, i) => {
              return (
                <View>
                  <Button
                    onPress={() => {
                      this.pressbtn(i);
                    }}
                    style={[
                      styles.btnStyle,
                      {
                        marginTop: 30,
                        backgroundColor:
                          this.state.selectedIndex == i ? '#FF7A59' : '#fff',
                      },
                    ]}>
                    <Text
                      style={{
                        width: '100%',
                        fontSize: 16,
                        color:
                          this.state.selectedIndex == i ? '#fff' : '#027E97',
                        paddingLeft: 20,
                      }}>
                      {u}
                    </Text>
                  </Button>
                  {i == 0 ? this.getSearch(i) : null}
                </View>
              );
            })}
            <View style={{marginTop: 15}}>
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
                  Questions 4/5
                </Text>
                <View style={{marginTop: 15, flexDirection: 'row'}}>
                  <View
                    style={{
                      height: 5,
                      width: '80%',
                      backgroundColor: '#027E97',
                    }}
                  />
                  <View
                    style={{
                      height: 5,
                      width: '20%',
                      backgroundColor: '#D5E9F4',
                    }}
                  />
                </View>
              </View>
            </View>
          </RadialGradient>
        </ScrollView>
      </View>
    );
  }
}

export default Question4Screen;

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
