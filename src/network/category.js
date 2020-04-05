import { Request } from './request'


export function getCategory() {
  return Request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return Request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return Request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
