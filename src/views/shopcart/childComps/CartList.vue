<template>
  <div id="cart-list">
    <scroll class="content" ref="scroll">
      <!-- {{cartList}} -->
      <cart-list-item 
      v-for="(item, index) in cartList" 
      :item-info="item"
      :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  data() {
    return {
      
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    
  },
  watch: {
    
  },
}
</script>

<style scoped>
#cart-list {
  /* width: 100%; */
  height: calc(100% - 44px - 49px - 40px);
  position: relative;
}
.content {
  /* height: calc(100% - 93px); */
  height: 100%;
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  overflow: hidden;
}

</style>