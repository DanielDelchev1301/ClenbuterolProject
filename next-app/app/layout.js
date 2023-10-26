import Footer from '@/components/Footer';
import Nav from '@/components/Nav'
import '@/styles/global.css'

export const metadata = {
  robots: 'index, follow'
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <h1 className="mainHeading">Clen Peak Performance</h1>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
