import Product from '@/components/Product';
import '@/styles/home.css'
import Link from 'next/link';

export const metadata = {
  title: 'Ultimate Clenbuterol Guide: Clen Info and Support',
  description: 'Explore clenbuterol safely with us. Get info, stay informed, and make responsible choices. Prioritize health and legal compliance.',
  keywords: 'clenbuterol information, clenbuterol support, buy clenbuterol, buy clen, clenbuterol sopharma,',
  openGraph: {
    title: 'home',
    type: 'website',
    images: ['https://clenpeakperformance.com/fintessGoalsImage.jpg'],
    url: 'https://clenpeakperformance.com/',
  },
  alternates: {
    canonical: 'https://clenpeakperformance.com/',
  }
};

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
          <Link href="/blogs/clenAndThermogenicEffects" className="blogLinkButton">Clenbuterol and Thermogenic Effects: A Closer Look</Link>
          <Link href="/blogs/musclePreservationWithClen" className="blogLinkButton">Muscle Preservation with Clenbuterol</Link>
          <Link href="/blogs/clenDosingProtocols" className="blogLinkButton">Clenbuterol Dosing Protocols: Strategies for Safe and Effective Use</Link>
        </div>
      </div>
      <div className="homeFlexContainer">
        <div className="blogLinksContainer">
          <Link href="/blogs/clenCycling" className="blogLinkButton">Cycling Clenbuterol: Strategies for Effective Usage</Link>
          <Link href="/blogs/clenWithOtherCompounds" className="blogLinkButton">Stacking Clenbuterol with Other Compounds: Strategies and Considerations</Link>
          <Link href="/blogs/clenSideEffects" className="blogLinkButton">Clenbuterol Side Effects: What You Need to Know</Link>
          <Link href="/blogs/clenTolerance" className="blogLinkButton">Clenbuterol Tolerance: Understanding and Managing It</Link>
        </div>
        <div className="productsContainer">
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
            alt="clenSopharmaThreeBox" 
            width="300" 
            height="300"
            href="/shop/clenThreeBoxes"
            heading="Clenbuterol 150 tabs (3x50 tabs) / 0,02 mg"
            oldPrice="75.00"
            price="60.00"
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
          <Link href="/blogs/clenLegalStatus" className="blogLinkButton">Legal Status of Clenbuterol: A Global Perspective</Link>
          <Link href="/blogs/clenMisuseAndAbuse" className="blogLinkButton">Misuse and Abuse of Clenbuterol: Risks and Consequences</Link>
          <Link href="/blogs/clenHealthRisks" className="blogLinkButton">Clenbuterol Health Risks: What You Need to Know</Link>
          <Link href="/blogs/clenTestingAndDetection" className="blogLinkButton">Clenbuterol Testing & Detection: What Everyone Should Know</Link>
        </div>
      </div>
      <iframe className="youtubeVideoHomePage"
        src="https://www.youtube.com/embed/mFw4FcCt_Eo?si=LIGN3_YAqg_Pc1Kp">
      </iframe>
      <div className="homeFlexContainer">
        <div className="blogLinksContainer">
          <Link href="/blogs/clenAlternatives" className="blogLinkButton">Safe & Effective Bodybuilding Alternatives to Clen</Link>
          <Link href="/blogs/clenConsultation" className="blogLinkButton">Consultation with a Healthcare Professional: Essential in Bodybuilding</Link>
          <Link href="/blogs/clenEthicalConsiderations" className="blogLinkButton">Ethical Considerations of Clenbuterol Use in Bodybuilding</Link>
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
        </div>
      </div>
    </section>
  );
}

export default Home;