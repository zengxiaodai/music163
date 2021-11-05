/* 封装和搜索相关的接口 */
import axios from '@/utils/request'

// 获取热门搜索关键字
export function getHotSearch() {
  return axios({
    method: 'get',
    url: '/search/hot',
  })
}

export function search(keywords) {
  return axios({
    method: 'get',
    url: '/cloudsearch',
    params: {
      keywords,
      limit: 20,
    },
  })
}
