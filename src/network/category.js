import { request } from './request'

export function getCategorydata() {
  return request({
    url: '/category'
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
