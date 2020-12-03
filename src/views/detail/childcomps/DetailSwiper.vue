<template>
 <div>
   <Swiper class="swiper-item">
     <SwiperItem v-for="item in topImages" :key="item.id">
       <img :src="item" alt="">
     </SwiperItem>
   </Swiper>
 </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "DetailSwiper",
  props: {
    topImages:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>