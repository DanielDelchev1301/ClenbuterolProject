'use client';

import { useState, useEffect } from 'react';
import '../../styles/cart.css';
import Link from 'next/link';
import Product from '@/components/Product';
import { Stepper, Step, StepLabel } from '@mui/material';
import CartProduct from '@/components/CartProduct';

const steps = ['Cart', 'Shipping', 'Payment'];

function Cart() {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProductsWithQuantity, setCartProductsWithQuantity] = useState({});
    const [step, setStep] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [savedMoney, setSavedMoney] = useState(0);

    useEffect(() => {
        setCartProducts(window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []);
    }, []);

    useEffect(() => {
        if (Object.keys(cartProductsWithQuantity).length) {
            let _finalPrice = 0;
            let savedMoney = 0;
            for (let key in cartProductsWithQuantity) {
                _finalPrice += Number(cartProductsWithQuantity[key].price.substring(1)) * Number(cartProductsWithQuantity[key].quantity);
                if (cartProductsWithQuantity[key].oldPrice) {
                    savedMoney += (Number(cartProductsWithQuantity[key].oldPrice.substring(1)) - Number(cartProductsWithQuantity[key].price.substring(1))) * Number(cartProductsWithQuantity[key].quantity);
                }
            }
            setSavedMoney(savedMoney);
            setFinalPrice(_finalPrice);
        } else {
            setSavedMoney(0);
            setFinalPrice(0);
        }
    }, [cartProductsWithQuantity]);

    useEffect(() => {
        if (cartProducts.length) {
            let _cartProductsWithQuantity = {};
            for (let product of cartProducts) {
                const quantity = _cartProductsWithQuantity[product.title] ? Number(_cartProductsWithQuantity[product.title].quantity) + 1 : 1;
                _cartProductsWithQuantity[product.title] = {...product, quantity: quantity};
            }
            setCartProductsWithQuantity({..._cartProductsWithQuantity})
        } else {
            setCartProductsWithQuantity({});
        }
    }, [cartProducts]);

    const renderStepContent = (step) => {
        switch(step) {
            case 0:
            return (
                <div className="cartProductsContainer">
                    {Object.values(cartProductsWithQuantity).sort((a,b) => a.title.localeCompare(b.title)).map((product) => (
                        <CartProduct key={product.heading} product={product} setCartProducts={setCartProducts}/>
                    ))}
                    <p>${finalPrice.toFixed(2)}</p>
                    <p>${savedMoney.toFixed(2)}</p>
                </div>
            );
            case 1:
            return (
                <div className="cartShippingContainer">
                    <div className="cartShippingInfoContainer">
                        <h3>Shipping Address</h3>
                        <div className="cartShippingAddressContainer">
                            <div className="cartShippingAddress">
                                <span className="cartShippingAddressName">John Doe</span>
                                <span className="cartShippingAddressStreet">1234 Main Street</span>
                                <span className="cartShippingAddressCity">Anytown, CA 12345</span>
                                <span className="cartShippingAddressCountry">United States</span>
                            </div>
                            <div className="cartShippingAddressEditContainer">
                                <Link href="/cart/shipping">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cartShippingInfoContainer">
                        <h3>Shipping Method</h3>
                        <div className="cartShippingMethodContainer">
                            <div className="cartShippingMethod">
                                <span className="cartShippingMethodName">USPS</span>
                                <span className="cartShippingMethodPrice">$5.00</span>
                            </div>
                            <div className="cartShippingMethodEditContainer">
                                <Link href="/cart/shipping">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return(
        <div className="cartMainContainer">
            <div className="cartContainer">
                <h2>Your Shopping Cart</h2>
                <Stepper 
                    activeStep={step} 
                    alternativeLabel 
                    className="cartStepContainer"
                >
                    {steps && steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className="cartAllStepsContainer">
                    {renderStepContent(step)}
                    <div className="cartStepsButtonsContainer">
                        <button onClick={() => setStep(prev => prev - 1)} className={`cartStepsButton cartStepsButtonBack ${!step && 'backButtonHidden'}`}>Back</button>
                        <button onClick={() => setStep(prev => prev + 1)} className="cartStepsButton cartStepsButtonNext">Next</button>
                    </div>
                </div>
            </div>
            <div className="offerAdditionalProductsContainer">
                <div className="cartLinksContainer">
                    <Link href="/blogs/clenAsAPerformanceDrug" className="cartLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                    <Link href="/blogs/clenAsAPerformanceDrug" className="cartLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                    <Link href="/blogs/clenAsAPerformanceDrug" className="cartLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                    <Link href="/blogs/clenAsAPerformanceDrug" className="cartLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                </div>
                <div className="blogLayoutProductsContainer">
                    <Product
                        src="/clenSopharmaOneBoxWatermark.jpg"
                        alt="clenSopharmaOneBox" 
                        width="300" 
                        height="300"
                        href="/shop/clenOneBox"
                        heading="Clenbuterol 50 tabs / 0,02 mg"
                        oldPrice={false}
                        price="$50.00"
                        title="clenSopharmaOneBox"
                        setCartProducts={setCartProducts}
                    />

                    <Product 
                        src="/t3CytomelWatermark.jpg"
                        alt="t3CytomelWatermark" 
                        width="300" 
                        height="300"
                        href="/shop/t3CytomelOneBox"
                        heading="T3 Cytomel 30 tabs / 0,025 mg"
                        oldPrice={false}
                        price="$50.00"
                        title="cytomel"
                        setCartProducts={setCartProducts}
                    />

                    <Product 
                        src="/t4ThyroxinWatermark.jpg"
                        alt="t4ThyroxinWatermark" 
                        width="300" 
                        height="300"
                        href="/shop/t4ThyroxinOneBox"
                        heading="T4 L-Thyroxine 100 tabs / 0.1 mg"
                        oldPrice="$46.00"
                        price="$37.00"
                        title="thyroxin"
                        setCartProducts={setCartProducts}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cart;