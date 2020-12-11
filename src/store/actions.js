import { ADD_COUNT, ADD_TO_CART } from './mutation_types'

export default {
    getGoodsInfo(context, data) {
        return new Promise((resolve, reject) => {
            // 取出shoppingCartGoodsInfo中的具有和data相同id的数据
            let newData = context.state.shoppingCartGoodsInfo.find(value => value.id === data.id);
            if (!newData) {
                // 分发添加商品到购物车的操作
                context.commit(ADD_TO_CART, data);
                // 成功添加商品到购物车的回调
                resolve();
            } else {
                // 分发购物车已有商品的数量加一操作
                context.commit(ADD_COUNT, newData);
                // 商品数量加一成功
                resolve();
            }
        })
    }
}