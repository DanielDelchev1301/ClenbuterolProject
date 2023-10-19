import Product from "@/components/Product";
import '../../styles/shop.css';
import Link from "next/link";

function Shop() {
    return (
        <div className="shopMainContainer">
            <h2>Shopping Station</h2>
            <div className="shopContainer">
                <div className="shopProductsContainer">
                    <Product
                        src="/clenSopharmaFiveBoxesWatermark.jpg"
                        alt="clenSoptharmaFiveBoxes" 
                        width="300" 
                        height="300"
                        href="/shop/clenFiveBoxes"
                        heading="Clenbuterol 250 tabs (5x50 tabs) / 0,02 mg"
                        oldPrice="$250.00"
                        price="$180.00"
                        title="clenSopharmaFiveBoxes"
                    />
                    <Product 
                        src="/clenSopharmaOneBoxWatermark.jpg"
                        alt="clenSopharmaOneBox" 
                        width="300" 
                        height="300"
                        href="/shop/clenThreeBoxes"
                        heading="Clenbuterol 150 tabs (3x50 tabs) / 0,02 mg"
                        oldPrice="$150.00"
                        price="$120.00"
                        title="clenSopharmaThreeBox"
                    />
                    <Product 
                        src="/clenSopharmaOneBoxWatermark.jpg"
                        alt="clenSopharmaOneBox" 
                        width="300" 
                        height="300"
                        href="/shop/clenThreeBoxes"
                        heading="Clenbuterol 150 tabs (3x50 tabs) / 0,02 mg"
                        oldPrice="$150.00"
                        price="$120.00"
                        title="clenSopharmaThreeBox"
                    />
                    <Product 
                        src="/ketotifenSopharmaWatermark.jpg"
                        alt="ketotifenSopharma" 
                        width="300" 
                        height="300"
                        href="/shop/ketotifenOneBox"
                        heading="Ketotifen 30 tabs / 1 mg"
                        oldPrice={false}
                        price="$36.00"
                        title="ketotifenSopharma"
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
                    />
                </div>
                <div className="blogLinksContainer">
                    <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                    <Link href="/blogs/clenAndThermogenicEffects" className="blogLinkButton">Clenbuterol and Thermogenic Effects: A Closer Look</Link>
                    <Link href="/blogs/musclePreservationWithClen" className="blogLinkButton">Muscle Preservation with Clenbuterol</Link>
                    <Link href="/blogs/clenDosingProtocols" className="blogLinkButton">Clenbuterol Dosing Protocols: Strategies for Safe and Effective Use</Link>
                </div>
            </div>
            <div className="shopAdditionalInfoContainer">
                <h3>Shipping Details</h3>
                <p>Dear Valued Customers,</p>
                <p>We are committed to providing you with the best and most reliable shipping option for your orders. Our chosen method for shipping is through trusted postal mail services. Here's what you can expect with postal mail as your shipping method:</p>
                <p><strong>Security:</strong> We understand the importance of your orders arriving safely and securely. Postal mail is a tried-and-true method with a strong track record for the safe delivery of packages.</p>
                <p><strong>Reliability:</strong> Postal services have a well-established network that ensures your package's timely delivery. You can count on us to get your order to you promptly.</p>
                <p><strong>Convenience:</strong> Postal mail offers the convenience of delivering to your doorstep. You won't need to visit a courier office or take time off work to receive your package.</p>
                <p><strong>Tracking:</strong> We provide tracking information vie email so you can monitor the progress of your order. You'll be kept informed every step of the way.</p>
                <p>Rest assured, we take great care in packaging your orders to minimize any potential issues during transit.</p>
                <p>Your satisfaction is our top priority, and we are confident that postal mail is a secure and efficient method for shipping your orders. If you have any questions or concerns about your shipment, please don't hesitate to reach out to our email: <strong>clenPeekPerformance@gmail.com</strong> .</p>
                <p>Thank you for choosing us, and we look forward to serving you with a seamless and worry-free shipping experience.</p>
                <p>Best regards,</p>
                <p><strong>Clen Peek Performance</strong></p>
            </div>
        </div>
    );
}

export default Shop;