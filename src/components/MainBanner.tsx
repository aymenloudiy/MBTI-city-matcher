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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = getCityImage(currentCity);

  return (
    <section
      className="relative flex flex-col md:flex-row w-screen min-h-[400px] md:min-h-[60vh] py-12 md:py-16 shadow-lg
             justify-center items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(${currentImage})`,
          opacity: fade ? 1 : 0,
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-16 text-white text-center md:text-left">
        <div className="flex flex-col justify-center md:w-2/3 gap-3 md:gap-5">
          <h2 className="text-4xl md:text-6xl font-[bangers] leading-tight drop-shadow-lg">
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

        <div className="flex justify-center md:justify-end w-full md:w-1/3 mt-8 md:mt-0">
          <NavLink
            to="/test"
            className="bg-[#C62828] text-[#ffffff] font-[geologica] text-lg md:text-xl font-bold py-4 px-8 rounded-xl shadow-xl 
                   hover:bg-[#a31d1d] transition-all duration-300"
          >
            Start the Test →
          </NavLink>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm font-[geologica] tracking-wide z-10">
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
