import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#C62828] to-[#2b0d0d] text-white py-10 px-6 md:px-16">
      {/* 상단: 브랜드 + 섹션 */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* 브랜드 */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">MAPLE MATCH</h2>
        </div>

        {/* 섹션들 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Resources */}
          <div>
            <p className="mb-4 font-semibold">Resources</p>
            <ul className="flex flex-col gap-2">
              <NavLink to="/test">Take the test</NavLink>
              <NavLink to="/cities">Cities</NavLink>
              <NavLink to="/about">About us</NavLink>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <p className="mb-4 font-semibold">Follow Us</p>
            <ul className="flex gap-6">
              <li className="flex flex-col items-center gap-1">
                <a
                  href="https://www.linkedin.com/in/seongyeon-chang-126731331/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    style={{ color: "#ffffff", fontSize: "1.8rem" }}
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
                    style={{ color: "#ffffff", fontSize: "1.8rem" }}
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
