import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-white text-2xl font-semibold items-center">
        <li>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-[#FFEB3B] ${
                isActive ? "text-[#FFEB3B] border-b-4 border-[#FFEB3B]" : ""
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
              `transition-colors duration-200 hover:text-[#FFEB3B] ${
                isActive ? "text-[#FFEB3B] border-b-4 border-[#FFEB3B]" : ""
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
              `transition-colors duration-200 hover:text-[#FFEB3B] ${
                isActive ? "text-[#FFEB3B] border-b-4 border-[#FFEB3B]" : ""
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
