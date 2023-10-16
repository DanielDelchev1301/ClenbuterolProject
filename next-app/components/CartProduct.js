'use client';

import Image from "next/image";
import '../styles/cartProduct.css';

function CartProduct({product, setCartProducts}) {

    const addOne = () => {
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.push(product);

        if(setCartProducts) setCartProducts(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeOne = (title) => {
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        const productIndex = cart.findIndex((product) => product.title === title);
        cart.splice(productIndex, 1);

        if(setCartProducts) setCartProducts(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart));
    };

    return(
        <div className="cartProductContainer">
            <div className="cartProductImageContainer">
                <Image 
                    src={product.src}
                    alt={product.alt} 
                    width={200} 
                    height={200}
                    className="productImage"
                />
            </div>
            <div className="cartProductInfoContainer">
                <p className="cartProductLabel">Name: <span>{product.heading}</span></p>
                <p className="cartProductLabel">Quantity: <span>{product.quantity}</span> <button onClick={() => addOne()} className="cartPorductButton buttonPlus">+</button> <button onClick={() => removeOne(product.title)} className="cartPorductButton buttonMinus">-</button></p>
                <p className="cartProductLabel">Price Each: <span>{product.price}</span></p>
                <p className="cartProductLabel">Total Price: <span>{`$${(Number(product.price.substring(1)) * Number(product.quantity)).toFixed(2)}`}</span></p>
            </div>
        </div>
    );
}

export default CartProduct;
