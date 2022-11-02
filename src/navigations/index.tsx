import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './routes';

import BottomTabStack from './BottomTabs';
import { screenOptions } from './config';
// import RNBootSplash from "react-native-bootsplash";

const Stack = createStackNavigator();
function RootNavigation() {
  return (
    <NavigationContainer>
      {/* <BottomTabStack /> */}
      {/* <ModalNotification
        content={'Đã đến lịch hẹn với khách hàng'}
        visible={notificationVisible}
        setVisible={setNotificationVisible}
      /> */}
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Routes.Home} component={BottomTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
