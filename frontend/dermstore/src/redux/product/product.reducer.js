import { GetProducts, SearchProducts } from "./product.actionTypes";


const initState = {
    products: [],
    search: []
};

export const productsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GetProducts:
            return { ...state, products: payload };
        default:
            return state;
    }
}