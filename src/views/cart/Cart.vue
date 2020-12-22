<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    data() {
      return {}
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters({
        length:'cartLength',
      })
    }
  }
</script>

<style scoped>
  .cart-nav-bar{
    font-size: 20px;
    font-weight: 600;
    font-family: '宋体';
    color: #fff;
    background-color: var(--color-tint);
  }
</style>