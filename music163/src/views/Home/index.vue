<template>
  <div class="home">
    <p class="title">推荐歌单</p>
    <div>
      <van-row gutter="10">
        <van-col span="8" v-for="item in list" :key="item.id">
          <van-image
            width="100%"
            height="3rem"
            fit="cover"
            :src="item.picUrl"
          />
          <p class="song_name">
            {{ item.name }}
          </p>
        </van-col>
      </van-row>
    </div>
    <p class="title">最新音乐</p>
    <van-cell-group>
      <SongItem
        v-for="item in newList"
        :key="item.id"
        :title="item.name"
        :label="item.song.artists[0].name"
        :id="item.id"
      ></SongItem>
    </van-cell-group>
  </div>
</template>

<script>
import { getSongList, getNewSongs } from '@/api/Home'
export default {
  name: 'Home',
  data() {
    return {
      // 歌单列表
      list: [],
      // 新歌列表
      newList: [],
    }
  },
  created() {
    this.getSongList()
    this.getNewSongs()
  },
  methods: {
    async getSongList() {
      const { code, result } = await getSongList()
      // const { code, result } = res
      if (code === 200) {
        this.list = result
      }
    },
    async getNewSongs() {
      const { code, result } = await getNewSongs()
      if (code === 200) {
        this.newList = result
      }
    },
  },
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.van-icon {
  font-size: 20px;
}
</style>
