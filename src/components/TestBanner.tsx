import { NavLink } from "react-router";

function TestBanner() {
  return (
    <div className="flex flex-col">
      <h3>Which Canadian city is right for you?</h3>
      <p className="text-center">
        Take a quick personality-based test to discover the perfect city that
        matches your vibe
      </p>
      <div className="grow">
        <NavLink to={"/test"}>Start Test</NavLink>
      </div>
    </div>
  );
}
export default TestBanner;
