import { NavLink } from "react-router";

function MainBanner() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-stretch bg-[#2b0d0d] px-6 md:px-16 py-12 md:py-20 my-6 md:my-12 rounded-2xl shadow-lg gap-8">
      {/* Left Text */}
      <div className="flex flex-col grow items-center md:items-start justify-center gap-4 text-white text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight font-[geo]">
          Where’s your Maple City?
        </h2>
        <p
          className="text-lg md:text-xl"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Discover which Canadian city matches your MBTI.
        </p>
        <p
          className="text-lg md:text-xl"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Your personality, your lifestyle, your Maple City
        </p>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/3 text-center md:text-center">
        <a
          className="w-full text-lg md:text-2xl font-medium font-[geo] text-white border-2 border-white py-3 md:py-4 px-4 md:px-6 rounded-xl hover:bg-white hover:text-[#003366] transition-colors duration-200"
          href="https://www.16personalities.com/free-personality-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is MBTI?
        </a>
        <NavLink
          to="/test"
          className="w-full text-lg md:text-2xl font-bold font-[geo] bg-[#C62828] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl shadow-lg hover:bg-[#a31d1d] transition-colors duration-200"
        >
          Start Test
        </NavLink>
      </div>
    </section>
  );
}

export default MainBanner;
