import Product from "@/components/Product";
import '../../styles/shop.css';
import Link from "next/link";

export const metadata = {
    title: 'Ultimate Clenbuterol Guide: Clen Info and Support',
    description: 'Explore clenbuterol safely with us. Get info, stay informed, and make responsible choices. Prioritize health and legal compliance.',
    keywords: 'clenbuterol information, clenbuterol support, buy clenbuterol, buy clenbuterol sopharma, fast shipping clenbuterol, eca clen t3, clenbuterol',
    openGraph: {
        title: 'shop',
        type: 'website',
        images: ['https://clenpeakperformance.com/clenSopharmaOneBoxWatermark.jpg'],
        url: 'https://clenpeakperformance.com/shop',
    },
    alternates: {
      canonical: 'https://clenpeakperformance.com/shop',
    }
};

function Shop() {
    return (
        <div className="shopMainContainer">
            <h2>Shopping Station</h2>
            <div className="shopContainer">
                <div className="shopProductsContainer">
                    <Product
                        src="/clenSopharmaFiveBoxesWatermark.jpg"
                        alt="clenSopharmaTenBoxes" 
                        width="300" 
                        height="300"
                        href="/shop/clenTenBoxes"
                        heading="Clenbuterol 500 tabs (10x50 tabs) / 0,02 mg"
                        oldPrice="250.00"
                        price="155.00"
                        title="clenSopharmaTenBoxes"
                    />
                    <Product
                        src="/clenSopharmaFiveBoxesWatermark.jpg"
                        alt="clenSopharmaFiveBoxes" 
                        width="300" 
                        height="300"
                        href="/shop/clenFiveBoxes"
                        heading="Clenbuterol 250 tabs (5x50 tabs) / 0,02 mg"
                        oldPrice="125.00"
                        price="80.00"
                        title="clenSopharmaFiveBoxes"
                    />
                    <Product 
                        src="/clenSopharmaOneBoxWatermark.jpg"
                        alt="clenSopharmaFourBox" 
                        width="300" 
                        height="300"
                        href="/shop/clenFourBoxes"
                        heading="Clenbuterol 200 tabs (4x50 tabs) / 0,02 mg"
                        oldPrice="100.00"
                        price="70.00"
                        title="clenSopharmaFourBox"
                    />
                    <Product 
                        src="/clenSopharmaOneBoxWatermark.jpg"
                        alt="clenSopharmaThreeBox" 
                        width="300" 
                        height="300"
                        href="/shop/clenThreeBoxes"
                        heading="Clenbuterol 150 tabs (3x50 tabs) / 0,02 mg"
                        oldPrice="75.00"
                        price="60.00"
                        title="clenSopharmaThreeBox"
                    />
                    <Product 
                        src="/clenSopharmaOneBoxWatermark.jpg"
                        alt="clenSopharmaTwoBox" 
                        width="300" 
                        height="300"
                        href="/shop/clenTwoBoxes"
                        heading="Clenbuterol 100 tabs (2x50 tabs) / 0,02 mg"
                        oldPrice="50.00"
                        price="42.00"
                        title="clenSopharmaTwoBox"
                    />
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
                    />
                    <Product 
                        src="/ketotifenSopharmaWatermark.jpg"
                        alt="ketotifenSopharma" 
                        width="300" 
                        height="300"
                        href="/shop/ketotifenOneBox"
                        heading="Ketotifen 30 tabs / 1 mg"
                        oldPrice={false}
                        price="20.00"
                        title="ketotifenSopharma"
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
                    />
                </div>
                <div className="blogLinksContainer">
                    <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
                    <Link href="/blogs/clenAndThermogenicEffects" className="blogLinkButton">Clenbuterol and Thermogenic Effects: A Closer Look</Link>
                    <Link href="/blogs/musclePreservationWithClen" className="blogLinkButton">Muscle Preservation with Clenbuterol</Link>
                    <Link href="/blogs/clenDosingProtocols" className="blogLinkButton">Clenbuterol Dosing Protocols: Strategies for Safe and Effective Use</Link>
                    <Link href="/blogs/clenAlternatives" className="blogLinkButton">Safe & Effective Bodybuilding Alternatives to Clen</Link>
                    <Link href="/blogs/ultimateGuideForMuscleMass" className="blogLinkButton">The Ultimate Bodybuilding Guide For Muscle Mass</Link>
                    <Link href="/blogs/everythingAboutLosingFat" className="blogLinkButton">Everything You Need To Know About Fat Loss</Link>
                    <Link href="/blogs/Clenbuterol Tolerance: Understanding and Managing It" className="blogLinkButton">Clenbuterol Tolerance: Understanding and Managing It</Link>
                </div>
            </div>
            <div className="shopAdditionalInfoContainer">
                <h3>Shipping Details</h3>
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
            </div>
        </div>
    );
}

export default Shop;