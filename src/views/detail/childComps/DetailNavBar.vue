<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        class="title-item" 
        :key=index 
        :class="{ active:index===currentIndex }"
        @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    },
    backClick() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
/* .nav-bar div {
  color: black
} */
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
  color: black
}
.active {
  color: var(--color-high-text);
  /* border-bottom: 3px solid pink; */
}
.back {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back img {
  width: 15px;
  height: 15px;
  /* margin-top: 10px; */
}
</style>