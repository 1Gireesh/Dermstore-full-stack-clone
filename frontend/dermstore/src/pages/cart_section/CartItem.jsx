import React from 'react';
import { useDispatch } from 'react-redux';
import { cartDecQty, cartIncQty, removeCart } from '../../redux/Cart/cart.action';

import { Link } from 'react-router-dom';

const CartItem = ({ cart }) => {
    const token = localStorage.getItem("token");

    const dispatch = useDispatch();
    let { product } = cart;
    return (
        <div className="tbody">
            <div className="first">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
            </div>
            <button className='delete'
                onClick={() => dispatch(removeCart(cart._id, token))}
            >
                <img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
            </button>
            <p className="price">$ {product.price.toFixed(2)}</p>
            <p className="quantity">
                <button
                    onClick={() => dispatch(cartIncQty(cart._id, product.price, cart.quantity, token))}
                >+</button>
                {cart.quantity}
                <button
                    onClick={() => dispatch(cartDecQty(cart._id, product.price, cart.quantity, token))}
                >-</button>
            </p>
            <p className="">$ {(cart.quantity * product.price).toFixed(2)}</p>
            <Link to='/checkout'> <button className="btn_checkout">CHECKOUT SECURELY NOW</button></Link>
        </div>
    );
}

export default CartItem;
