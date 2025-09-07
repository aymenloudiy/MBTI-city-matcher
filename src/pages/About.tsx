import AboutUsCards from "../components/About";

function About() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-4xl font-[bangers] tracking-wider font-extrabold text-[#C62828] mb-8 text-center">
          About Us
        </h1>
        <p className="text-center text-gray-700 mb-12 font-[geologica]">
          This project started with Caroline’s idea and design vision. When she
          first came to Canada to study, one of her biggest questions was:
          “Which city would be the best fit for me?” Adapting to a new country
          is easier when you feel at home in your city, so she wished there was
          a fun way to explore Canadian cities beforehand. Now studying happily
          at Algonquin College in Ottawa, she wanted to create something
          lighthearted but helpful—a playful test that gives people a first step
          toward discovering Canada and imagining where they might belong. As
          the project lead, Caroline planned the structure and timeline and
          designed the entire UX/UI using Figma. Aymen brought the concept to
          life by developing and implementing all features. Together, we
          combined design and development to create a seamless experience.
        </p>

        <AboutUsCards />
      </div>
    </div>
  );
}

export default About;
