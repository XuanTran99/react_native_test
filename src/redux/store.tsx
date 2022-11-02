import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import socket from '../modules/Socket/SocketState';
import home from '../modules/Home/HomeState';
import user from '../modules/User/UserState';
import toast from '../components/Toast/ToastState';
import loading from '../components/Loading/LoadingState';
import auction from '../modules/Auction/AuctionState';
import auctionManager from '../modules/AuctionManager/AuctionManagerState';
import post from '../modules/Post/PostState';
import history from '../modules/User/History/HistoryState';
import interest from '../modules/InterestCost/InterestCostState';
import report from '../modules/Managers/ManagerState';
import group from '../modules/GroupManager/GroupManagerState';
import customer from '../modules/Managers/Customer/CustomerState';
import workflow from '../modules/Managers/Workflow/WorkflowState';
import product from '../modules/Product/ProductState';
import favorite from '../modules/Favorites/FavoriteState';

const reducer = combineReducers({
  socket,
  home,
  user,
  toast,
  loading,
  auction,
  auctionManager,
  post,
  history,
  interest,
  group,
  report,
  customer,
  workflow,
  product,
  favorite,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
