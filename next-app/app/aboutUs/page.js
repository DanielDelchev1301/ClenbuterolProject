import '../../styles/aboutUs.css';

export const metadata = {
    title: 'Clen Peak Performance About Us',
    description: 'Clen Peak Performance is owned and operated by Clen Peak Performance Inc.',
    alternates: {
      canonical: 'https://clenpeakperformance.com/aboutUs',
    }
};

function AboutUs() {
    return (
        <div className="aboutUsMainContainer">
            <h2>About Us</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1441693040124!6m8!1m7!1skAEIeke-jdsT34QTYEG--g!2m2!1d42.6661575!2d23.3569087!3f190.6507920107262!4f17.78136348479748!5f0.4000000000000002" 
                frameborder="0"
                allowFullScreen
                className="googleMapsIframe"
            ></iframe>
            <div className="aboutUsContainer">
                <h4>Clen Peak Performance is owned and operated by Clen Peak Performance Inc.</h4>
                <div className="officeAddresses">
                    <div className="headquarters">
                        <p><strong>Headquarters:</strong></p>
                        <p>Clen Peak Performance Inc.</p>
                        <p>5 Lachezar Stanchev Str., office 1143</p>
                        <p>Sofia, Sofia</p>
                        <p>1756</p>
                        <p>Bulgaria</p>
                    </div>
                    <div className="usOffice">
                        <p><strong>US Office:</strong></p>
                        <p>Clen Peak Performance Inc.</p>
                        <p>1840 WEST 49TH STREET</p>
                        <p>Hialeah, FL</p>
                        <p>33012</p>
                        <p>United States</p>
                    </div>
                    <div className="ukOffice">
                        <p><strong>UK Office:</strong></p>
                        <p>Clen Peak Performance Inc.</p>
                        <p>9 Christopher Street</p>
                        <p>London, London</p>
                        <p>EC2A 2BS</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <p>With over a <strong>DECADE</strong> of experience in selling Clenbuterol online, we stand as one of the largest websites where you can purchase <strong>high-quality Sopharma products</strong> directly from the manufacturer, all available at the best prices. We collaborate with the most reputable pharmaceutical companies to ensure your satisfaction.</p>
                <p>For your convenience, security, and peace of mind, we offer a <strong>Bank Transfer</strong> payment method and &#40;Bitcoin payments soon&#41;. Our mission is to help you achieve your weight loss goals and overall well-being. We provide <strong>FAST</strong> and <strong>RELIABLE</strong> shipping in Europe for all the products in our online shop. To ensure the highest level of service, we maintain live email support to promptly address all your requests and concerns.</p>
            </div>
        </div>
    );
}

export default AboutUs;