<template>
  <div>
    <left-bar-item v-for="(item,index) in list" :key="index" :title="item.title" @click.native="itemClick(index)" :class="{active: index === currentIndex}"></left-bar-item>
  </div>
</template>

<script>
import LeftBarItem from './LeftBarItem'

export default {
  name: 'LeftBar',
  props: {
    list: {
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
  components: {
    LeftBarItem
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick',index)
    }
  },

}
</script>

<style scoped>
div {
  color: black   
}
.active {
  background-color: #fff;
  border-left: 5px solid var(--color-tint)
}
</style>