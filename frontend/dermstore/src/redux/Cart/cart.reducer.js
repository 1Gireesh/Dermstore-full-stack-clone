import { AddCart, CartDecQty, CartIncQty, GetCart, RmoveCart } from "./cart.actionType"


const initState = {
    cartItems: [],
    price: 0
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case GetCart:
            {
                let price = 0;
                console.log(payload)
                payload.map((e, i) => price += ((e.product.price) * e.quantity))
                return { cartItems: payload, price: price }
            }

        case CartIncQty:
            {
                let b = 0;
                console.log(payload)
                let c = state.cartItems.map((e, i) => {
                    if (e._id == payload.id) {
                        b = e.product.price;
                        return { ...e, quantity: e.quantity + 1 }
                    } else
                        return e;
                })
                let a = { cartItems: c, price: state.price + b }

                return a;
            }
        case CartDecQty:
            {
                let b = 0
                return {
                    cartItems: state.cartItems.map((e) => {
                        if (e._id == payload.id) {
                            b = e.product.price || 10;
                            return { ...e, quantity: e.quantity - 1 }
                        }
                        else return e;
                    }),
                    price: state.price - b
                }
            }

        case AddCart:
            return {
                price: state.price + (payload.price * payload.quantity),
                cartItems: [...state.cartItems, payload.product]
            }

        case RmoveCart:
            {
                console.log(payload,state)
                let b = 0;
                let a = [];
                state.cartItems.map((e, i) => {
                    if (e._id == payload.id) b = (+e.product.price ) * (+e.quantity);
                    else a.push(e);
                })
                console.log(state.price, b)
                return { cartItems: a, price: (state.price - b) }
            }


        default:
            return state;
    }
}