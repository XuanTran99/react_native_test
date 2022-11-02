import { createStackNavigator } from '@react-navigation/stack';

export enum Routes {
  Login = 'Login',
  Register = 'Register',
  Home = 'Home',
  HomeStack = 'HomeStack',
}

export type StackParamList = {
  [Routes.Login]: undefined;
  [Routes.Register]: undefined;
  [Routes.Home]: undefined;
};

export const Stack = createStackNavigator<StackParamList>();
