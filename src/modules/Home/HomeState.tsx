import {createSlice} from '@reduxjs/toolkit';

interface HomeState {
  post: {
    current_page: number;
    last_page: number;
    data: Array<object>;
    total: number;
  };
  auction: {
    current_page: number;
    last_page: number;
    data: Array<object>;
    total: number;
  };
  liveAuction: {
    data: Array<object>;
    total: number;
  };
  auction_buy_now: {
    current_page: number;
    last_page: number;
    data: Array<object>;
    total: number;
  };
  detailAuction: any;
  slider: {
    images: Array<object>;
    links: Array<object>;
  };
  background: any;
  auction_tab: string;
}

const initialState: HomeState = {
  post: {
    current_page: 1,
    last_page: 1,
    data: [],
    total: 0,
  },
  auction: {
    current_page: 1,
    last_page: 1,
    data: [],
    total: 0,
  },
  liveAuction: {
    data: [],
    total: 0,
  },
  auction_buy_now: {
    current_page: 1,
    last_page: 1,
    data: [],
    total: 0,
  },
  detailAuction: null,
  slider: {
    images: [],
    links: [],
  },
  background: {},
  auction_tab: 'auction',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    clearAllStateHome: () => initialState,

    saveAuction: (state, action) => {
      state.auction = action.payload;
    },
    saveAuctionBuyNow: (state, action) => {
      state.auction_buy_now = action.payload;
    },
    saveLiveAuction: (state, action) => {
      state.liveAuction = action.payload;
    },
    removeItemAuction: (state, action) => {
      let filterArr = state.auction.data.filter(
        (item: any) => item.id !== action.payload.id,
      );
      state.auction.data = filterArr;
    },
    savePost: (state, action) => {
      state.post = action.payload;
    },
    saveDetailAuction: (state, action) => {
      state.detailAuction = action.payload;
    },
    saveBackground: (state, action) => {
      state.background = action.payload;
    },
    saveDataSlider: (state, action) => {
      let images: Array<object> = [];
      let links: Array<object> = [];
      action.payload.forEach(async (element: any) => {
        images.push({
          type: 'image',
          uri: element.link_image,
          ads: true,
        });
        links.push(element.link_web);
      });
      state.slider.images = images;
      state.slider.links = links;
    },
    saveAuctionTab: (state, action) => {
      state.auction_tab = action.payload;
    },
  },
});

export const {
  savePost,
  saveAuction,
  saveAuctionBuyNow,
  saveLiveAuction,
  removeItemAuction,
  saveDataSlider,
  saveBackground,
  saveAuctionTab,
} = homeSlice.actions;

export default homeSlice.reducer;
