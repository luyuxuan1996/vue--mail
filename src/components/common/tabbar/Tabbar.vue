<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* box-shadow(x,y,blur-radius,spread-radius,color) 属性向框添加一个或多个阴影 
        x : 阴影水平偏移量 正值 X轴向右 
        y : 阴影的垂直偏移量 正值 Y轴向下
        blur-radius: 阴影模糊半径：此参数是可选，只能为正值，值为0时，表示阴影不具有模糊效果，值越大阴影的边缘就越模糊
        spread-radius: 此参数可选，其值可为正负值，正值，则整个阴影都延展扩大，反之，则缩小
    */
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  }
 
</style>
