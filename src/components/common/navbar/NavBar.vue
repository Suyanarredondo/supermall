<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  /* background-color: rgb(236, 174, 174); */
  box-shadow: 0 2px 5px rgba(100, 100, 100, .3);
}
.left, .right {
  width: 60px;
  /* background-color: red; */
}

.center {
  /* 如果只剩下一个元素的话flex: 1 会将剩余部分全部占据 */
  flex: 1;
  color: white;
  /* background-color: blue; */
}
</style>