<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    // message: {
    //   type: String,
    //   default() {
    //     return ''
    //   }
    // },
    // show: {
    //   type: Boolean,
    //   default() {
    //     return true
    //   }
    // },
  },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration) {
      // console.log('777777777777777777777777777777777')
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration)
    }
  },
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgb(0, 0, 0, .5);
    color: white;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    transform: translate(-50%, -50%);
    line-height: 40px;
    z-index: 9;
  }
</style>