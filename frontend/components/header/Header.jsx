import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <>
      <header className="landing-page-header w-full shadow-sm">
  <nav className="landing-page-navbar flex justify-between items-center px-4 py-5 sm:px-10 sm:py-6">
    <div className="nav-left flex items-center   sm:w-1/2">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="30" viewBox="0 0 147 30">
          <path fill="#ff3333" d="M15.047 30C6.737 30 0 23.284 0 15 0 6.716 6.737 0 15.047 0s15.047 6.716 15.047 15c0 8.284-6.736 15-15.047 15zM24.3 15.111c.028-2.353-1.332-4.866-3.121-6.667-3.121-3.088-7.558-2.923-10.924-1.333 2.898.242 4.58 1.214 6.242 2.889 1.696 1.673 2.229 2.95 2.23 5.111h-2.899l5.574 6.222 5.573-6.222h-2.675zM5.796 14.89c-.029 2.353 1.332 4.866 3.12 6.667 3.122 3.088 7.558 2.923 10.924 1.333-2.898-.242-4.579-1.214-6.242-2.889-1.695-1.673-2.229-2.95-2.229-5.111h2.898L8.694 8.667l-5.573 6.222h2.675z"></path>
        </svg>
      </div>
      <ul className="nav-left-links hidden md:flex items-center gap-6">
        <li><Link href="">Convert</Link></li>
        <li><Link href="">OCR</Link></li>
        <li><Link href="">API</Link></li>
        <li><Link href="">Pricing</Link></li>
        <li><Link href="">Help</Link></li>
      </ul>
    </div>
    <div className="nav-right flex items-center gap-4">
      <button className="border-2 p-2 w-32 border-solid border-red-400 rounded-lg">
        <Link href="">Sign up</Link>
      </button>
      <button>
        <Link href="" className="btn-primary">Log in</Link>
      </button>
    </div>
  </nav>
</header>


    </>
  );
}

export default Header;
