import BackTop from '@/components/content/backTop/BackTop'
import { debounce } from './utils'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 50)
        this.$bus.$on('itemimgload', () => {
            refresh()
        })
    }
}

export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        ilstenShowBackTop(position) {
            this.isShowBackTop = -position.y > 1000;
        }
    }
}