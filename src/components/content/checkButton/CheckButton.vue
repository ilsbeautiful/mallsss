<template>
  <div class="check-button" :class="{'checkActive':isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      isCheck: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    border: 3px solid #f5f2f2;
  }
  .checkActive{
    background-color: #f40;
    border-color: #f40
  }
</style>