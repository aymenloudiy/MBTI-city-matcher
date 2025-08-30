import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#C62828] to-[#2b0d0d] text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-8 items-center md:items-start">
        <NavLink to="/">
          <img
            src="../../public/images/logo.png"
            alt="Maple Match Logo"
            className="h-10 md:h-48 mx-auto md:mx-0"
          />
        </NavLink>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full md:w-auto items-center md:items-start text-center md:text-left">
          <div>
            <p className="mb-4 font-semibold text-lg md:text-xl">Resources</p>
            <ul className="flex flex-col gap-2">
              <NavLink to="/test">Take the test</NavLink>
              <NavLink to="/cities">Cities</NavLink>
              <NavLink to="/about">About us</NavLink>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-semibold text-lg md:text-xl">Follow Us</p>
            <ul className="flex gap-6 justify-center md:justify-start">
              <li className="flex flex-col items-center gap-1">
                <a
                  href="https://www.linkedin.com/in/seongyeon-chang-126731331/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    style={{ color: "#ffffff", fontSize: "1.6rem" }}
                  />
                </a>
                <span className="text-sm font-medium">Caroline</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <a
                  href="https://www.linkedin.com/in/aymen-loudiy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    style={{ color: "#ffffff", fontSize: "1.6rem" }}
                  />
                </a>
                <span className="text-sm font-medium">Aymen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        &copy; 2025 MAPLE MATCH &trade;. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
