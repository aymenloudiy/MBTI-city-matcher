import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center md:justify-between py-6 px-6 md:px-16 bg-gradient-to-r from-[#C62828] to-[#2b0d0d] uppercase">
      <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
        <NavLink to="/">
          <h1
            className="font-[bangers] font-bold text-4xl md:text-5xl text-[#FFEB3B] 
text-shadow-[2px_2px_6px_rgba(0,0,0,0.5)] text-center md:text-left tracking-wider"
          >
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
