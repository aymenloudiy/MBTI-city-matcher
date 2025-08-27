import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex py-8 px-16 justify-center items-center bg-gradient-to-r from-[#C62828] to-[#2b0d0d] uppercase">
      <div className="grow">
        <NavLink to={"/"}>
          <h1 className="font-bold text-5xl text-white text-shadow-[_-1px_0_black,_0_1px_black,_1px_0_black,_0_-1px_black]">
            Maple Match
          </h1>
        </NavLink>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
