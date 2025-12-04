// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t bg-white border-gray-200 text-gray-800">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        {/* Subtle Divider Glow */}
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm text-gray-600">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jayanthkodurkumar/"
              className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
            >
              Jayanth
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
