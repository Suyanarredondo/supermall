<template>
  <div id="right-goods">
    <right-goods-item class="item" v-for="(item, index) in rightList" :key="index" :title="item.title" :image="item.image" :link="item.link"></right-goods-item>
  </div>
</template>

<script>
import RightGoodsItem from './RightGoodsItem'

export default {
  name: 'RightGoods',
  data() {
    return {
      // title: this.rightList.
    }
  },
  props: {
    rightList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    RightGoodsItem
  }
}
</script>

<style scoped>
#right-goods {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.item {
  flex: 1;
}
</style>