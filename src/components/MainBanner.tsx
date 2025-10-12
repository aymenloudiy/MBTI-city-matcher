import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { getCityImage } from "@/lib/getCityImage";

function MainBanner() {
  const cities = [
    "Toronto",
    "Calgary",
    "Charlottetown",
    "Halifax",
    "Iqaluit",
    "Montreal",
    "Ottawa",
    "Quebec",
    "Saint John NB",
    "Saskatchewan",
    "St. John's NL",
    "Vancouver",
    "Victoria",
    "Whitehorse YT",
    "Winnipeg",
    "Yellowknife",
  ];

  const [currentCity, setCurrentCity] = useState(
    cities[Math.floor(Math.random() * cities.length)]
  );
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const nextCity = cities[Math.floor(Math.random() * cities.length)];
        setCurrentCity(nextCity);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentImage = getCityImage(currentCity);

  return (
    <section
      className="relative flex flex-col md:flex-row w-full px-6 md:px-16 mt-6 md:mt-12 py-12 rounded-2xl shadow-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 0.5s ease-in-out",
        opacity: fade ? 1 : 0,
      }}
    >
      <div className="flex flex-col justify-center md:w-2/3 gap-3 md:gap-5 text-white text-center md:text-left z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight font-[bangers] tracking-wide drop-shadow-lg">
          <span className="block">Where’s your</span>
          <span className="block text-[#FFD700]">Maple City?</span>
        </h2>

        <p className="text-base md:text-lg font-[geologica] mt-2 md:mt-4 leading-relaxed">
          Discover which Canadian city matches your MBTI.
        </p>
        <p className="text-base md:text-lg font-[geologica]">
          Your personality, your lifestyle, your Maple City.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/3 mt-8 md:mt-0 z-10">
        <NavLink
          to="/test"
          className="w-full text-lg md:text-xl text-center font-[geologica] bg-[#C62828] text-white font-bold py-4 md:py-5 px-6 rounded-xl shadow-xl 
                     hover:bg-[#a31d1d] hover:scale-105 transition-all duration-300"
        >
          Start the Test →
        </NavLink>
      </div>

      <div className="absolute bottom-3 right-4 text-white/80 text-sm font-[geologica] tracking-wide">
        📍 {currentCity.toUpperCase()}
      </div>
    </section>
  );
}

export default MainBanner;

// function MainBanner() {
//   return (
//     <section className="flex flex-col md:flex-row w-full bg-[#2b0d0d] px-6 md:px-16 mt-6 md:mt-12 py-12 rounded-2xl shadow-lg">
//       <div className="flex flex-col justify-center md:w-2/3 gap-2 md:gap-4 text-white text-center md:text-left">
//         <h2 className="text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight font-[bangers] text-center tracking-wide">
//           <span className="block">Where’s your</span>
//           <span className="block">Maple City?</span>
//         </h2>
//         <p className="text-m md:text-m font-[geologica] mt-2 md:mt-4 leading-relaxed px-4 text-center">
//           Discover which Canadian city matches your MBTI.
//         </p>
//         <p className="text-m md:text-m font-[geologica] leading-relaxed px-4 text-center">
//           Your personality, your lifestyle, your Maple City
//         </p>
//       </div>

//       <div className="flex flex-col justify-center items-center md:items-start gap-3 md:gap-6 w-full md:w-1/3 mt-6 md:mt-0">
//         <a
//           href="https://www.16personalities.com/free-personality-test"
//           className="w-full text-sm md:text-xl text-center font-medium font-[geologica] text-white border-2 border-white py-3 md:py-4 px-6 rounded-xl hover:bg-white hover:text-[#003366] transition-colors duration-200"
//         >
//           What is MBTI?
//         </a>
//         <NavLink
//           to="/test"
//           className="w-full text-sm md:text-xl text-center font-[geologica] bg-[#C62828] text-white font-bold py-3 md:py-4 px-6 rounded-xl shadow-lg hover:bg-[#a31d1d] transition-colors duration-200"
//         >
//           Start Test
//         </NavLink>
//       </div>
//     </section>
//   );
// }

// export default MainBanner;
