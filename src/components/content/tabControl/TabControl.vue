<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="itemClick(index)" :class="{active: index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item {
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-size: 15px;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>