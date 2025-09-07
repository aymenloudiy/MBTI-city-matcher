import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import type { City } from "@/types/city";
import type { MbtiProfile } from "@/lib/mbti";

interface ResultCardProps {
  mbti: string;
  city: City;
  profile: MbtiProfile;
  onRetake: () => void;
}

export default function ResultCard({
  mbti,
  city,
  profile,
  onRetake,
}: ResultCardProps) {
  const handleShare = () => {
    const shareText = `📍 My Maple City result  
🏙️ ${city.name}${city.title ? ` (${city.title})` : ""}  
🧩 ${mbti} – ${roleFromMbti(mbti)}  

👉 Try yours: ${window.location.origin}`;

    navigator.clipboard
      .writeText(shareText)
      .then(() => toast.success("Result copied to clipboard! 📋"))
      .catch(() => toast.error("Failed to copy result"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-2xl rounded-3xl bg-white shadow-xl ring-1 ring-black/10 overflow-hidden"
    >
      <div className="bg-[#2b0d0d] p-6 text-center text-white space-y-2">
        <h2 className="text-3xl font-extrabold font-[geologica]">
          Your Maple City is {city.name}!
        </h2>
        <p className="text-xl font-semibold tracking-wide font-[nunito]">
          {mbti} – <span className="font-extrabold">{roleFromMbti(mbti)}</span>
        </p>
      </div>

      <div className="mt-6 px-6">
        <img
          src={city.image}
          alt={city.title || city.name}
          className="w-full rounded-2xl shadow-md object-cover h-64 object-cover"
        />
      </div>

      <div className="mt-5 px-6 space-y-3">
        <h3 className="text-2xl font-bold text-[#C62828]">
          {city.title || city.name}
        </h3>
        <p className="text-gray-700 leading-relaxed">{city.description}</p>
      </div>

      <div className="mt-5 px-6 space-y-3">
        <p className="text-gray-900 font-medium">{profile.blurb}</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 px-6 pb-6">
        <button
          type="button"
          className="h-12 rounded-xl border-2 border-[#C62828] text-[#C62828] font-semibold hover:bg-[#C62828] hover:text-white transition"
          onClick={onRetake}
        >
          Retake
        </button>
        <button
          type="button"
          className="h-12 rounded-xl bg-[#C62828] text-white font-semibold hover:bg-[#a31d1d] transition shadow"
          onClick={handleShare}
        >
          Share Result
        </button>
      </div>
    </motion.div>
  );
}

function roleFromMbti(mbti: string) {
  const map: Record<string, string> = {
    ISTJ: "Executive / Logistician",
    ISFJ: "Defender",
    INFJ: "Advocate",
    INTJ: "Architect",
    ISTP: "Virtuoso",
    ISFP: "Adventurer",
    INFP: "Mediator",
    INTP: "Thinker",
    ESTP: "Dynamo",
    ESFP: "Entertainer",
    ENFP: "Campaigner",
    ENTP: "Debater",
    ESTJ: "Executive",
    ESFJ: "Consul",
    ENFJ: "Protagonist",
    ENTJ: "Commander",
  };
  return map[mbti] ?? "Explorer";
}
