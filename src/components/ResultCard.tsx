import { motion } from "framer-motion";
import type { City } from "@/types/city";
import type { MbtiProfile } from "@/lib/mbti";

export default function ResultCard({
  mbti,
  city,
  profile,
  onRetake,
  onShare,
}: {
  mbti: string;
  city: City;
  profile: MbtiProfile;
  onRetake: () => void;
  onShare: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-2xl rounded-3xl bg-white shadow-xl ring-1 ring-black/10 overflow-hidden "
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#C62828] to-[#2b0d0d] p-6 text-center text-white space-y-2"
      >
        <h2 className="text-3xl font-extrabold font-[geo]">
          Your Maple City is {city.name}!
        </h2>
        <p className="text-xl font-semibold tracking-wide font-[Space Mono]">
          {mbti} – <span className="font-extrabold">{roleFromMbti(mbti)}</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 px-6"
      >
        <img
          src={city.image}
          alt={city.title || city.name}
          className="w-full rounded-2xl shadow-md object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-5 px-6 space-y-3"
      >
        <h3 className="text-2xl font-bold text-[#C62828]">
          {city.title || city.name}
        </h3>
        <p className="text-gray-700 leading-relaxed">{city.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-5 px-6 space-y-3"
      >
        <p className="text-gray-900 font-medium">{profile.blurb}</p>
        <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-800 space-y-2 shadow-inner">
          <div>
            ✈️ <span className="font-semibold">Travel Recommendation:</span>{" "}
            {profile.travel}
          </div>
          <div>
            🚫 <span className="font-semibold">Less Compatible:</span>{" "}
            {profile.lessCompatible}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 grid grid-cols-2 gap-4 px-6 pb-6"
      >
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
          onClick={onShare}
        >
          Share Result
        </button>
      </motion.div>
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
