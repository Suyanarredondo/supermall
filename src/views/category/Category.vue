<template>
  <div class="wrapper" id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <scroll class="content">
      <left-bar :list="list" @itemClick="itemClick"></left-bar>
    </scroll>

    <scroll class="content-another">
      <right-goods :rightList="rightList"></right-goods>
    </scroll>

 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import LeftBar from 'components/content/leftBar/LeftBar'
import RightGoods from 'components/content/rightGoods/RightGoods'

import { getCategorydata, getSubCategory } from 'network/category'


export default {
  name: 'Category',
  data() {
    return {
      list: null,
      currentIndex: 0,
      rightList: null,
    }
  },
  components: {
    NavBar,
    Scroll,
    LeftBar,
    RightGoods,
  },  
  created() {
    getCategorydata().then(res => {
        // console.log(res)
        let data = res.data;

        this.list = data.category.list;
        this.$nextTick(() => {
          this.getSubCategory();
        })
      }) 
    
  },
  methods: {
    getSubCategory(index=0) {
      console.log(index)
      let maitKey = this.list[index].maitKey
      getSubCategory(maitKey).then(res => {
        let rightList = res.data.list
        this.rightList = rightList;
        console.log(this.rightList)
      })
    },


    itemClick(index) {
      this.currentIndex = index
      this.getSubCategory(index)
    }
    
  },
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  /* z-index: 999; */
  /* position: absolute; */

}
.content {
  background-color: #f6f6f6;
  width: 27%;
  height: calc(100% - 93px);
  overflow: hidden;
  display: inline-block;
}
.content-another {
  width: 73%;
  height: calc(100% - 93px);
  overflow: hidden;
  display: inline-block;
}
/* .wrapper {
  height: 500px;
  background-color: lightblue;
} */
</style>