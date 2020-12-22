import request from './request'


// 封装获取商品分类的数据函数
const getCategory = () => {
    return request({
        url: '/category',
    })
}

// 封装获取子菜单里的品类数据的函数
const getVarietice = (maitKey) => {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

const getVarieticeGoods = (miniWallkey, type) => {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}



export default {
    getCategory,
    getVarietice,
    getVarieticeGoods
}