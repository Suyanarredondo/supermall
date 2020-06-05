<template>
  <div id="left-bar-item" @click="itemClick">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'LeftBarItem',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    itemClick() {

    }
  },
}
</script>

<style scoped>
#left-bar-item {
  height: 50px;
  /* background-color: pink; */
  /* border-bottom: 1px solid white; */
  line-height: 50px;
  text-align: center;
}
</style>