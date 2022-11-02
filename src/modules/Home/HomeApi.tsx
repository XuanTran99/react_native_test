import {createAsyncThunk} from '@reduxjs/toolkit';
import {hideLoading, showLoading} from '../../components/Loading/LoadingState';
import {showToast} from '../../components/Toast/ToastState';
import {ApiUrl} from '../../constant/apiUrl';
import client from '../../utils/apiUtils';

import {
  saveAuction,
  saveAuctionBuyNow,
  saveBackground,
  saveDataSlider,
  saveLiveAuction,
  savePost,
} from './HomeState';

export const loadPosts: any = createAsyncThunk(
  'home/loadPosts',
  async (params: any, thunkApi: any) => {
    try {
      thunkApi.dispatch(showLoading());
      let res: any = await client.get(ApiUrl.GET_POST, {params: params});
      thunkApi.dispatch(hideLoading());

      if (res.data.result || res.data.status) {
        thunkApi.dispatch(savePost(res.data.data));
        return true;
      }
      return false;
    } catch (error: any) {
      thunkApi.dispatch(hideLoading());
      thunkApi.dispatch(showToast({message: {}, isError: true}));
    }
  },
);

export const loadAuctions = createAsyncThunk(
  'home/loadAuctions',
  async (data: any, thunkApi) => {
    try {
      thunkApi.dispatch(showLoading());
      const resp = await client.get(ApiUrl.GET_AUCTION, {params: data});
      thunkApi.dispatch(hideLoading());
      if (resp.data.result || resp.data.status) {
        const res = resp.data.data;
        thunkApi.dispatch(saveAuction(res));
      } else {
        thunkApi.dispatch(
          showToast({message: resp.data.message, isError: true}),
        );
      }
    } catch (error: any) {
      console.log('====================================');
      console.log(error.response);
      console.log('====================================');
      thunkApi.dispatch(hideLoading());
      thunkApi.dispatch(showToast({message: {}, isError: true}));
    }
  },
);

export const loadLiveAuctions = createAsyncThunk(
  'home/loadLiveAuctions',
  async (data: any, thunkApi) => {
    try {
      thunkApi.dispatch(showLoading());
      const resp = await client.get(ApiUrl.GET_LIVE_AUCTION, {params: data});
      thunkApi.dispatch(hideLoading());
      if (resp.data.result || resp.data.status) {
        thunkApi.dispatch(
          saveLiveAuction({
            data: resp.data.data,
            total: resp.data.data.length,
          }),
        );
      } else {
        thunkApi.dispatch(
          showToast({message: resp.data.message, isError: true}),
        );
      }
    } catch (error: any) {
      console.log('===============loadLiveAuctions=====================');
      console.log(error.response);
      console.log('====================================');
      thunkApi.dispatch(hideLoading());
      thunkApi.dispatch(showToast({message: {}, isError: true}));
    }
  },
);

export const loadAuctionBuyNow = createAsyncThunk(
  'home/loadAuctionBuyNow',
  async (data: any, thunkApi) => {
    try {
      thunkApi.dispatch(showLoading());
      const resp = await client.get(ApiUrl.GET_AUCTION, {params: data});
      thunkApi.dispatch(hideLoading());
      if (resp.data.result || resp.data.status) {
        const res = resp.data.data;
        thunkApi.dispatch(saveAuctionBuyNow(res));
      } else {
        thunkApi.dispatch(
          showToast({message: resp.data.message, isError: true}),
        );
      }
    } catch (error: any) {
      console.log(
        '============loadAuctionBuyNow error========================',
      );
      console.log(error.response);
      console.log('====================================');
      thunkApi.dispatch(hideLoading());
      thunkApi.dispatch(showToast({message: {}, isError: true}));
    }
  },
);

export const loadSlider = createAsyncThunk(
  'home/loadSlider',
  async (data: any, thunkApi) => {
    try {
      thunkApi.dispatch(showLoading());
      const resp = await client.get(ApiUrl.LOAD_SLIDER, {params: data});
      thunkApi.dispatch(hideLoading());
      if (resp.data.result || resp.data.status) {
        const res = resp.data.data;
        // alert(JSON.stringify(res));
        thunkApi.dispatch(saveDataSlider(res));
      } else {
        thunkApi.dispatch(
          showToast({message: resp.data.message, isError: true}),
        );
      }
    } catch (error: any) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      thunkApi.dispatch(hideLoading());
      thunkApi.dispatch(showToast({message: {}, isError: true}));
    }
  },
);

export const loadHomeBackground = createAsyncThunk(
  'home/loadBackground',
  async (data: any, thunkApi) => {
    try {
      const resp = await client.get(ApiUrl.HOME_BACKGROUND);
      if (resp.data.result || resp.data.status) {
        const res = resp.data.data;
        thunkApi.dispatch(saveBackground(res));
      } else {
        thunkApi.dispatch(
          showToast({message: resp.data.message, isError: true}),
        );
      }
    } catch (error: any) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      thunkApi.dispatch(showToast({message: {}, isError: true}));
    }
  },
);
