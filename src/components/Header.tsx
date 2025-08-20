import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex py-4 px-4 justify-center items-center bg-[#C62828] uppercase">
      <div className="grow">
        <NavLink to={"/"}>
          <h1 className="font-bold text-white text-shadow-[_-1px_0_black,_0_1px_black,_1px_0_black,_0_-1px_black]">
            Find your canadian city
          </h1>
        </NavLink>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
