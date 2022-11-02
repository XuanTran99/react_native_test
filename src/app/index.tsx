import React, {useEffect} from 'react';
import Toast from '../components/Toast/ToastView';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import LoadingView from '../components/Loading/LoadingView';
import {View, Text} from 'react-native-ui-lib';
import colors from '../styles/colors';
import Navigation from '../navigations';
import {Alert} from 'react-native';
// import RNBootSplash from "react-native-bootsplash";

const AppWrapper = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await RNBootSplash.hide({ fade: true });
  //     console.log("Bootsplash has been hidden successfully");
  //   });
  // }, []);

  /* ---------------------------------------------------------------- */

  return (
    <>
      <Navigation />
      <Toast />
      <LoadingView />
    </>
  );
};

export default AppWrapper;
