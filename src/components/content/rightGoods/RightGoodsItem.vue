<template>
  <div class="item">
    <a :href="link">
      <img :src="image" alt="">
      <p>{{title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RightGoodsItem',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    link: {
      type: String,
      default() {
        return ''
      }
    },
    image: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.item img {
  width: 100px;
}
.item {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>