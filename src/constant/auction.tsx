export const adminStatus = [
  {id: 1, name: 'Chưa giải quyết, chờ xử lý', value: 'pending'},
  {id: 2, name: 'Đã được phê duyệt', value: 'approved'},
  {id: 3, name: 'Từ chối', value: 'rejected'},
];

export const auctionStatus = [
  {id: 1, name: 'Mới', value: 'new'},
  {id: 2, name: 'Mở', value: 'open'},
  {id: 3, name: 'Cấm', value: 'suspended'},
  {id: 4, name: 'Đóng', value: 'closed'},
];

export const auctionType = {
  LIVE: 1, // trực tiếp
  ONLINE: 2, // online
  BUYNOW: 3, //mua ngay
};
