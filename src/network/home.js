import { Request } from './request'

export function getHomeSwiper() {
  return Request({
    url: "/home/multidata"
  })
}
export function getHomeProduct(type, page) {
  return Request({
    url: "/api/wh/home/data",
    params: {
      type,
      page
    }
  })
}