import Product from '@/components/Product';
import '@/styles/home.css'
import Link from 'next/link';

function Home() {
  return (
    <section className="homeMainContainer">
      <div className="homeFlexContainer">
        <div className="ourMissionContainer">
          <h2>Who We Are and Our Mission</h2>
          <p>For over a decade, we have been a trusted source of information and support for individuals interested in the world of clenbuterol. Our commitment to providing accurate, responsible, and ethical guidance on clenbuterol's use sets us apart. We understand the curiosity and interest in this substance, but our mission goes beyond mere curiosity.<br /><br />Our mission is to promote safety, knowledge, and responsible choices. We aim to educate, emphasizing the potential risks and legal considerations while providing valuable insights for those considering clenbuterol. We strive to be a beacon of integrity, guiding you towards better-informed decisions that prioritize health, well-being, and compliance with regulations.
          </p>
        </div>
        <div className="blogLinksContainer">
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
        </div>
      </div>
      <div className="homeFlexContainer">
        <div className="blogLinksContainer">
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
        </div>
        <div className="productsContainer">
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
        </div>
      </div>
      <div className="homeFlexContainer">
        <div className="ourMissionContainer">
          <h2>Transforming Lives, One Body at a Time</h2>
          <p>For over a decade, our company has been at the forefront of the health and fitness industry, operating in nine countries around the world. Our mission is to empower individuals to achieve their body goals safely and responsibly while adhering to legal and ethical standards.<br /><br />We take immense pride in having helped over 8,000 people embark on transformative journeys towards healthier, fitter lives. By providing a wealth of valuable information, expertly crafted blogs, and comprehensive resources, we've become a trusted source for those seeking guidance on their body transformation endeavors.<br /><br />Our company operates with a clear focus on education, safety, and integrity. We understand that the allure of substances like clenbuterol can be strong, but we emphasize the importance of informed decisions. Our guidance ensures that our clients prioritize their health, comply with local regulations, and achieve their body goals effectively.<br /><br />From athletes to fitness enthusiasts, we've touched the lives of individuals from all walks of life, guiding them towards healthier, more sustainable approaches to fitness and body transformation. Our dedication to our clients' success and well-being is what sets us apart, making us a beacon of support and knowledge in the realm of health and fitness.
          </p>
        </div>
        <div className="blogLinksContainer">
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
        </div>
      </div>
      <div className="homeFlexContainer">
        <div className="blogLinksContainer">
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
          <Link href="/blogs/clenAsAPerformanceDrug" className="blogLinkButton">Clenbuterol as a Performance-Enhancing Drug</Link>
        </div>
        <div className="productsContainer">
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
        </div>
      </div>
    </section>
  );
}

export default Home;