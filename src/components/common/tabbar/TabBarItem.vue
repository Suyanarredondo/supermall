<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>





<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'rgb(250, 161, 120)',
      // default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick(){
      // console.log(this.path);
      // console.log('itemClick');
      this.$router.push('/location').catch(err => { console.log(err) })
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive(){
      return this.$route.path.includes(this.path) == 1
      // return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}: {};
    }
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 4px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .active{
    color: rgb(250, 161, 120);
    font-weight: bold;
  } */
</style>