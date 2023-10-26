'use client';

import Image from "next/image";
import Link from "next/link";
import '@/styles/product.css'
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function Product({
    src,
    alt,
    width,
    height,
    href,
    heading,
    oldPrice,
    price,
    title,
    setCartProducts
}) {
    const [open, setOpen] = useState(false);

    const addToBag = () => {
        let cart = window.localStorage.getItem('cart');

        if (cart) {
            cart = JSON.parse(cart);
            cart.push({src, alt, width, height, href, heading, oldPrice, price, title});
        } else {
            cart = [{src, alt, width, height, href, heading, oldPrice, price, title}];
        }

        setOpen(true);
        if(setCartProducts) setCartProducts(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart));
    };

    return(
        <div className="productContainer">
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    The Product has been added to your cart!
                </Alert>
            </Collapse>
            <Image
                title={alt}
                src={src}
                alt={alt} 
                width={width} 
                height={height}
                className="productImage"
            />
            <div className="productContent">
                <Link href={href} className="productHeader">{heading}</Link>
                <p className="productPrice">{oldPrice && <span className="productOldPrice">{oldPrice}</span>} {price}</p>
            </div>
            <div className="productButtons">
                <button onClick={addToBag} className="productButton addToCartButton">Add to Cart</button>
                <Link className="linkProductButton learnMoreButton" href={href}>Learn More</Link>
            </div>
        </div>
    );
}

export default Product;