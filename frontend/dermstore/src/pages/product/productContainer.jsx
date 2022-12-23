import React from 'react'
import "../../css/products.css";
import { Link } from 'react-router-dom';
const random = Math.random();

export default function productContainer({ product }) {
    return (
        <div className='productContainer'>
            <img src={product.image} alt="" />
            <div>
                <p className='product'>{product.name && product.name.substr(0, 30)}</p>
                <p>Additional 10% off sale products with code EXTRA10</p>
                <p className='mrp'>MRP:{(product.price * (1 + random)).toFixed(2)}</p>
                <div>
                    <p className='productPrice'>${product.price}</p>
                    <p>rating {product.rating}</p>
                </div>
                <Link to={"/preview/"+product._id}>
                    <button>QUICK BUY</button>
                </Link>
            </div>
        </div>
    )
}
