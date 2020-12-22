<template>
  <div class="Toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        isShow: false,
      }
    },
    methods: {
      show(msg, duration=1000) {
        this.isShow = true;
        this.msg = msg;

        setTimeout(() => {
          this.isShow = false;
          this.msg = '';
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .Toast{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 100px;
    transform: translate3d(-50%, -50%, 0);
    padding: 0px 15px;
    border-radius: 15px;
    z-index: 999;
    color: #fff;
    background-color: rgba(0, 0, 0, .75);
  }
  .Toast div{
    line-height: 100px;
  }
</style>