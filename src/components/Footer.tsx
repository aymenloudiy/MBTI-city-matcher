import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer>
      <div className="flex justify-between mx-8 my-4">
        <div className="ml-4">MBTI Cities</div>
        <div className="grow ">
          <ul className="flex justify-end gap-16">
            <li>
              <p className="mb-4">Resources</p>
              <ul className="flex flex-col gap-2">
                <NavLink to={"/test"}>Take the test</NavLink>
                <NavLink to={"/cities"}>Cities</NavLink>
                <NavLink to={"/about"}>About us</NavLink>
              </ul>
            </li>
            <li>
              <p className="mb-4">Follow Us</p>
              <ul className="flex flex-col gap-2">
                <li>Linked In</li>
                <li>Instagram</li>
              </ul>
            </li>
            <li>
              <p className="mb-4">Legal</p>
              <ul className="flex flex-col gap-2">
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mx-8 mb-4">
        <small>&copy; 2025 MBTI-Cities &trade;. All Rights Reserved.</small>
        <div>
          <ul className="flex gap-6">
            <li className="">
              <FaFacebook />
            </li>
            <li className="">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
