import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './config';
import { Routes } from './routes';
import HomeScreen from '../modules/Home/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Routes.HomeStack} component={HomeScreen} />
    </Stack.Navigator>
  );
}
