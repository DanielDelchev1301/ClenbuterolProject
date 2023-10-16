import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import '@/styles/footer.css'

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
                <h3>Clen Peek Performance</h3>
                <p>Email: clenpeekperformance@gmail.com</p>
                <p>terms and conditions</p>
            </div>
        </footer>
    );
}

export default Footer;