/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadialGradient from 'react-native-radial-gradient';
import Svg, {Path} from 'react-native-svg';

const width = Dimensions.get('screen').width;

class SignUpStep3Screen extends Component {
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
          angle={120}
          colors={[
            'rgba(2, 126, 151, 0)',
            'rgba(2, 126, 151, 0)',
            'rgba(2, 126, 151, 0.31)',
          ]}
          style={{flex: 1, opacity: 0.4}}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '45%',
            borderBottomRightRadius: 60,
            backgroundColor: '#95CCE0',
          }}>
          <RadialGradient
            style={{
              width: '100%',
              height: '80%',
              borderBottomRightRadius: 50,
            }}
            colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
            stops={[0.0, 0.47, 1]}
            center={[150, 100]}
            radius={200}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            height: '100%',
          }}>
          <View style={{width: '80%', alignSelf: 'center', marginTop: 30}}>
            <Text style={{fontSize: 16, color: '#027E97'}}>Step 3</Text>
            <View style={{marginTop: 5, flexDirection: 'row'}}>
              <View
                style={{height: 5, width: '100%', backgroundColor: '#027E97'}}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 28,
              color: '#027E97',
              marginTop: 49,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Contact Details
          </Text>
          <View
            style={{
              width: 180,
              height: 180,
              borderRadius: 14,
              backgroundColor: '#fff',
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/img.jpg')}
              resizeMode="contain"
              style={{width: '80%', height: '80%', borderRadius: 14}}
            />
          </View>
          <TextInput
            placeholder="Contact Number"
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
              marginTop: 30,
            }}
          />
          <TextInput
            placeholder="City of Residence"
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
            placeholder="Country"
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
              Complete
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default SignUpStep3Screen;
