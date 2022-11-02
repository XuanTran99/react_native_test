// import React from 'react';
// import {LogBox} from 'react-native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from './src/app/store';
// import AppWrapper from './src/modules/App/AppWrapperContainer';
// LogBox.ignoreLogs([
//   'EventEmitter.removeListener',
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <AppWrapper />
//         </PersistGate>
//       </Provider>
//     </SafeAreaProvider>
//   );
// };

// export default App;

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Platform,
  NativeEventEmitter,
  NativeModules,
  Linking,
} from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';
import moment from 'moment';

const {RNAlarmNotification} = NativeModules;
const RNEmitter = new NativeEventEmitter(RNAlarmNotification);

const alarmNotifData = {
  title: 'Alarm',
  message: 'Stand up',
  vibrate: true,
  play_sound: true,
  schedule_type: 'once',
  channel: 'wakeup',
  data: {content: 'my notification id is 22'},
  loop_sound: true,
  has_button: true,
};

const repeatAlarmNotifData = {
  title: 'Alarm',
  message: 'Stand up',
  vibrate: true,
  play_sound: true,
  channel: 'wakeup',
  data: {content: 'my notification id is 22'},
  loop_sound: true,
  schedule_type: 'repeat',
  repeat_interval: 'minutely',
  interval_value: 5, // repeat after 5 minutes
};

interface NotificationProp {
  minutes?: number;
  dateTime: any;
  isSet: true | false;
  data?: any;
}

const PushNotification: React.FC<NotificationProp> = ({
  minutes,
  dateTime,
  isSet,
  data,
}) => {
  const [futureFireDate, setfutureFireDate] = React.useState('1');
  const [alarmId, setalarmId] = React.useState(null);
  const [update, setupdate]: any = React.useState([]);

  React.useEffect(() => {
    if (isSet) {
      setAlarm();
    }
  }, [isSet]);

  const setAlarm = async () => {
    try {
      // let str = moment(dateTime).subtract(5, 'minutes');
      // let convertTime = moment(dateTime)
      //   .subtract(minutes, 'minutes')
      //   .format('yyyy-MM-DD');
      console.log(dateTime);

      const details = {...data, fire_date: dateTime};
      console.log(details);

      console.log(`alarm set: ${dateTime}`);

      const alarm = await ReactNativeAN.scheduleAlarm(details);
      console.log(alarm);
      if (alarm) {
        setupdate([...update, {date: `alarm set: ${dateTime}`, id: alarm.id}]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <View>
        <View>
          <Text>Alarm Date in the future (example 01-01-2022 00:00:00)</Text>
          <View>
            <TextInput
              style={styles.date}
              // onChangeText={text => this.setState({fireDate: text})}
              value={dateTime}
            />
          </View>
        </View>
        <View>
          <Button onPress={setAlarm} title="Set Alarm" color="#007fff" />
        </View>
      </View>

      <Text>{JSON.stringify(update, null, 2)}</Text> */}
    </>
  );
};

PushNotification.defaultProps = {
  data: {
    title: 'Alarm',
    message: 'Stand up',
    vibrate: false,
    play_sound: false,
    schedule_type: 'once',
    channel: 'wakeup',
    data: {content: 'my notification id is 22'},
    loop_sound: true,
    has_button: true,
  },
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 20},
  date: {height: 40, borderColor: 'gray', borderWidth: 1},
  margin: {marginVertical: 8},
});

export default PushNotification;
