import {AppRegistry, YellowBox, LogBox, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true;
console.ignoredYellowBox = ['`-[RCTRootView cancelTouches]`'];
console.ignoredYellowBox = [
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
];
console.ignoredYellowBox = ['Warning: Each'];
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['`-[RCTRootView cancelTouches]`']);
LogBox.ignoreLogs(['EventEmitter.removeListener']);

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
