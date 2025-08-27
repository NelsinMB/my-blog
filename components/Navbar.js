
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar2">
      <div className="nav2-container">
        <ul>
          <li>
            <Link href="/about">
              [About]
            </Link>
          </li>
          <li>
            <Link href="/blog">
              [Blog]
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
