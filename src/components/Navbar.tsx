import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8 text-white font-semibold">
        <li>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-[#003366] ${
                isActive ? "text-[#FFD700] border-b-4 border-[#FFD700]" : ""
              }`
            }
          >
            Take the test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cities"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-[#003366] ${
                isActive ? "text-[#FFD700] border-b-4 border-[#FFD700]" : ""
              }`
            }
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-[#003366] ${
                isActive ? "text-[#FFD700] border-b-4 border-[#FFD700]" : ""
              }`
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
