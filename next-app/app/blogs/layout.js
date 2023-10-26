import Product from '@/components/Product';
import Link from 'next/link';
import '../../styles/blog.css'

function BlogLayout({ children }) {
  return (
    <div className="blogLayoutContainer">
      {children}
      <div className="blogAdditionalInfo">
        <div className="blogLinksContainer">
          <Link href="/blogs/clenLegalStatus" className="blogLinkButton">Legal Status of Clenbuterol: A Global Perspective</Link>
          <Link href="/blogs/clenMisuseAndAbuse" className="blogLinkButton">Misuse and Abuse of Clenbuterol: Risks and Consequences</Link>
          <Link href="/blogs/clenHealthRisks" className="blogLinkButton">Clenbuterol Health Risks: What You Need to Know</Link>
          <Link href="/blogs/clenTestingAndDetection" className="blogLinkButton">Clenbuterol Testing & Detection: What Everyone Should Know</Link>
        </div>
        <div className="blogLayoutProductsContainer">
          <Product 
            src="/clenSopharmaOneBoxWatermark.jpg"
            alt="clenSopharmaThreeBox" 
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
            href="/shop/clenOneBox"
            heading="Clenbuterol 50 tabs / 0,02 mg"
            oldPrice={false}
            price="$50.00"
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
            price="$36.00"
            title="ketotifenSopharma"
          />

          <div className="blogLinksContainer">
            <Link href="/blogs/clenAlternatives" className="blogLinkButton">Safe & Effective Bodybuilding Alternatives to Clen</Link>
            <Link href="/blogs/clenConsultation" className="blogLinkButton">Consultation with a Healthcare Professional: Essential in Bodybuilding</Link>
            <Link href="/blogs/clenEthicalConsiderations" className="blogLinkButton">Ethical Considerations of Clenbuterol Use in Bodybuilding</Link>
          </div>

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
    </div>
  );
}

export default BlogLayout;