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
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-medium">Your city is {city.name}!</h2>
        <p className="text-xl font-semibold tracking-wide">
          {mbti} -{" "}
          <span className="font-extrabold">The {roleFromMbti(mbti)}</span>
        </p>
      </div>
      <div className="mt-6">
        <img
          src={city.image}
          alt={city.title || city.name}
          className="w-full rounded-lg object-cover"
        />
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="text-lg font-semibold">{city.title || city.name}</h3>
        <p className="text-gray-700 leading-relaxed">{city.description}</p>
      </div>

      <div className="mt-4 space-y-3">
        <p className="text-gray-800">{profile.blurb}</p>

        <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-900 space-y-1">
          <div>
            ✈️ <span className="font-medium">Travel Recommendation:</span>{" "}
            {profile.travel}
          </div>
          <div>
            🚫 <span className="font-medium">Less Compatible:</span>{" "}
            {profile.lessCompatible}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <button
          type="button"
          className="h-12 rounded-md bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300"
          onClick={onRetake}
        >
          retake
        </button>
        <button
          type="button"
          className="h-12 rounded-md bg-black text-white font-semibold hover:bg-gray-900"
          onClick={onShare}
        >
          share the result
        </button>
      </div>
    </div>
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
