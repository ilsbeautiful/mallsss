<template>
  <div id="detail">
    <DetailNavBar  class="detail-nav-bar"/>
    <Scroll class="detail-wrapper-scroll" ref="scroll">
        <DetailSwiper :topImages="topImages"/>
        <DetailBaseInfo :goods='goods'/>
        <DetailShopInfo :shop='shop'/>
        <DetailGoodsInfo :detail-info='detailInfo' @imageLoad='imageLoad'/>
        <DetailParamInfo :param-info='paramInfo'/>
    </Scroll>
    
  </div>

</template>

<script>
import DetailNavBar from '@/views/detail/childcomps/DetailNavBar'
import DetailSwiper from '@/views/detail/childcomps/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childcomps/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childcomps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childcomps/DetailGoodsInfo'
import DetailParamInfo from '@/views/detail/childcomps/DetailParamInfo'

import Scroll from '@/components/common/scroll/Scroll'

import { getDetail, Goods, Shop, GoodsParam } from '@/network/detail' 


export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
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