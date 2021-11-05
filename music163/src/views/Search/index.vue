<template>
  <div>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      shape="round"
      @search="search"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="songList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          @click="clickSearch(item.first)"
          v-for="item in hotList"
          :key="item.first"
        >
          {{ item.first }}
        </span>
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">搜索结果</p>
      <van-cell-group>
        <SongItem
          v-for="item in songList"
          :key="item.id"
          :title="item.al.name"
          :label="item.ar[0].name"
          :id="item.id"
        ></SongItem>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { getHotSearch, search } from '@/api/Search'
export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
      hotList: [],
      songList: [],
    }
  },
  async created() {
    const { code, result } = await getHotSearch()
    if (code === 200) {
      this.hotList = result.hots
    }
  },
  methods: {
    async search() {
      // console.log('需要搜索', this.keyword)
      const { code, result } = await search(this.keyword)
      if (code === 200) {
        console.log(result)
        this.songList = result.songs
      }
    },
    clickSearch(keyword) {
      this.keyword = keyword
      this.search()
    },
  },
}
</script>

<style lang="less" scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
