<template>
  <div class="HomeSwiper">
    <Swiper>
      <SwiperItem v-for="(item,key) in banners" :key="key">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .HomeSwiper img{
    width: 100%;
  }
</style>