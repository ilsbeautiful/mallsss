<template>
  <div id="detail">
    <DetailNavBar  class="detail-nav-bar" @titleClick='titleClick' ref="detailNavBar"/>
    <Scroll class="detail-wrapper-scroll" ref="scroll"
     :probe-type='3' @scroll="contentScroll">
        <DetailSwiper :topImages="topImages"/>
        <DetailBaseInfo :goods='goods'/>
        <DetailShopInfo :shop='shop'/>
        <DetailGoodsInfo :detail-info='detailInfo' @imageLoad="imgLoad"/>
        <DetailParamInfo ref="params" :param-info='paramInfo'/>
        <DetailCommentInfo ref="comment" :comment-info='commentInfo'/>
        <GoodsList ref="recommend" :goods='recommends'/>
    </Scroll>
    <DetailBottomBar @addCart='addToCart'/>
    <BackTop @click.native="backClick" v-show="isShowBackTop"/>
  </div>

</template>

<script>
import DetailNavBar from '@/views/detail/childcomps/DetailNavBar'
import DetailSwiper from '@/views/detail/childcomps/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childcomps/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childcomps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childcomps/DetailGoodsInfo'
import DetailParamInfo from '@/views/detail/childcomps/DetailParamInfo'
import DetailCommentInfo from '@/views/detail/childcomps/DetailCommentInfo'
import DetailBottomBar from '@/views/detail/childcomps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '@/components/content/goods/GoodsList'

import { itemListenerMixin, backTopMixin } from '@/common/mixin'
import { debounce } from '@/common/utils'
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/network/detail' 
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      
      this.commentInfo = data.rate.list[0]
    })
    
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    this.getThemeTopY = debounce(()=> {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
    }, 100)
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex != i) {
          if (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {
            this.currentIndex = i 
            this.$refs.detailNavBar.currentIndex = i;
          }
        }
      }
      this.ilstenShowBackTop(position)
    },
    addToCart() {
      // 获取信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      this.addCart(product).then(res => {
        this.$toast.show('加入购物车成功~~');
      })      
    }
  },
  mounted() {
    
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  }

}

</script>

<style scoped>
 #detail{
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }
  .detail-nav-bar{
    position: relative;
    z-index: 2;
    background-color: #fff;
  }

  .detail-wrapper-scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
</style>