import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="mx-16">
      <ul className="flex justify-between gap-8">
        <li className="py-4 px-4 bg-white rounded-xl">
          <NavLink to="/test">Take the test</NavLink>
        </li>
        <li className="py-4 px-4 bg-white rounded-xl">
          <NavLink to="/cities">Cities</NavLink>
        </li>
        <li className="py-4 px-4 bg-white rounded-xl">
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
