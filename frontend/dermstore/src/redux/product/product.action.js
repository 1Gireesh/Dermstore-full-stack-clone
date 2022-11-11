import axios from "axios";
import { GetProducts, SearchProducts } from "./product.actionTypes";


export const getProduct = (val) => async (dispatch) => {
    let product = localStorage.getItem("products");
    if (product.length > 1)
        dispatch({ type: GetProducts, payload: product });
    else {
        let data = await axios.get("https://wild-polo-shirt-calf.cyclic.app/products")
        dispatch({ type: GetProducts, payload: data.data });
    }
}

