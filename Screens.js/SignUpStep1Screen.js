/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Svg from 'react-native-svg';

class SignUpStep1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            'rgba(2, 126, 151, 0)',
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
            backgroundColor: 'transparent',
          }}>
          <View style={{width: '80%', alignSelf: 'center', marginTop: 30}}>
            <Text style={{fontSize: 16, color: '#027E97'}}>Step 1</Text>
            <View style={{marginTop: 5, flexDirection: 'row'}}>
              <View
                style={{height: 5, width: '33%', backgroundColor: '#027E97'}}
              />
              <View
                style={{height: 5, width: '67%', backgroundColor: '#D5E9F4'}}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 45,
              color: '#027E97',
              marginTop: 20,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Hello Doctor!
          </Text>
          <Image
            source={require('../assets/pic.png')}
            style={{
              alignSelf: 'center',
              transform: [{scale: 0.9}],
            }}
            resizeMode="cover"
            resizeMethod="scale"
          />
          <TextInput
            placeholder="First Name"
            value={this.state.email}
            onChangeText={(val) => {
              this.setState({email: val});
            }}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            style={{
              color: '#027E97',
              fontSize: 14,
              width: '70%',
              borderBottomColor: 'rgba(2, 126, 151, 0.33)',
              borderBottomWidth: 2,
              height: 'auto',
              alignSelf: 'center',
              // marginTop: 30,
            }}
          />
          <TextInput
            placeholder="Last Name"
            value={this.state.email}
            onChangeText={(val) => {
              this.setState({email: val});
            }}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            style={{
              color: '#027E97',
              fontSize: 14,
              width: '70%',
              borderBottomColor: 'rgba(2, 126, 151, 0.33)',
              borderBottomWidth: 2,
              height: 'auto',
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => {
              this.setState({email: val});
            }}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            style={{
              color: '#027E97',
              fontSize: 14,
              width: '70%',
              borderBottomColor: 'rgba(2, 126, 151, 0.33)',
              borderBottomWidth: 2,
              height: 'auto',
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <TextInput
            placeholder="Password"
            value={this.state.email}
            onChangeText={(val) => {
              this.setState({email: val});
            }}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            style={{
              color: '#027E97',
              fontSize: 14,
              width: '70%',
              borderBottomColor: 'rgba(2, 126, 151, 0.33)',
              borderBottomWidth: 2,
              height: 'auto',
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <EvilIcons
              name="sc-facebook"
              color="rgba(2, 126, 151, 0.52)"
              size={35}
            />
            <EvilIcons
              name="sc-twitter"
              color="rgba(2, 126, 151, 0.52)"
              size={35}
            />
            <EvilIcons
              name="sc-google-plus"
              color="rgba(2, 126, 151, 0.52)"
              size={35}
            />
          </View>
          <Button
            onPress={() => {
              this.props.navigation.navigate('SignUpStep2Screen');
            }}
            style={{
              width: 131,
              height: 46,
              borderRadius: 17,
              backgroundColor: '#FF7A59',
              alignSelf: 'center',
              marginTop: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
              }}>
              SIGN UP
            </Text>
          </Button>
          <Text
            onPress={() => {
              this.props.navigation.navigate('Welcome');
            }}
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.25)',
              fontSize: 14,
              marginTop: 10,
            }}>
            Already have an account?{' '}
            <Text style={{color: '#FF7A59'}}>Sign In</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUpStep1Screen;
