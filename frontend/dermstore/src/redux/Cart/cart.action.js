import axios from "axios";
import { AddCart, CartDecQty, CartIncQty, GetCart, RmoveCart } from "./cart.actionType";
import { apiUrl } from "../../config/url";

// let url = `https://wild-polo-shirt-calf.cyclic.app/carts`;
let url = apiUrl + "/carts";

export const getCarts = (token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token;
    let res = await axios.get(url)
    dispatch({ type: GetCart, payload: res.data })
}

export const addCart = (product, token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token;
    let res = await axios.post(url, {
        product: product._id,
        price: product.price,
        quantity: product.quantity
    });
    console.log(res.data);
    dispatch({ type: AddCart, payload: { product: res.data, price: product.price, } })
}

export const removeCart = (id, token) => async (dispatch) => {
    console.log(id, token)
    axios.defaults.headers.common["token"] = token + " " + id;
    await axios.delete(url, { id: id });
    dispatch({ type: RmoveCart, payload: { id: id } })
}

export const cartIncQty = (id, price, qty, token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token;
    console.log(qty)
    await axios.patch(url, { product: id, quantity: qty + 1, uid: token });
    dispatch({ type: CartIncQty, payload: { id: id, price: price, } })
}

export const cartDecQty = (id, price, qty, token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token + " " + id;
    await axios.patch(url, { product: id, quantity: qty - 1, uid: token });
    dispatch({ type: CartDecQty, payload: { id: id, price: price, } })
}
