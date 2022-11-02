import {createSlice} from '@reduxjs/toolkit';
// Define a type for the slice state
interface LoadingState {
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: LoadingState = {
  isLoading: false,
};

export const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: state => {
      state.isLoading = true;
    },
    hideLoading: state => {
      state.isLoading = false;
    },
  },
});

export const {showLoading, hideLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;
