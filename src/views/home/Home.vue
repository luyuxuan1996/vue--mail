<template>
  <div id="home">
    <!-- 导航 -->
    <NavBar class="home-nav"><div slot="middle">购物街</div></NavBar>

    <!-- 轮播图 -->
    <HomeSwiper :banners="banners"></HomeSwiper>

    <!-- 推荐 -->
    <HomeRecommend :recommends="recommends"></HomeRecommend>

    <!-- 流行 -->
    <HomePopular></HomePopular>

    <!-- 选项 -->
    <TabControl class="tab-control" :titles="['流行','新款','精选']"></TabControl>

    <!-- 商品 -->
    <GoodsList :goods="goods['pop'].list"></GoodsList>

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
//导入顶部导航
import NavBar from 'components/common/navbar/NavBar'
//导入选项
import TabControl from 'components/content/tabControl/TabControl'
//导入商品
import GoodsList from 'components/content/goods/GoodsList'


//导入推荐
import HomeRecommend from './childComps/HomeRecommend'
//导入流行
import HomePopular from './childComps/HomePopular'
//导入轮播图
import HomeSwiper from './childComps/HomeSwiper'

//导入请求封装
import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeRecommend,
    HomePopular,
    HomeSwiper
  },
  //调用
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  //请求数据封装
  methods: {
    //请求轮播图 导航
    getHomeMultidata() {
      getHomeMultidata().then(
        res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        },
        err => {
          console.log(err);
        }
      )
    },
    //请求商品
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(
        res => {
          //可变参数
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        },
        err => {
          console.log(err);
        }
      )
    }
  },
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    font-weight: 600;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  }
</style>