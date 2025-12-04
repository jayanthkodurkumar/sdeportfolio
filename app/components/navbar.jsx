// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between py-5 px-6 md:px-12">
        {/* Brand */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-gray-900 text-2xl md:text-3xl font-extrabold tracking-wide hover:text-blue-600 transition-colors duration-300"
          >
            JAYANTH KODUR KUMAR
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {[
            { label: "ABOUT", href: "/#about" },
            { label: "EXPERIENCE", href: "/#experience" },
            { label: "SKILLS", href: "/#skills" },
            { label: "EDUCATION", href: "/#education" },
            { label: "PROJECTS", href: "/#projects" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
              >
                <div className="text-gray-800 font-medium tracking-wide transition-colors duration-300 hover:text-blue-600">
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
