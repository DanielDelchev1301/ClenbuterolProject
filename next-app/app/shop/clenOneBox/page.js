import Product from '@/components/Product';
import '../../../styles/shopItem.css';

export const metadata = {
    title: 'Clenbuterol 50 tabs / 0,02 mg | Buy Clenbuterol Online',
    description: 'Buy original Sopharma Clenbuterol online! Get 50 tabs with FAST and RELIABLE shipping in Europe, and enjoy CASH ON DELIVERY payment method.',
    keywords: 'buy clenbuterol online, buy clenbuterol, buy clenbuterol sopharma, fast shipping clenbuterol, cash on delivery clenbuterol, clenbuterol sopharma, clenbuterol kaufen, clenbuterol sopharma kaufen',
    openGraph: {
        title: 'clenSopharmaOneBox',
        type: 'website',
        images: ['https://clenpeakperformance.com/clenSopharmaOneBoxWatermark.jpg'],
        url: 'https://clenpeakperformance.com/shop/clenOneBox',
    },
    alternates: {
      canonical: 'https://clenpeakperformance.com/shop/clenOneBox',
    }
};

function Clen() {
    return (
        <div className="shopItemMainContainer">
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
            <h4>Description</h4>
            <p>Clenbuterol, originally designed to treat breathing disorders, is now widely used for <strong>effective fat burning</strong>, appetite suppression, and muscle preservation. Clenbuterol offers the ideal solution for <strong>weight loss</strong> and achieving a lean body shape. At Clen Peak Performance, you can conveniently purchase Clenbuterol online. Our recommended dosage for effective fat loss is 20 mcg taken orally with breakfast. Remember to maintain a daily dosage of 0.02 mg, with a maximum of 120 mcg per day. Take the pills daily, except on rest days. Consume them 30-45 minutes before workouts. Possible side effects from excessive dosage include sleep disturbances, nervousness, and muscle cramps.</p>
            <p>Choose Clenbuterol to transform your body composition by targeting fat and muscle tissue. Clen Peak Performance is your trusted source to buy Clenbuterol, working closely with <strong>Sopharma, the official producer of Clenbuterol</strong> in Bulgaria. We offer a range of quality Clenbuterol products and provide <strong>FAST</strong> and <strong>RELIABLE</strong> for your convenience. All orders are shipped 1-2 business days after the order and typically arrive within 2-5 days in Europe. Rest assured, our products are of the <strong>highest quality</strong>, with constant quality control. We encourage consultation with a doctor before using Clenbuterol for weight loss. Get started with your Clenbuterol journey and enjoy an <strong>unbeatable price</strong>, along with <strong>fast shipping</strong>. Transform your body shape with just one click!</p>
            <p>Please note that Clen Peak Performance accepts <strong>cash on delivery as the payment method</strong>.</p>
            <h4>Additional Information</h4>
            <p><strong>Manufacturer:</strong> Sopharma</p>
            <p><strong>Tablets in a box:</strong> 50</p>
            <p><strong>Mg in one tablet:</strong> 0.02 mg</p>
            <h4>Related Products</h4>
            <div className="relatedProductsContainer">
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
        </div>
    )
};

export default Clen;