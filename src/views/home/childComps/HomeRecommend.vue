<template>
  <div class="HomeRecommend">
    <div v-for="(item,key) in recommends" :key="key" class="HomeRecommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .HomeRecommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .HomeRecommend-item {
    flex: 1;
  }
  .HomeRecommend-item img {
    width: 70px;
    height: 80px;
    margin-bottom: 5px;
  }
</style>