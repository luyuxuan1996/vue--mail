<template>
  <div>
    <Tabbar>
      <Tabbar-item path="/home" activeColor="deeppink">
      <!-- 在标签属性中引入时路劲前需要加 ~    @在build/webpack.base.config.js/resolve -->
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </Tabbar-item>
      <Tabbar-item path="/category"  activeColor="deeppink">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </Tabbar-item>
      <Tabbar-item path="/cart"  activeColor="deeppink">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </Tabbar-item>
      <Tabbar-item path="/profile"  activeColor="deeppink">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </Tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
  
</style>