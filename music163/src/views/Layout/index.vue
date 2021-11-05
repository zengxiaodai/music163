<template>
  <div class="main">
    <van-nav-bar
      fixed
      :title="$route.meta.title"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <RouterView></RouterView>

    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">
        搜索
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style scoped lang="less">
/* 深度作用选择器 */
/* 
  scoped： 可以保证当前组件的样式就影响当前组件，不会影响别的组件
  原理：
    1. 给当前组件所有的样式的选择器增加一个属性选择器
    2. 给当前组件的结构也添加上同样的属性
*/
/* .main[data-v-5d5a9732]  */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
/* .van-nav-bar[data-v-5d5a9732] */
.van-nav-bar {
  background-color: rgb(97, 141, 199);
}
.van-nav-bar {
  ::v-deep {
    // 只要包裹在v-deep内的选择器，就不会在添加 [data-v-5d5a9732]
    .van-icon {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
