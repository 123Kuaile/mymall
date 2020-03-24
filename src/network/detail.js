import { Request } from './request'

export function getDetailData(iid) {
  return Request({
    url: "/api/wh/detail",
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return Request({
    url: '/api/wh/recommend'
  })
}

//商品标题价格之类的杂项数据请求
export class CProductInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title,
      this.newPrice = itemInfo.price,
      this.oldPrice = itemInfo.oldPrice,
      this.discount = itemInfo.discountDesc,
      this.sales = columns[0],
      this.collect = columns[1],
      this.consignment = shopInfo.services[3].name,
      this.express = shopInfo.services;
  }
}
//店家信息请求
export class Restaurant {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

//商品参数信息请求
export class GoodsParam {
  constructor(info, rule) {
    // images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
