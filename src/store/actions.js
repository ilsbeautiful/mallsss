import { ADD_COUNT, ADD_TO_CART } from './mutation_types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.carList.find(item => item.iid === payload.iid);
            if (oldProduct) {
                context.commit(ADD_COUNT, oldProduct);
                resolve();
            } else {
                payload.count = 1
                context.commit(ADD_TO_CART, payload);
                resolve();
            }
        })
    }
}