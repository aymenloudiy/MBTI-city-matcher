import { NavLink } from "react-router";

function MainBanner() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#2b0d0d] px-6 md:px-16 mt-12 py-12 rounded-2xl shadow-lg">
      <div className="flex flex-col grow items-start justify-center gap-6 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight font-[geo]">
          Where’s your Maple City?
        </h2>
        <p className="text-lg md:text-xl font-mono">
          Discover which Canadian city matches your MBTI.
        </p>
        <p className="text-lg md:text-xl font-mono">
          Your personality, your lifestyle, your Maple City
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 md:gap-6 w-full md:w-1/3 mt-6 md:mt-0">
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
