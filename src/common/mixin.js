// 返回顶部的小按键组件
// import BackTop from 'components/content/backTop/BackTop'

import {debounce} from './utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemimgload', () => {
      refresh()
    })
  }
}





// export const backTopMixin = {
//   components: {
//     BackTop,
//   },
//   data () {
//     return {
//       // 设置展示首页回到顶部的小图标
//       showBackTop: false,
//     }
//   },
//   mounted () {
//     // 数据请求回来重新计算高度,防止图片数据加载太快导致没创建scroll元素就去获取该元素上的方法，所以把这个监听函数放到mounted里
//     let refresh = Tools.debounce(this.$refs.scroll.refresh, 300)

//       // 监听商品列表里的每张图片加载完成    
//     this.$bus.$on('itemImageLoaded', () => {

//       // 由于每张图片加载完成都会触发函数，所以外部引入工具方法文件进行防抖 
//       refresh();
//     })
//   },
//   methods: {
//     // 展示回到顶部的小图标
//     showBackTopImage (y) {
//       // 当元素上拉到1000px位置时展示回到顶部的小图标
//       this.showBackTop = y > 1000;
//     },
    
//     // 首页中回到顶部的点击事件
//     backTopClick () {
//       this.$refs.scroll.scrollTo(0, 0, 1000);
//     },

//     // 监听元素被滑动后的位置
//     getScrollPosition (position) {
//       let y = -position.y
//       // 回到顶部小图标
//       this.showBackTopImage(y);
//       // 当选项卡元素上拉到碰到顶部的导航栏时，让吸顶的选项卡展示
//       this.isShowTabControl = y >= this.tabControlOffsetTop;
//     },
//   }
// }