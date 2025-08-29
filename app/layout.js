// app/layout.js
import '../app/styles/globals.css'; // Import your global CSS
import Navbar from '../components/Navbar';
import AboutPage from './about/page';
import Link from 'next/link';


export const metadata = {
  title: 'My Personal Website',
  description: 'A Nelsin website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>

    </html>
    
  );
}