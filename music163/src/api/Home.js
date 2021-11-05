import axios from '@/utils/request'

// 获取歌单列表
export function getSongList() {
  return axios({
    method: 'get',
    url: '/personalized',
    params: {
      limit: 6,
    },
  })
}

export function getNewSongs() {
  return axios({
    method: 'get',
    url: '/personalized/newsong',
  })
}
