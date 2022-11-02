import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar, defaultStyle, LocaleConfig} from 'react-native-calendars';

const XDate = require('xdate');

LocaleConfig.locales.vi = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'T1',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    'T9',
    'T10',
    'T11',
    'T12',
  ],
  dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'vi';

type Props = {
  initialRange: React.PropTypes.array.isRequired,
  onSuccess: React.PropTypes.func.isRequired,
};
export default class DateRangePicker extends Component<Props> {
  state = {isFromDatePicked: false, isToDatePicked: false, markedDates: {}};

  componentDidMount() {
    this.setupInitialRange();
  }

  onDayPress = day => {
    if (
      !this.state.isFromDatePicked ||
      (this.state.isFromDatePicked && this.state.isToDatePicked)
    ) {
      this.setupStartMarker(day);
    } else if (!this.state.isToDatePicked) {
      let markedDates = {...this.state.markedDates};
      let [mMarkedDates, range] = this.setupMarkedDates(
        this.state.fromDate,
        day.dateString,
        markedDates,
      );
      if (range >= 0) {
        this.setState({
          isFromDatePicked: true,
          isToDatePicked: true,
          markedDates: mMarkedDates,
        });
        this.props.onSuccess(this.state.fromDate, day.dateString);
      } else {
        this.setupStartMarker(day);
      }
    }
  };

  setupStartMarker = day => {
    let markedDates = {
      [day.dateString]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor,
      },
    };
    this.setState({
      isFromDatePicked: true,
      isToDatePicked: false,
      fromDate: day.dateString,
      markedDates: markedDates,
    });
  };

  setupMarkedDates = (fromDate, toDate, markedDates) => {
    let mFromDate = new XDate(fromDate);
    let mToDate = new XDate(toDate);
    let range = mFromDate.diffDays(mToDate);
    if (range >= 0) {
      if (range == 0) {
        markedDates = {
          [toDate]: {
            color: this.props.theme.markColor,
            textColor: this.props.theme.markTextColor,
          },
        };
      } else {
        for (var i = 1; i <= range; i++) {
          let tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd');
          if (i < range) {
            markedDates[tempDate] = {
              color: this.props.theme.markColor,
              textColor: this.props.theme.markTextColor,
            };
          } else {
            markedDates[tempDate] = {
              endingDay: true,
              color: this.props.theme.markColor,
              textColor: this.props.theme.markTextColor,
            };
          }
        }
      }
    }
    return [markedDates, range];
  };

  setupInitialRange = () => {
    if (!this.props.initialRange) {
      return;
    }
    let [fromDate, toDate] = this.props.initialRange;
    let markedDates = {
      [fromDate]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor,
      },
    };
    let [mMarkedDates, range] = this.setupMarkedDates(
      fromDate,
      toDate,
      markedDates,
    );
    this.setState({markedDates: mMarkedDates, fromDate: fromDate});
  };

  render() {
    return (
      <Calendar
        {...this.props}
        // markingType={'period'}
        // markingType={'dot'}
        current={this.state.fromDate}
        // markedDates={this.state.markedDates}
        markedDates={{
          '2022-05-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-05-17': {marked: true},
          '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2022-05-19': {disabled: true, disableTouchEvent: true},
        }}
        enableSwipeMonths={true}
        initialDate={new Date()}
        onDayPress={day => {
          this.onDayPress(day);
        }}
      />
    );
  }
}

DateRangePicker.defaultProps = {
  theme: {markColor: '#00adf5', markTextColor: '#ffffff'},
};
