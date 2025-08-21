import { NavLink } from "react-router";

function MainBanner() {
  return (
    <section className="flex grow self-stretch bg-gradient-to-r from-[#C62828] to-[#2b0d0d] px-16 py-20 my-12 rounded-2xl shadow-lg">
      <div className="flex flex-col grow items-start justify-center gap-6 text-white">
        <h2 className="text-6xl font-extrabold leading-tight">
          Find Your Canadian City
        </h2>
        <p className="text-2xl font-light tracking-wide">
          Based on your MBTI personality type
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 text-lg tracking-wide w-1/3 relative z-10">
        <a
          className="w-full text-center font-medium text-white border-2 border-white py-4 px-6 rounded-xl hover:bg-white hover:text-[#003366] transition-colors duration-200"
          href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
        >
          What is MBTI?
        </a>
        <NavLink
          to="/test"
          className="w-full text-center bg-[#C62828] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-[#a31d1d] transition-colors duration-200"
        >
          Start Test
        </NavLink>
      </div>
    </section>
  );
}
export default MainBanner;
