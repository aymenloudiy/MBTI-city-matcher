import type { FC } from "react";
import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
  message: string;
  email: string;
  linkedin: string;
  portfolio: string;
};

const team: TeamMember[] = [
  {
    name: "Seongyeon Chang",
    role: "Project Lead & UX/UI Designer",
    photo: "/images/caroline.jpg",
    message:
      "This project started with my idea, but everything came to life thanks to Aymen – big shout-out to my teammate! Watching each feature come alive was so exciting. Managing a project isn’t easy, but seeing imagination turn into reality was incredibly fun. Designing every element to create a user-friendly experience was the best part.",
    email: "chan0596@algonquinlive.com",
    linkedin: "https://www.linkedin.com/in/seongyeon-chang-126731331/",
    portfolio: "",
  },
  {
    name: "Aymen Loudiy",
    role: "Full-stack developer",
    photo: "/images/aymen.jpg",
    message:
      "This project began with an idea from my teammate, and I had the responsibility of bringing it to life through development — ensuring that our vision translated into functional, scalable solutions. Each stage was both challenging and rewarding as we turned concepts into reality. The project’s visual strength is due to the work of our designer, whose attention to detail and refined sense of aesthetics gave the final result its clarity, balance, and elegance.",
    email: "loud0006@algonquinlive.com",
    linkedin: "https://www.linkedin.com/in/aymen-loudiy/",
    portfolio: "",
  },
];

const AboutUsCards: FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto p-6">
      {team.map((member) => (
        <div
          key={member.name}
          className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center min-h-[450px]"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
          />
          <h3 className="text-xl font-bold font-[geo] text-[#C62828] mb-1">
            {member.name}
          </h3>
          <p className="text-gray-700 font-semibold mb-3">{member.role}</p>
          <p className="text-gray-800 text-sm leading-relaxed overflow-auto mb-4">
            {member.message}
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 gap-2 mt-auto">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-1 text-gray-700 font-semibold hover:text-[#C62828] transition-colors duration-200"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-gray-700 font-semibold hover:text-[#0e76a8] transition-colors duration-200"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-gray-700 font-semibold hover:text-[#FFD700] transition-colors duration-200"
            >
              <FaGlobe /> Portfolio
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsCards;
