import AboutUsCards from "../components/About";

function About() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-4xl font-[geo] font-extrabold text-[#C62828] mb-8 text-center">
          About Us
        </h1>
        <p className="text-center text-gray-700 mb-12">
          This project started with Caroline’s idea and design vision. As the
          project lead, she planned the structure and timeline and designed the
          entire UX/UI using Figma. Aymen brought the concept to life by
          developing and implementing all features. Together, we combined design
          and development to create a seamless experience.
        </p>

        {/* 팀 카드 */}
        <AboutUsCards />
      </div>
    </div>
  );
}

export default About;
