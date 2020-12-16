<template>
  <div id="home">
    <!-- 导航 -->
    <NavBar class="home-nav"><div slot="middle">购物街</div></NavBar>

    <!-- 轮播图 -->
    <HomeSwiper :banners = "banners"></HomeSwiper>
  </div>
</template>

<script>
//导入顶部导航
import NavBar from 'components/common/navbar/NavBar'
//导入请求封装
import {getHomeMultidata} from 'network/home'
//导入轮播图
import HomeSwiper from './childComps/HomeSwiper'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper
  },
  //请求数据
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    },
    err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>