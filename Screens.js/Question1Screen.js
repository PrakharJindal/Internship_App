/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {Button} from 'native-base';
import {ButtonGroup} from 'react-native-elements';
import Svg, {Path} from 'react-native-svg';

class Question1Screen extends Component {
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
              source={require('../assets/pic2.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 38,
              fontWeight: 'bold',
              marginLeft: '10%',
              color: '#027E97',
            }}>
            Who is the {'\n'}patient?
          </Text>
          <Button
            onPress={() => {
              this.pressbtn(1);
            }}
            style={[
              styles.btnStyle,
              {
                marginTop: 30,
                backgroundColor:
                  this.state.selectedIndex == 1 ? '#FF7A59' : '#fff',
              },
            ]}>
            <Text
              style={{
                width: '100%',
                fontSize: 16,
                color: this.state.selectedIndex == 1 ? '#fff' : '#027E97',
                paddingLeft: 20,
              }}>
              MYSELF
            </Text>
          </Button>
          <Button
            onPress={() => {
              this.pressbtn(2);
            }}
            style={[
              styles.btnStyle,
              {
                backgroundColor:
                  this.state.selectedIndex == 2 ? '#FF7A59' : '#fff',
              },
            ]}>
            <Text
              style={{
                width: '100%',
                fontSize: 16,
                color: this.state.selectedIndex == 2 ? '#fff' : '#027E97',
                paddingLeft: 20,
              }}>
              MOTHER
            </Text>
          </Button>
          <Button
            onPress={() => {
              this.pressbtn(3);
            }}
            style={[
              styles.btnStyle,
              {
                backgroundColor:
                  this.state.selectedIndex == 3 ? '#FF7A59' : '#fff',
              },
            ]}>
            <Text
              style={{
                width: '100%',
                fontSize: 16,
                color: this.state.selectedIndex == 3 ? '#fff' : '#027E97',
                paddingLeft: 20,
              }}>
              FATHER
            </Text>
          </Button>
          <Button
            onPress={() => {
              this.pressbtn(4);
            }}
            style={[
              styles.btnStyle,
              {
                backgroundColor:
                  this.state.selectedIndex == 4 ? '#FF7A59' : '#fff',
              },
            ]}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color: this.state.selectedIndex == 4 ? '#fff' : '#027E97',
                paddingLeft: 20,
              }}>
              OTHERS
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

export default Question1Screen;

const styles = StyleSheet.create({
  btnStyle: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 15,
    height: 58,
    marginTop: 20,
    elevation: 0,
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
