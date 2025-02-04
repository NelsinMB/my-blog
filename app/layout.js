// app/layout.js
import '../styles/globals.css'; // Import your global CSS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Next.js App',
  description: 'Converted from a React App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}