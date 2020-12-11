// 获取购物车里所有商品的列表
const getCartList = state => {
    return state.shoppingCartGoodsInfo
}

// 获取购物车里的商品数量
const getGoodsNumber = state => {
    return state.shoppingCartGoodsInfo.length
}


export default {
    getCartList,
    getGoodsNumber
}