import { NavLink } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex my-4 py-4 mx-4 px-4 justify-center items-center">
      <div className="grow">
        <NavLink to={"/"}>
          <h1>Find your canadian city</h1>
        </NavLink>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
