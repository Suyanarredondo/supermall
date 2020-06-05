import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-type'

export default {
  addCart(context, payload) {
    //payload 新添加的商品对象
    // let oldProduct = null
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //     break
    //   }
    // }
    return new Promise((resolve, reject) => {
      // 1. 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2。 判断oldProduct
      if(oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      }else{
        context.commit(ADD_TO_CART, payload)
        resolve('添加新商品成功')
      }
    })
  }
}