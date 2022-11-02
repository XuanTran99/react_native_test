import moment from 'moment';

// index lấy theo constant/setup.tsx
export function checkWinAuction(userId: number, auctionHistory: Array<object>) {
  try {
    let obj: any = auctionHistory.find((x: any) => x.bidder_id === userId);
    if (obj.is_bidder_won === 'Yes') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export function checkAuctionLive(auction: any) {
  try {
    //đấu giá trực tiếp
    if (auction.type === 1) {
      const auctionTime = moment(
        auction.live_auction_date + ' ' + auction.live_auction_start_time,
        'YYYY-MM-DD HH:mm:ss',
      ).startOf('seconds');
      const current = moment(new Date()).startOf('seconds');
      const checkTime = moment.duration(auctionTime.diff(current)).asSeconds();

      if (checkTime > 0) {
        return 'prepare';
      } else {
        return 'pendding';
      }
    }
    if (auction.type === 2) {
      return 'online';
    }
    if (auction.type === 3) {
      return 'buy-now';
    }
  } catch (error) {
    // console.log(error);

    return false;
  }
}

export function caculatorTimeBegin(auction: any) {
  try {
    if (auction.type !== 1) {
      return false;
    }
    const auctionTime = moment(
      auction.live_auction_date + ' ' + auction.live_auction_start_time,
      'YYYY-MM-DD HH:mm:ss',
    ).startOf('seconds');
    const current = moment(new Date()).startOf('seconds');
    const checkTime = moment.duration(auctionTime.diff(current)).asSeconds();
    return checkTime;
  } catch (error) {
    return false;
  }
}
