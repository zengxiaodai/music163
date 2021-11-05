import axios from '@/utils/request'

// 播放页 - 获取歌曲详情
export const getSongByIdAPI = (id) =>
  axios({
    url: `/song/detail?ids=${id}`,
    method: 'GET',
  })

// 播放页 - 获取歌词
export const getLyricByIdAPI = (id) =>
  axios({
    url: `/lyric?id=${id}`,
    method: 'GET',
  })
