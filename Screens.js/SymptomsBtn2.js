/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Button} from 'native-base';

class SymptomsBtn2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSymptom: '',
      symptoms: ['Constipation', 'Blood in Stool', 'Diarrhea'],
      symptoms2: ['Abdominal pain/Discomfort'],
    };
  }

  pressbtn = (selectedSymptom) => {
    this.setState({selectedSymptom});
  };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}>
          {this.state.symptoms.map((u, i) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  this.pressbtn(u);
                }}
                style={[
                  styles.btnStyle,
                  {
                    marginTop: 20,
                    backgroundColor:
                      this.state.selectedSymptom == u ? '#FF7A59' : '#fff',
                    width: 'auto',
                    marginHorizontal: 15,
                    paddingHorizontal: 20,
                  },
                ]}>
                <Text
                  style={{
                    width: '100%',
                    fontSize: 16,
                    color: this.state.selectedSymptom == u ? '#fff' : '#027E97',
                    textAlign: 'center',
                  }}>
                  {u}
                </Text>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
          }}>
          {this.state.symptoms2.map((u, i) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  this.pressbtn(u);
                }}
                style={[
                  styles.btnStyle,
                  {
                    marginTop: 20,
                    backgroundColor:
                      this.state.selectedSymptom == u ? '#FF7A59' : '#fff',
                    width: '80%',
                    paddingHorizontal: 10,
                  },
                ]}>
                <Text
                  style={{
                    width: '100%',
                    fontSize: 16,
                    color: this.state.selectedSymptom == u ? '#fff' : '#027E97',
                    textAlign: 'center',
                  }}>
                  {u}
                </Text>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    );
  }
}

export default SymptomsBtn2;

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
