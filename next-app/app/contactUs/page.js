import Link from 'next/link';
import '../../styles/contactUs.css';

export const metadata = {
    title: 'Clen Peak Performance Contact Us',
    description: 'Clen Peak Performance is owned and operated by Clen Peak Performance Inc.',
    alternates: {
      canonical: 'https://clenpeakperformance.com/contactUs',
    }
};

function ContactUs() {
    return (
        <div className="contactUsMainContainer">
            <h2>Contact Us</h2>
            <p>If you have any questions you can contact our team at: <Link href="mailto:clenpeakperformance@gmail.com" className="contactUsEmailLink">clenpeakperformance@gmail.com</Link></p>
        </div>
    );
}

export default ContactUs;