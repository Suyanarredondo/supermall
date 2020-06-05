<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>

    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from 'common/utils'
import { itemListenerMixin } from 'common/mixin'
import { backTopMixin } from 'common/mixin'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    // console.log('activated')
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // console.log('deactivated')
    // 1. 保存 y 值
    this.saveY = this.$refs.scroll.scroll.y

    // 2. 取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  destroyed() {
    console.log('home destroyed')
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');


    // 3. 监听item中图片加载完成
    // this.$bus.$on('itemImageLoad', () => {
    //   console.log('------------')
    //   this.$refs.scroll && this.$refs.scroll.refresh()
    // })

  },
  mounted() {
    // // 1. 图片加载完成的事件监听
    // const refresh = debounce(this.$refs.scroll.refresh, 500)

    // // 对监听的事件进行保存
    // this.itemImgListener = () => {
    //   refresh()
    // }

    // this.$bus.$on('itemImageLoad', this.itemImgListener)
    
    // // 2. 获取tabControl的offsetTop
    // // console.log(this.$refs.tabControl)
    // // console.log(this.$refs.tabControl.$el.offsetTop)
  },
  methods: {
    /**
     * 事件监听相关的方法
     */

   

    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1: 
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      // 1. 判断backTop是否显示
      this.listenShowBackTop(position)

      // 2. 决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp();    
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },



    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; 
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* vh是视口高度 */
  height: 100vh;
  position: relative;
}
.home-nav {
  /* background-color: rgb(247, 165, 165); */
  background-color: var(--color-tint);
  max-width: 1200px;
  margin: 0 auto;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  /* height: 500px; */
  height: calc(100% - 93px);
  position: absolute;
  /* margin-top: 44px; */
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control { 
  position: relative;
  z-index: 9;
}
</style>
