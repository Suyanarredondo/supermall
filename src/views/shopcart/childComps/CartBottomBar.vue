<template>
  <div class="content">
    <div class="bottom-bar">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="turnToAll"></check-button>
      <span class="bottom-bar-text">全选</span>
    </div>

    <div class="total-price">
      合计: <span>{{totalPrice}}</span>
    </div>
    
    <div class="calculate" @click="calcClick">
      去计算 <span>({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton,
  },
  props: {
  
  },
  data() {
    return {
      
    }
  },
  methods: {
    turnToAll() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false);
      }
      else {
        this.cartList.forEach(item => item.checked = true)
      }
      // this.cartList.forEach(item => item.checked = !this.isSelectAll)

    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品', 1500)
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price*item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.filter(item => !item.checked).length)
    }
  },
}
</script>

<style scoped>
.content {
  display: flex;
  position: absolute;
  bottom: 49px;
  width: 100%;
  height: 40px;
  background-color: #eee;
}
.bottom-bar { 

  /* background-color: red; */

  /* line-height: 40px; */
  font-size: 14px;
  display: flex;
  align-items: center;

}
.check-button {
  margin-left: 10px;
}
.bottom-bar-text {
  margin-left: 10px;
}
.total-price {
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
}
.calculate {
  height: 40px;
  width: 90px;
  line-height: 40px;
  background-color: var(--color-tint);
  position: absolute;
  right: 0;
  text-align: center;
  color: rgb(255, 255, 255);
}
</style>