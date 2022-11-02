import * as React from 'react';

import {screenOptions} from './config';
import {Routes, Stack} from './routes';

import AuctionScreen from '../modules/Auction/AuctionScreen';

export default function AuctionStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Auction} component={AuctionScreen} />
    </Stack.Navigator>
  );
}
