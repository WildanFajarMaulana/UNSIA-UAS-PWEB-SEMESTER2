// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0  w-full z-10 bg-white text-slate-800 py-4 px-[120px] shadow-md">
      <div className="container mx-auto grid grid-cols-12 gap-8 items-center">
        <div className="col-span-6 lg:col-span-3 text-center lg:text-left font-bold text-2xl">
          Edu<span className="text-blue-700">Lab.</span>
        </div>
        <ul className="col-span-6 lg:col-span-9 flex justify-center lg:justify-end gap-12">
          <li>
            <Link href="/" className="hover:text-blue-700 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/class" className="hover:text-blue-700 font-medium">
              Class
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
