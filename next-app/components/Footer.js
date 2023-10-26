import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import '@/styles/footer.css'
import Link from 'next/link';

function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerIconsContainer">
                <div className="iconContainer">
                    <CalendarMonthIcon className="iconFooter"/>
                    <p className="footerIconText">15+</p>
                </div>
                <div className="iconContainer">
                    <TrendingUpIcon className="iconFooter"/>
                    <p className="footerIconText">8000+</p>
                </div>
                <div className="iconContainer">
                    <PublicIcon className="iconFooter"/>
                    <p className="footerIconText">9</p>
                </div>
            </div>
            <div className="footerMoreInfoContainer">
                <h3>Clen Peak Performance</h3>
                <p>Email: <Link href="mailto:clenpeakperformance@gmail.com" className="termsAndPrivacyLinks">clenpeakperformance@gmail.com</Link></p>
                <Link href="/termsAndConditions" className="termsAndPrivacyLinks">Terms and Conditions</Link>
                <Link href="/privacyPolicy" className="termsAndPrivacyLinks">Privacy Policy</Link>
                <p className="allArticlesAreBased">All our articles are based on scientific evidence and medical facts. They are written by professional researchers and medical experts who include Medical board members, MDs and qualified doctors. All the articles are reviewed by a second expert in order to deliver the highest quality and be as objective and honest  as possible. </p>
            </div>
        </footer>
    );
}

export default Footer;