import { NavLink } from "react-router";

function MainBanner() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#2b0d0d] px-6 md:px-16 mt-6 md:mt-12 py-12 rounded-2xl shadow-lg">
      <div className="flex flex-col justify-center md:w-2/3 gap-2 md:gap-4 text-white text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight font-[bangers] text-center tracking-wide">
          <span className="block">Where’s your</span>
          <span className="block">Maple City?</span>
        </h2>
        <p className="text-m md:text-m font-[geologica] mt-2 md:mt-4 leading-relaxed px-4 text-center">
          Discover which Canadian city matches your MBTI.
        </p>
        <p className="text-m md:text-m font-[geologica] leading-relaxed px-4 text-center">
          Your personality, your lifestyle, your Maple City
        </p>
      </div>

      <div className="flex flex-col justify-center items-center md:items-start gap-3 md:gap-6 w-full md:w-1/3 mt-6 md:mt-0">
        <a
          href="https://www.16personalities.com/free-personality-test"
          className="w-full text-sm md:text-xl text-center font-medium font-[geologica] text-white border-2 border-white py-3 md:py-4 px-6 rounded-xl hover:bg-white hover:text-[#003366] transition-colors duration-200"
        >
          What is MBTI?
        </a>
        <NavLink
          to="/test"
          className="w-full text-sm md:text-xl text-center font-[geologica] bg-[#C62828] text-white font-bold py-3 md:py-4 px-6 rounded-xl shadow-lg hover:bg-[#a31d1d] transition-colors duration-200"
        >
          Start Test
        </NavLink>
      </div>
    </section>
  );
}

export default MainBanner;
