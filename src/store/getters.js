// 获取购物车里所有商品的列表
const cartList = state => {
    return state.carList
}

// 获取购物车里的商品数量
const cartLength = state => {
    return state.carList.length
}


export default {
    cartList,
    cartLength
}