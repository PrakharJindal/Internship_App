/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Button} from 'native-base';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'emanuel34@gmail.com',
      pass: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          useAngle
          angle={100}
          colors={[
            'rgba(2, 126, 151, 0)',
            'rgba(2, 126, 151, 0)',
            // 'rgba(2, 126, 151, 0)',
            // 'rgba(2, 126, 151, 0)',
            'rgba(2, 126, 151, 0.31)',
          ]}
          style={{flex: 1, opacity: 0.4}}
        />
        <View
          style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 45,
              fontWeight: 'bold',
              color: '#027E97',
              marginTop: 60,
              width: '100%',
              textAlign: 'center',
            }}>
            Welcome!
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'normal',
              lineHeight: 29,
              color: '#027E97',
              marginTop: 10,
              width: '100%',
              textAlign: 'center',
              opacity: 1,
            }}>
            Choose Account Type
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 25,
            }}>
            <View>
              <View
                style={{
                  width: 133,
                  height: 133,
                  elevation: 10,
                  borderRadius: 11,
                  backgroundColor: '#fff',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 10,
                  width: '100%',
                  textAlign: 'center',
                }}>
                PATIENT
              </Text>
            </View>
            <View>
              <View
                style={{
                  width: 133,
                  height: 133,
                  elevation: 10,
                  borderRadius: 11,
                  backgroundColor: '#fff',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 10,
                  width: '100%',
                  textAlign: 'center',
                }}>
                DOCTOR
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 19,
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.25)',
              marginHorizontal: 49,
              marginTop: 40,
              width: '100%',
              alignSelf: 'center',
            }}>
            Hello patient! {'\n'}Please fill out the form below to get started
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              borderBottomColor: 'rgba(2, 126, 151, 0.33)',
              borderBottomWidth: 0.5,
              height: 'auto',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <EvilIcons
              name="envelope"
              color="rgba(0, 0, 0, 0.15)"
              size={30}
              style={{alignSelf: 'center'}}
            />
            <TextInput
              placeholder="Email Id"
              value={this.state.email}
              onChangeText={(val) => {
                this.setState({email: val});
              }}
              style={{paddingLeft: 20, color: '#027E97', fontSize: 14}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              borderBottomColor: 'rgba(2, 126, 151, 0.33)',
              borderBottomWidth: 0.5,
              height: 'auto',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <EvilIcons
              name="lock"
              color="rgba(0, 0, 0, 0.15)"
              size={40}
              style={{alignSelf: 'center'}}
            />
            <TextInput
              placeholder="Password"
              value={this.state.pass}
              secureTextEntry
              onChangeText={(val) => {
                this.setState({pass: val});
              }}
              style={{paddingLeft: 20, color: '#027E97', fontSize: 14}}
            />
          </View>
          <Button
            style={{
              width: 131,
              height: 46,
              borderRadius: 17,
              backgroundColor: '#FF7A59',
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
              }}>
              SIGN IN
            </Text>
          </Button>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.25)',
              fontSize: 14,
              marginTop: 10,
            }}>
            No account ? <Text style={{color: '#FF7A59'}}>Sign Up</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
