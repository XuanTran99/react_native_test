import React from 'react';
import {Toast} from 'react-native-ui-lib';
import colors from '../../styles/colors';
import {Icons} from '../../utils/images';
import {useAppDispatch, useAppSelector} from '../../redux/hook';
import {hideToast} from './ToastState';

export default function ToastViewContainer() {
  const dispatch = useAppDispatch();

  const showToast = useAppSelector(state => state.toast.showToast);
  const message = useAppSelector(state => state.toast.message);
  const isError = useAppSelector(state => state.toast.isError);

  const _hideToast = () => {
    dispatch(hideToast());
  };

  return (
    <Toast
      visible={showToast}
      position={'top'}
      backgroundColor={isError ? colors.error : colors.green}
      message={message}
      autoDismiss={4000}
      onDismiss={_hideToast}
      icon={isError ? Icons.TOAST_WARNING : Icons.TOAST_SUCCESS}
      showDismiss
    />
  );
}
