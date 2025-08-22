import { NavLink } from "react-router";

function MainBanner() {
  return (
    <section className="flex grow self-stretch bg-gradient-to-r from-[#C62828] to-[#2b0d0d] px-16 py-20 my-12 rounded-2xl shadow-lg">
      <div className="flex flex-col grow items-start justify-center gap-6 text-white">
        <h2 className="text-6xl font-extrabold leading-tight font-[geo]">
          Where’s your Maple City?
        </h2>
        <p
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem" }}
        >
          Discover which Canadian city matches your MBTI.
        </p>

        <p
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem" }}
        >
          Your personality, your lifestyle, your Maple City
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 text-lg tracking-wide w-1/3 relative z-10">
        <a
          className="w-full text-2xl text-center font-medium font-[geo] text-white border-2 border-white py-4 px-6 rounded-xl hover:bg-white hover:text-[#003366] transition-colors duration-200"
          href="https://www.16personalities.com/free-personality-test"
        >
          What is MBTI?
        </a>
        <NavLink
          to="/test"
          className="w-full text-2xl text-center font-[geo] bg-[#C62828] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-[#a31d1d] transition-colors duration-200"
        >
          Start Test
        </NavLink>
      </div>
    </section>
  );
}
export default MainBanner;
