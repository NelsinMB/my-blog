
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/writing">
              Writing
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/speaking">
              Speaking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
