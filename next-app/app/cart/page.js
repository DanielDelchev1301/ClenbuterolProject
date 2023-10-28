'use client';

import { useState, useEffect } from 'react';
import '../../styles/cart.css';
import Link from 'next/link';
import Product from '@/components/Product';
import { Stepper, Step, StepLabel, TextField } from '@mui/material';
import CartProduct from '@/components/CartProduct';

const steps = ['Cart', 'Shipping', 'Payment'];

function Cart() {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProductsWithQuantity, setCartProductsWithQuantity] = useState({});
    const [step, setStep] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [savedMoney, setSavedMoney] = useState(0);
    const [seeMore, setSeeMore] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [shippingAddress, setShippingAddress] = useState({
        email: {
            value: '',
            error: false
        },
        firstName: {
            value: '',
            error: false
        },
        lastName: {
            value: '',
            error: false
        },
        country: {
            value: '',
            error: false
        },
        city: {
            value: '',
            error: false
        },
        zipCode: {
            value: '',
            error: false
        },
        address: {
            value: '',
            error: false
        },
        mobileNumber: {
            value: '',
            error: false
        },
    });

    useEffect(() => {
        setCartProducts(window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []);
    }, []);

    useEffect(() => {
        setIsDisabled((!shippingAddress.firstName.value.trim().length || 
            !shippingAddress.lastName.value.trim().length || 
            !shippingAddress.country.value.trim().length || 
            !shippingAddress.city.value.trim().length || 
            !shippingAddress.zipCode.value.trim().length || 
            !shippingAddress.address.value.trim().length || 
            !shippingAddress.email.value.trim().length || 
            shippingAddress.email.error) &&
            step === 1
        );
    }, [shippingAddress, step]);

    useEffect(() => {
        if (Object.keys(cartProductsWithQuantity).length) {
            let _finalPrice = 0;
            let savedMoney = 0;
            for (let key in cartProductsWithQuantity) {
                _finalPrice += Number(cartProductsWithQuantity[key].price) * Number(cartProductsWithQuantity[key].quantity);
                if (cartProductsWithQuantity[key].oldPrice) {
                    savedMoney += (Number(cartProductsWithQuantity[key].oldPrice) - Number(cartProductsWithQuantity[key].price)) * Number(cartProductsWithQuantity[key].quantity);
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

    const handleGoBack = () => {
        window.scrollTo({top: 300, behavior: 'smooth'});
        setStep(prev => prev - 1)
    };

    const handleGoNext = () => {
        window.scrollTo({top: 300, behavior: 'smooth'});
        
        if (step == 2) {
            setIsDisabled(true);
            let products = [];
            for (let key in cartProductsWithQuantity) {
                products.push({
                    heading: cartProductsWithQuantity[key].heading,
                    price: cartProductsWithQuantity[key].price,
                    quantity: cartProductsWithQuantity[key].quantity
                });
            }
            const body = {
                email: shippingAddress.email.value,
                firstName: shippingAddress.firstName.value,
                lastName: shippingAddress.lastName.value,
                country: shippingAddress.country.value,
                city: shippingAddress.city.value,
                address: shippingAddress.address.value,
                zipCode: shippingAddress.zipCode.value,
                orderInfo: {
                    products: products,
                    finalPrice: finalPrice + 9.99,
                    date: new Date(),
                    status: 'pending'
                }
            };

            fetch('/api/order/createNew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                cache: 'no-store',
                next: { revalidate: 0 }
            })
            .then(res => res.json())
            .then(() => {
                setStep(prev => prev + 1);
                setCartProducts([]);
                setCartProductsWithQuantity({});
                window.localStorage.setItem('cart', []);
                setIsDisabled(false);
            })
            .catch(err => {
                console.error(err);
                alert('Something went wrong, please try again later.');
                setIsDisabled(false);
            });
        } else {
            setStep(prev => prev + 1)
        }
    };

    const handleChange = (value, name) => {
        let _value = value;
        if (name === 'email') {
            if (/^[A-Za-z0-9._%+-]+@\S[a-zA-Z0-9.-]+\.[a-z]{1,4}\S$/.test(value)) {
                _value = value;
            } else {
                _value = '';
            }
        }
        setShippingAddress(prev => ({
            ...prev,
            [name]: {error: !_value.length, value: value}
        }));
    };

    const renderStepContent = (step) => {
        switch(step) {
            case 0:
            return (
                <div className="cartProductsContainer">
                    {Object.values(cartProductsWithQuantity).length 
                        ?
                        <>
                            {Object.values(cartProductsWithQuantity).sort((a,b) => a.title.localeCompare(b.title)).map((product) => (
                                <CartProduct key={product.heading} product={product} setCartProducts={setCartProducts}/>
                                ))}
                            <div className="finalAndSavedMoneyContainer">
                                {savedMoney ? <p className="finalAndSaved">Money Saved: <span className="savedMoney">{savedMoney.toFixed(2)} €</span></p> : <></>}
                                {finalPrice ? <p className="finalAndSaved">Final Price: <span className="finalMoney">{finalPrice.toFixed(2)} €</span></p> : <></>}
                            </div>
                        </>
                        :
                        <div className="emptyShoppingCartContainer">
                            <p className="emptyShoppingCartMessage">Your shopping cart is empty, please add items to it.</p>
                        </div>
                    }
                </div>
            );
            case 1:
            return (
                <div className="cartShippingContainer">
                    <div className="cartShippingInfoContainer">
                        <h3 className="cartShippingHeader">Shipping Address</h3>
                        <div className="cartShippingAddressContainer">
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.email.error}
                                helperText={shippingAddress.email.error ? 'Please enter a valid email address e.g. (example@gmail.com)' : ''}
                                label="Email"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.email.value}
                                onChange={(e) => handleChange(e.target.value, 'email')}
                            />
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.firstName.error}
                                helperText={shippingAddress.firstName.error ? 'This field is required.' : ''}
                                label="First Name"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.firstName.value}
                                onChange={(e) => handleChange(e.target.value, 'firstName')}
                            />
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.lastName.error}
                                helperText={shippingAddress.lastName.error ? 'This field is required.' : ''}
                                label="Last Name"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.lastName.value}
                                onChange={(e) => handleChange(e.target.value, 'lastName')}
                            />
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.country.error}
                                helperText={shippingAddress.country.error ? 'This field is required.' : ''}
                                label="Country"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.country.value}
                                onChange={(e) => handleChange(e.target.value, 'country')}
                            />
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.city.error}
                                helperText={shippingAddress.city.error ? 'This field is required.' : ''}
                                label="City"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.city.value}
                                onChange={(e) => handleChange(e.target.value, 'city')}
                            />
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.zipCode.error}
                                helperText={shippingAddress.zipCode.error ? 'This field is required.' : ''}
                                label="ZIP/Postal Code"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.zipCode.value}
                                onChange={(e) => handleChange(e.target.value, 'zipCode')}
                            />
                            <TextField
                                className="textField"
                                required
                                error={shippingAddress.address.error}
                                helperText={shippingAddress.address.error ? 'This field is required.' : ''}
                                label="Address"
                                variant="standard"
                                color="warning"
                                value={shippingAddress.address.value}
                                onChange={(e) => handleChange(e.target.value, 'address')}
                            />
                        </div>
                    </div>
                    <div className="cartShippingInfoContainer">
                        <h3 className="cartShippingHeader">Shipping Method</h3>
                        <div className="cartShippingMethodContainer">
                            {!seeMore 
                                ?
                                <p>We've chosen to send your order via our shipping service, a trusted and reliable method. Enjoy the convenience and security of having your package delivered right to your doorstep.</p>
                                :
                                <>
                                    <p>Dear Valued Customers,</p>
                                    <p>We are committed to providing you with the best and most reliable shipping option for your orders. Here's what you can expect with our shipping method:</p>
                                    <p><strong>Shipping Cost:</strong> Enjoy <strong>shipping in whole Europe</strong> for just <strong>9.99€</strong>, no extra costs. It's our way of making your shopping experience even better.</p>
                                    <p><strong>Speedy Delivery:</strong> We know how crucial it is for your orders to reach you quickly and reliably. Our <strong>fast shipping</strong> option ensures that you receive your packages within just 2-5 days.</p>
                                    <p><strong>Security:</strong> We understand the importance of your orders arriving safely and securely. Our shipping service is a tried-and-true method with a strong track record for the safe delivery of packages.</p>
                                    <p><strong>Reliability:</strong> Our shipping service have a well-established network that ensures your package's timely delivery. You can count on us to get your order to you promptly.</p>
                                    <p><strong>Convenience:</strong> We offer the convenience of delivering to your doorstep. You won't need to visit a courier office or take time off work to receive your package.</p>
                                    <p><strong>Tracking:</strong> We provide tracking information vie email so you can monitor the progress of your order. You'll be kept informed every step of the way.</p>
                                    <p>Rest assured, we take great care in packaging your orders to minimize any potential issues during transit.</p>
                                    <p>Your satisfaction is our top priority, and we are confident that our service is a secure and efficient method for shipping your orders. If you have any questions or concerns about your shipment, please don't hesitate to reach out to our email: <Link href="mailto:clenpeakperformance@gmail.com" className="linkToEmail">clenpeakperformance@gmail.com</Link> .</p>
                                    <p>Thank you for choosing us, and we look forward to serving you with a seamless and worry-fast shipping experience.</p>
                                    <p>Best regards,</p>
                                    <p><strong>Clen peak Performance</strong></p>

                                </>
                            }
                            <span className="shippingMethodSeeMore" onClick={() => setSeeMore(prev => !prev)}>{!seeMore ? 'show more...' : '...show less'}</span>
                        </div>
                    </div>
                </div>
            );
            case 2:
            return(
                <div className="cartShippingContainer">
                    <h3 className="cartShippingHeader">Payment Method</h3>
                    <div className="cartShippingInfoContainer">
                        <div className="cartShippingMethodContainer">
                            <p><strong>Convenient Cash on Delivery</strong></p>
                            <p>Dear Valued Customers,</p>
                            <p>We're pleased to offer you the convenience and peace of mind that comes with our preferred payment method: Cash on Delivery. Here are the benefits you can enjoy with this payment option:</p>
                            <p><strong>Security:</strong> With Cash on Delivery, you only make payment when your order arrives at your doorstep. This ensures that you can inspect your order and be completely satisfied before parting with your money.</p>
                            <p><strong>Hassle-Free:</strong> No need to share sensitive financial information online. Pay with cash upon delivery, making the payment process straightforward and worry-free.</p>
                            <p><strong>Convenience:</strong> It's the ultimate convenience - just keep the exact amount of cash ready when your order arrives, and our delivery team will handle the rest.</p>
                            <p><strong>Trustworthy:</strong> We value your trust, and Cash on Delivery demonstrates our commitment to your satisfaction and the quality of our products.</p>
                            <p>Your peace of mind is our priority, and we are confident that Cash on Delivery is a secure and hassle-free payment method. If you have any questions or concerns about your payment, please don't hesitate to reach out to our email: <Link href="mailto:clenpeakperformance@gmail.com" className="linkToEmail">clenpeakperformance@gmail.com</Link> .</p>
                            <p>Thank you for choosing us, and we look forward to providing you with a smooth and secure shopping experience.</p>
                            <p>Best regards,</p>
                            <p><strong>Clen peak Performance</strong></p>
                        </div>
                        <div className="finalAndSavedMoneyContainer">
                            <p className="finalAndSaved">Shipping Cost: <span className="shippingCost">9.99 €</span></p>
                            {savedMoney ? <p className="finalAndSaved">Money Saved: <span className="savedMoney">{savedMoney.toFixed(2)} €</span></p> : <></>}
                            {finalPrice ? <p className="finalAndSaved">Final Price: <span className="finalMoney">{(finalPrice + 9.99).toFixed(2)} €</span></p> : <></>}
                        </div>
                    </div>
                </div>

            );
            case 3:
            return(
                <div className="cartShippingContainer">
                    <p className="completedOrderMessage">We are thrilled to inform you that your order has been successfully placed and confirmed. Thank you for choosing <strong>Clen Peak Preformance</strong> for your recent purchase.</p>
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
                    {step != 3 &&
                        <div className="cartStepsButtonsContainer">
                            <button onClick={handleGoBack} className={`cartStepsButton cartStepsButtonBack ${!step && 'buttonHidden'}`}>Back</button>
                            <button onClick={handleGoNext} className={`cartStepsButton cartStepsButtonNext ${isDisabled ? 'buttonDisabled' : ''} ${!finalPrice && 'buttonHidden'}`}>{step === 2 ? 'Finish Order' : 'Next'}</button>
                        </div>
                    }
                </div>
            </div>
            <div className="offerAdditionalProductsContainer">
                <div className="cartLinksContainer">
                    <Link href="/blogs/clenAsAPerformanceDrug" className="cartLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                    <Link href="/blogs/everythingAboutLosingFat" className="cartLinkButton">Everything You Need To Know About Fat Loss</Link>
                    <Link href="/blogs/ultimateGuideForMuscleMass" className="cartLinkButton">The Ultimate Bodybuilding Guide For Muscle Mass</Link>
                    <Link href="/blogs/clenDosingProtocols" className="cartLinkButton">Clenbuterol Dosing Protocols: Strategies for Safe and Effective Use</Link>
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
                        price="24.99"
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
                        price="40.00"
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
                        oldPrice="35.00"
                        price="29.00"
                        title="thyroxin"
                        setCartProducts={setCartProducts}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cart;