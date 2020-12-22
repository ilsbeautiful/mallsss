<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item 
        :itemInfo="item" 
        v-for="(item, index) in list" 
        :key="index"/>
    </scroll> 
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Scroll,
      CartListItem
    },
    activated () {
      // 购物车页面处于活跃，better-scroll高度刷新
      this.$refs.scroll.refresh();
    },
    computed: {
      ...mapGetters({
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 89px;
    overflow: hidden;
  }

</style>