<template>
  <NavBar>
    <div slot="left" @click="backhome" class="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles" 
           :key="item.id" 
           class="item-title"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'


export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backhome() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
}

.item-title {
  flex: 1;
  font-size: 15px;
}

.active {
  color: var(--color-high-text)
}

.back {
  margin-top: 6px;
}
</style>