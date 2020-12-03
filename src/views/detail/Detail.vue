<template>
  <div >
    <DetailNavBar/>
    <DetailSwiper :topImages="topImages"/>
  </div>

</template>

<script>
import DetailNavBar from '@/views/detail/childcomps/DetailNavBar'
import DetailSwiper from '@/views/detail/childcomps/DetailSwiper'

import { getDetail } from '@/network/detail' 


export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
    })
  }

}

</script>

<style scoped>

</style>