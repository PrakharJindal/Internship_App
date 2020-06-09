/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadialGradient from 'react-native-radial-gradient';
import Svg, {Path} from 'react-native-svg';

const width = Dimensions.get('screen').width;

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
            <Text style={{fontSize: 16, color: '#027E97'}}>Step 2</Text>
            <View style={{marginTop: 5, flexDirection: 'row'}}>
              <View
                style={{height: 5, width: '67%', backgroundColor: '#027E97'}}
              />
              <View
                style={{height: 5, width: '33%', backgroundColor: '#D5E9F4'}}
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
            Build your profile
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
            <Svg width="159" height="158" viewBox="0 0 159 158" fill="none">
              <Path
                d="M0 17.5556V140.444C0 145.1 1.8613 149.566 5.17445 152.858C8.48759 156.15 12.9812 158 17.6667 158H141.333C151.05 158 159 150.1 159 140.444V17.5556C159 7.9 151.05 0 141.333 0H17.6667C12.9812 0 8.48759 1.8496 5.17445 5.1419C1.8613 8.43421 0 12.8995 0 17.5556ZM106 52.6667C106 67.2378 94.1633 79 79.5 79C64.8367 79 53 67.2378 53 52.6667C53 38.0956 64.8367 26.3333 79.5 26.3333C94.1633 26.3333 106 38.0956 106 52.6667ZM26.5 122.889C26.5 105.333 61.8333 95.6778 79.5 95.6778C97.1667 95.6778 132.5 105.333 132.5 122.889V131.667H26.5V122.889Z"
                fill="black"
                fillOpacity="0.1"
              />
            </Svg>
            <Text
              style={{
                position: 'absolute',
                textAlign: 'center',
                fontSize: 18,
                color: 'rgba(0, 0, 0, 0.43)',
                fontWeight: 'bold',
              }}>
              Upload {'\n'}Picture/Video
            </Text>
          </View>
          <TextInput
            placeholder="Registration Number"
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
            placeholder="Mention area of Expertise"
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
              Submit
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
            Just one more step to complete{'\n'}your registration process!
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUpStep1Screen;
