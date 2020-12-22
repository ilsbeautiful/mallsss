<template>
  <div class="cart-bottom-bar">
    <div class="select-all" @click="checkClick">
      <check-button class="checked" :isCheck="getSelect"></check-button>
      <span>全选</span>
    </div>
    <div class="price-all">
      <span>合计：</span>
      <span class="price">{{getPrice}}</span>
    </div>
    <div class="settlement" @click="payClick">去支付({{getGoodsNum}})</div>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex'

  export default {
    components:{
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      getPrice () {
        return '￥' + this.cartList
          .filter( item => item.check)
            .reduce( (preValue, item) =>  preValue + (item.price * item.count), 0)
              .toFixed(2)
      },
      getGoodsNum () {
        return this.cartList
          .filter( item => item.check)
            .length
      },
      getSelect () {
        return this.cartList.length !== 0 ? !this.cartList.find( item => !item.check) : false;
      }
    },
    methods: {
      checkClick () {
        if (this.getSelect) {
          this.cartList.forEach( (item) => {
            item.check = false;
          })
        }else{
           this.cartList.forEach( (item) => {
            item.check = true;
          })
        }
      },
      payClick () {
        let msg = '';
        if (this.getGoodsNum) {
          msg = '安全支付通道建立中';
        }else{
          msg = '您还没有选择商品哦~~';
        }
        this.$toast.show(msg, 2000);
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar{
    position: absolute;
    display: flex; 
    width: 100vw;
    height: 40px;
    bottom: 49px;
    left: 0px;
    border: 1px solid #f5f2f2;
  }  

  .price-all,
  .settlement{
    flex:1;
    line-height: 40px;
    text-align: center;
  }

  .select-all{
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
  }
  .select-all span{
    margin-left: 5px;
    margin-top: 1px;
  }
  .checked{
    height: 60%;
  }
  
  .price-all{
    flex: 2;
    text-align: left;
    font-size: 14px;
  }
  .price{
    color: #f40;
    font-size: 20px;
  }

  .settlement{
    background-color: #f40;
    color: #fff;
  }
</style>