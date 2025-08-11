import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="mx-16">
      <ul className="flex justify-between gap-8">
        <li className="my-4">
          <NavLink to="/test">Take the test</NavLink>
        </li>
        <li className="my-4">
          <NavLink to="/cities">Cities</NavLink>
        </li>
        <li className="my-4">
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
