export const API_URL = 'https://daugia.onland.tech';
// export const API_NODE_URL = 'http://192.168.1.14:5000';
export const API_NODE_URL = 'http://notidaugia.alphasoftware.vn';
export const ApiUrl = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  GET_COIN: '/api/get-user-balance',
  REGISTER: '/api/auth/register',
  GET_OTP: '/api/get-otp-user',
  CHECK_OTP: '/api/check-otp-user',
  STATUS_OTP: '/api/status-otp-user',
  HOME_BACKGROUND: '/api/get-background',
  EKYC: '/api/user-ekyc',
  LIST_BRAND: '/api/brand/list',
  GET_COMPANY: '/api/get-auction-company',
  UPDATE_COMPANY: '/api/user/update-company',
  //bank
  GET_LIST_BANK: '/api/get-bank-list',
  CREATE_TRANSFER: '/api/create-deposit-payment',
  GET_VNPAY_URL: '/api/vnpay-payment/create',
  GET_MOMO_URL: '/api/momo-payment/create',
  TRANSFRER_COIN: '/api/deposit-coin',
  CREATE_ESCROW: '/api/deposit-escrow',

  /* ----------------------------- Post ----------------------------- */

  GET_POST_FORM: '/api/categories',
  GET_POST_FORM_TYPE: '/api/get-sub-category',
  GET_POST_TYPE: '/api/get-post-type-vip',
  CREATE_POST: '/api/posts/store',
  UPDATE_POST: '/api/posts/update',
  GET_POST_USER: '/api/posts/get-post-of-user',
  CHANGE_AUCTION_BUY_POST: '/api/posts/change-auction',
  GET_POST: '/api/posts',
  GET_DETAIL_POST: '/api/posts/show',

  GET_PROVINCE: '/get-province',
  GET_DISTRICT: '/get-district',
  GET_WARD: '/get-ward',

  UPLOAD_POST_DOCUMENT: '/api/post/uploads/document',
  UPLOAD_POST_FILE: '/api/post/uploads/file',
  UPLOAD_POST_LINK: '/api/post/uploads/link',

  /* ---------------------------- Auction --------------------------- */
  GET_AUCTION: '/api/view-auctions',
  GET_AUCTION_ADMIN: '/api/auctions',
  GET_DETAIL_AUCTION: '/api/auction-details/',
  PRICING: '/api/auction/save-bid',
  GET_CATEGORY: '/api/categories',
  GET_SELLERS: '/api/get-user-seller',
  GET_SUB_CATEGORY: '/api/sub-categories',
  GET_SUB_CATEGORY_ITEM: '/api/sub-category-item',
  GET_AUCTION_CATEGORY: '/api/auction-category',
  ADD_AUCTION: '/api/auction/store',
  EDIT_AUCTION: '/api/auction/update',
  SAVE_BID: '/api/auction/save-bid',
  GET_MY_AUCTIONS: '/api/bidder/my-auctions',
  GET_CONTRACT: '/api/get-contract',
  SIGN_CONTRACT: '/api/sign-contract',
  GET_DEPOSIT_MONEY: '/api/get-deposit-money-for-auctions/',
  DEPOSIT_MONEY: '/api/deposit-money/',
  AUCTION_UPLOAD_IMAGE: '/api/auction/upload/image',
  BUY_NOW_AUCTION: '/api/bidder/auctions/buy-now',
  UPLOAD_AUCTION_DOCUMENT: '/api/auction/upload/document',
  UPLOAD_AUCTION_FILE: '/api/auction/upload/file',
  UPLOAD_AUCTION_LINK: '/api/auction/upload/link',
  HISTORY_GET_COIN: '/api/payment-history/coin',
  HISTORY_GET_MONEY: '/api/payment-history/money',
  LOAD_SLIDER: '/api/get-slider',
  GET_AUCTION_CRONJOB: '/api/check-auction-cronjob',

  BID_WIN: '/api/auction/bid-win',
  BID_DESTROY_WIN: '/api/auction/destroy-win',

  /* ---------------------------- lãi vay --------------------------- */
  INTEREST_COST: '/api/calculate-interest-cost',

  /* ---------------------------- ql khách hàng --------------------------- */
  GET_CUSTOMERS: '/api/customers',

  ADD_CUSTOMERS: '/api/customers/create',
  UPDATE_CUSTOMERS: '/api/customers/update',
  DELETE_CUSTOMERS: '/api/customers/delete',
  DETAIL_CUSTOMERS: '/api/customers/show',

  GET_CUSTOMERS_GROUP: '/api/customer-groups',
  ADD_CUSTOMERS_GROUP: '/api/customer-groups/create',
  UPDATE_CUSTOMERS_GROUP: '/api/customer-groups/update',
  UPDATE_STATUS_CUSTOMERS_GROUP: '/api/customer-groups/toggle',
  DETAIL_CUSTOMERS_GROUP: '/api/customer-groups/show',

  /* ---------------------------- ql nhóm lv--------------------------- */
  GET_WORK_GROUP: '/api/work_groups',
  ADD_WORK_GROUP: '/api/work_groups/create',

  /* ---------------------------- ql công việc--------------------------- */
  WORK_BEGINNING: '/api/work-beginnings',
  DETAIL_WORK_BEGINNING: '/api/work-beginnings/show',
  UPDATE_WORK_BEGINNING: '/api/work-beginnings/update',
  UPDATE_WORK_PROCESS: '/api/work-beginnings/update-status',
  ADD_WORK_BEGINNING: '/api/work-beginnings/create',
  WORK_BEGINNING_TYPE: '/api/work-beginning-types',
  DELETE_WORK_BEGINNING: '/api/work-beginnings/destroy',
  GET_NOTES: '/api/notes',
  ADD_NOTES: '/api/notes/create',
  DETAIL_NOTES: '/api/notes/show',
  UPDATE_NOTES: '/api/notes/update',
  DELETE_NOTES: '/api/notes/delete',

  /* ---------------------------- thống kê--------------------------- */
  WORK_REPORT: '/api/reports/works',

  /* ---------------------------- Quan tâm--------------------------- */
  FAVORITE_POST: '/api/fav-posts',
  ADD_FAVORITE_POST: '/api/fav-posts/create',
  DELETE_FAVORITE_POST: '/api/fav-posts/delete',
  DETAIL_FAVORITE_POST: '/api/fav-posts/show',

  FAVORITE_AUCTION: '/api/fav-auctions',
  ADD_FAVORITE_AUCTION: '/api/fav-auctions/create',
  DELETE_FAVORITE_AUCTION: '/api/fav-auctions/delete',
  DETAIL_FAVORITE_AUCTION: '/api/fav-auctions/show',

  /* ---------------------------- thông báo đẩy--------------------------- */
  SET_SCHEDULE_NOTIFICATION: '/fcm/set-schedule-notification',
  CANCEL_SCHEDULE_NOTIFICATION: '/fcm/cancel-schedule-notification',
  PUSH_NOTIFICATION: '/fcm/push-notification',
};
