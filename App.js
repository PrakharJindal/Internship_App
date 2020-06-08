/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import CalendarPicker from 'react-native-calendar-picker';
import {extendMoment} from 'moment-range';
import Moment from 'moment';
import dateArray from 'moment-array-dates';
import Header from './Header';
import {ButtonGroup} from 'react-native-elements';
import Tabbar from './Tabbar';
const moment = extendMoment(Moment);

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      selectedIndex: 1,
      pos: false,
      range: [
        // 'Thursday, 1st',
        // 'Friday, 2nd',
        // 'Saturday, 3rd',
        // 'Sunday, 4th',
        // 'Monday, 5th',
      ],
      time: ['09:00', '10:00', '11:00', '12:00', '01:00', '02:00'],
      value: 0,
      timeValue: '09:00',
    };
  }

  val = new Animated.Value(height * 0.55);

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (e, gestureState) => {
      this.val.setOffset(this.val.__getValue());
      console.log(this.val.__getValue());
    },
    onPanResponderMove: (e, gestureState) => {
      console.log(gestureState.dy, ' ', height * 0.25);
      if (gestureState.moveY <= height * 0.55) {
        if (!this.state.pos || gestureState.dy > 0) {
          this.val.setValue(gestureState.dy);
        }
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      console.log(gestureState.moveY, ' -------- ', height * 0.25);

      if (gestureState.moveY <= height * 0.25) {
        this.state.pos
          ? this.val.setValue(0)
          : this.val.setValue((-1 * height) / 2);
        this.setState({pos: true});
      } else if (gestureState.moveY <= height * 0.55) {
        console.log('in2');
        this.state.pos ? this.val.setValue(height / 2) : this.val.setValue(0);
        this.setState({pos: false});
      }
      this.val.flattenOffset();
    },
  });

  getDateView = (startDate, endDate) => {
    if (startDate != '' && endDate != '') {
      const start = Moment(startDate).format('MM/DD/YYYY');
      const end = Moment(endDate).format('MM/DD/YYYY');
      const range = dateArray.range(start, end, 'dddd, Do', true);
      this.setState({
        range,
      });
      console.log(range);
    }
  };

  onDateChange = async (date, type) => {
    if (type === 'END_DATE') {
      await this.setState({
        selectedEndDate: date,
      });

      this.getDateView(
        this.state.selectedStartDate.toString(),
        this.state.selectedEndDate.toString(),
      );
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  };

  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date(1950, 1, 1);
    const maxDate = new Date(2050, 12, 31);
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: '#95CCE0'}}>
        <Header />
        <RadialGradient
          style={{width: '100%', height: 'auto', zIndex: 0}}
          colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
          stops={[0.0, 0.2, 0.75]}
          center={[100, 100]}
          radius={120}>
          <CalendarPicker
            startFromMonday={false}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor="transparent"
            selectedDayColor="rgba(2, 126, 151, 0.24)"
            selectedDayStyle={{
              backgroundColor: '#FF7A59',
              borderRadius: 11,
            }}
            todayTextStyle={{
              borderRadius: 11,
              borderWidth: 1.5,
              width: 30,
              height: 30,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderColor: '#FF7A59',
            }}
            textStyle={{
              color: '#015A6B',
            }}
            selectedDayTextColor="#FFFFFF"
            onDateChange={this.onDateChange}
            selectedRangeStartStyle={{
              backgroundColor: '#FF7A59',
              borderRadius: 11,
            }}
            selectedRangeEndStyle={{
              backgroundColor: '#FF7A59',
              borderRadius: 11,
            }}
            selectedRangeStyle={{
              backgroundColor: 'rgba(2, 126, 151, 0.24)',
              paddingVertical: -20,
            }}
            weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            dayOfWeekStyles={{fontSize: 30}}
            dayLabelsWrapper={{
              height: 'auto',
            }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 20,
              paddingHorizontal: '15%',
            }}>
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
              <Text
                style={{
                  borderRadius: 6,
                  borderWidth: 1.5,
                  width: 20,
                  height: 20,
                  textAlign: 'center',
                  borderColor: '#FF7A59',
                  fontSize: 18,
                }}>
                {' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 10,
                  height: 20,
                  textAlignVertical: 'center',
                  color: 'white',
                  fontFamily: 'Acumin-RPro',
                }}>
                Today
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  borderRadius: 5,
                  backgroundColor: '#FF7A59',
                  width: 20,
                  height: 20,
                  textAlign: 'center',
                  borderColor: 'white',
                }}>
                {' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 10,
                  color: 'white',
                  fontFamily: 'Acumin-RPro',
                }}>
                Chosen
              </Text>
            </View>
          </View>
        </RadialGradient>
        <Animated.View
          style={{
            backgroundColor: '#EBFAFF',
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 10,
            width: width,
            height: 'auto',
            transform: [{translateY: this.val}],
            ...StyleSheet.absoluteFill,
            zIndex: 10,
          }}>
          <View style={{height: 50}} {...this.panResponder.panHandlers}>
            <View
              style={{
                backgroundColor: '#027E97',
                height: 5,
                width: 30,
                borderRadius: 5,
                marginBottom: 50,
                marginTop: 10,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
          </View>
          <ScrollView
            style={{flex: 1, paddingBottom: 50}}
            scrollEnabled={this.state.pos}>
            {this.state.range.map((u, i) => {
              return (
                <View style={{marginVertical: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#027E97',
                        fontWeight: 'bold',
                        fontFamily: 'Acumin-RPro',
                      }}>
                      {u}
                    </Text>
                    <ButtonGroup
                      onPress={this.updateIndex}
                      selectedIndex={this.state.selectedIndex}
                      buttons={['AM', 'PM']}
                      containerStyle={{
                        height: 50,
                        width: 150,
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        marginLeft: 'auto',
                      }}
                      buttonStyle={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 9,
                        borderWidth: 0,
                      }}
                      selectedButtonStyle={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#027E97',
                        borderWidth: 0,
                        borderRadius: 9,
                      }}
                      textStyle={{
                        fontSize: 18,
                        fontWeight: 'normal',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginVertical: 20,
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    {this.state.time.map((u, i) => {
                      return (
                        <View
                          style={{
                            width: width * 0.3,
                            height: 38,
                            marginBottom: 10,
                          }}>
                          <TouchableHighlight
                            style={{
                              width: 85,
                              height: 38,
                              backgroundColor:
                                this.state.timeValue == u ? '#FF7A59' : 'white',
                              borderWidth: 0,
                              borderRadius: 11,
                              elevation: 5,
                            }}
                            onPress={() => {
                              this.setState({timeValue: u});
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '200',
                                width: '100%',
                                height: '100%',
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                fontFamily: 'Acumin-RPro',
                              }}>
                              {u}
                            </Text>
                          </TouchableHighlight>
                        </View>
                      );
                    })}
                  </View>
                  <Text
                    style={{
                      marginLeft: 'auto',
                      marginRight: 20,
                      color: '#9D9D9D',
                      textDecorationLine: 'underline',
                      fontSize: 18,
                      lineHeight: 20,
                      marginTop: 10,
                      marginBottom: 20,
                      fontFamily: 'Acumin-RPro',
                    }}>
                    more
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </Animated.View>
        <View style={{position: 'absolute', bottom: 0, zIndex: 20}}>
          <Tabbar />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: '#7E52A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
});
