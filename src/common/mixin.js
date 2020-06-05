// 混入
import { debounce } from './utils'
import { BACK_POSITION } from 'common/const'

import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    // 1. 防抖 
    const refresh = debounce(this.$refs.scroll.refresh, 50)

    this.itemImgListener = () => {
      refresh()
      // console.log('1111')
      // this.$refs.scroll.refresh()
    }

    this.$bus.$on('itemImageLoad', this.itemImgListener)

  },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,

    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > BACK_POSITION
    }
  },
}