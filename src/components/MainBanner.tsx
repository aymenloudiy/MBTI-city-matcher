import { NavLink } from "react-router";

function MainBanner() {
  return (
    <div className="flex grow self-stretch bg-[#4B5563] px-8 my-12 py-12">
      <div className="flex flex-col grow items-start justify-center gap-12 text-7xl  text-white">
        <h2 className="">Find Your</h2>
        <p>Canadian City</p>
        <p>Based On Your MBTI</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 text-center text-3xl tracking-wider">
        <a
          className="font-light text-[#2f2f2f] bg-[#FDB813] w-full py-4 px-8 rounded-xl"
          href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
        >
          What is MBTI?
        </a>
        <div className="bg-[#C62828] text-white font-bold w-full py-4 rounded-xl">
          <NavLink to={"/test"}>Start Test</NavLink>
        </div>
      </div>
    </div>
  );
}
export default MainBanner;
