import { NavLink } from "react-router";

function MainBanner() {
  return (
    <div className="flex">
      <div className="grow">
        <h2>Find Your Canadian City Based On Your MBTI</h2>
      </div>
      <div>
        <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator">
          What is MBTI?
        </a>
        <NavLink to={"/test"}>Start Test</NavLink>
      </div>
    </div>
  );
}
export default MainBanner;
