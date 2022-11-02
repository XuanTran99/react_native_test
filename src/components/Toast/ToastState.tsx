import {createSlice} from '@reduxjs/toolkit';
// Define a type for the slice state
interface ToastState {
  showToast: boolean;
  message: string;
  isError: boolean;
}

// Define the initial state using that type
const initialState: ToastState = {
  showToast: false,
  message: '',
  isError: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state: any, action: any) => {
      state.showToast = true;
      state.message =
        typeof action.payload.message === 'object'
          ? 'Có lỗi xảy ra.'
          : action.payload.message;
      state.isError = action.payload.isError;
    },
    hideToast: (state: any) => {
      state.showToast = false;
      state.message = '';
      state.isError = false;
    },
  },
});

export const {showToast, hideToast} = toastSlice.actions;

export default toastSlice.reducer;
