import { createContext, useState } from "react";

export const ProductContext = createContext();


export function ProductContextProvider({ children }) {
    const [productCart, setProductCart] = useState([]);
    const addProductToCart = (product) => {
        // productCart.push({
        //     img: product.img,
        //     name: product.name,
        //     price: product.price,
        //     discount: product.discount,
        //     originalPrice: product.originalPrice,
        //     quantity: 0
        // })
        // setProductCart(productCart)
        const existingItem = productCart.find((item) => item.name === product.name);
        console.log(existingItem)
        if (existingItem) {
            setProductCart((prevCart) =>
                prevCart.map((item) =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }
        else {
            setProductCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }

    };
    const updateProductQuantity = (product, action) => {
        setProductCart((prevCart) =>
            prevCart.map((item) =>
                item.name === product.name
                    ? {
                        ...item,
                        quantity: action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 0),
                    }
                    : item
            )
        );
    };
    const total = productCart.map((product) => {
        let totalProduct = 0;
        const price = parseFloat(product.price.replace("đ", "").replace(",", ""));
        totalProduct += price * product.quantity
        return totalProduct;
    })
    return (
        <ProductContext.Provider value={{ productCart, addProductToCart, updateProductQuantity, total }}>
            {children}
        </ProductContext.Provider>
    );
}