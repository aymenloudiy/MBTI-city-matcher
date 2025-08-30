import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center md:justify-between py-6 px-6 md:px-16 bg-gradient-to-r from-[#C62828] to-[#2b0d0d] uppercase">
      <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
        <NavLink to="/">
          <h1 className="font-bold text-3xl md:text-5xl text-white text-shadow-[_-1px_0_black,_0_1px_black,_1px_0_black,_0_-1px_black] text-center md:text-left">
            Maple Match
          </h1>
        </NavLink>
      </div>

      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
