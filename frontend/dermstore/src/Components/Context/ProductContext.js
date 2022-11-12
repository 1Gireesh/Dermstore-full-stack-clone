import { createContext, useEffect, useState } from "react";


const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async() => {
            try {
                let res = await fetch("https://wild-polo-shirt-calf.cyclic.app/products");
                let data  = await res.json();
                data = data.filter((val,idx) => {
                    if(idx <= 3) {
                        return val;
                    }
               })
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    },[])

    //delete methode;
    const deleteItem = (id) => {
       setProducts((prev) => {
        return prev.filter((data) => {
            return data._id != id; 
        })
       })
    }

    return (
        <ProductContext.Provider value={{products, deleteItem}}>
             {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;