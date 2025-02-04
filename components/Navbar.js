// components/Navbar.js
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
