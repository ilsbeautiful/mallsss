import { ADD_COUNT, ADD_TO_CART } from './mutation_types'

export default {
    [ADD_COUNT](state, payload) {
        payload.count++;
    },
    [ADD_TO_CART](state, payload) {
        // 定义该商品的数量和在购物车中默认选中
        payload.count = 1;
        payload.check = true;

        // 没有相同的数据就添加商品
        state.carList.push(payload);
    }
}