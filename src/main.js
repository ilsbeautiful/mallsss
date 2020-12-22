import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import vueLzayLoad from 'vue-lazyload'


Vue.use(vueLzayLoad, {
    loading: require('./assets/img/common/placeholder.png')
})
FastClick.attach(document.body)

Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')