<template>
<!-- 底部内部的东西都会展示同一个图片,同一个文字 -->
    <div class="tab-bar-item" @click="itemClick">
      <!-- 插槽最好用div包裹起来。插槽会被替换成相对应的标签内容,所以不建议在插槽上添加属性 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      
      <div v-else ><slot name="item-icon-active"></slot></div>
      
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      //isActive: true
    }
  },
  computed: {
    //导航切换图片切换
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    //动态改变文字颜色
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
  
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 由于img标签使用时底部会多出3px的空间,为了消除掉 */
    vertical-align: middle;

    margin-bottom: 2px;
  }
</style>