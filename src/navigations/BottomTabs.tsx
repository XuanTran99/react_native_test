import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Image from 'react-native-fast-image';

import { screenOptions } from './config';
import { Icons } from '../utils/images';
import colors from '../styles/colors';
import { Routes } from './routes';
import { useAppDispatch, useAppSelector } from '../redux/hook';

import HomeStack from './HomeStack';

import { useNavigation } from '@react-navigation/native';

const TabStack = createBottomTabNavigator();

export type TabItemProps = {
  focused: boolean;
  label?: string;
  name?: string;
};

const TabItem: React.FC<TabItemProps> = ({ focused, name, label }) => {
  let icon = {
    active: Icons.HOME_ACTIVE,
    unactive: Icons.HOME,
  };
  switch (name) {
    case Routes.Home:
      icon = {
        active: Icons.HOME_ACTIVE,
        unactive: Icons.HOME,
      };
      break;
    default:
      break;
  }
  return (
    <View center>
      <Image
        source={focused ? icon.active : icon.unactive}
        style={styles.icon}
      />
      <Text style={focused && styles.labelActive}>{label}</Text>
    </View>
  );
};

function BottomTabStack({ }) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.userData);
  // const [notificationVisible, setNotificationVisible] = React.useState(false);
  // function createChannels() {
  //   PushNotification.createChannel({
  //     channelId: 'auction-channel-id',
  //     channelName: 'Thông báo đấu giá',
  //   });
  // }

  return (
    <TabStack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={screenOptions}>
      <TabStack.Screen
        name={Routes.Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} name={Routes.Home} label="Trang chủ" />
          ),
        }}
        component={HomeStack}
      />
    </TabStack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  labelActive: {
    color: colors.main,
  },
  middleIcon: {
    bottom: 18,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: colors.main,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default BottomTabStack;
