import type { City } from "@/types/city";

export type Trait = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type Axis = "EI" | "SN" | "TF" | "JP";
export type AnswerMap = Record<string, "1" | "2">;

type OptionWeight = { trait: Trait; points: number };
type QMeta = { axis: Axis; A: OptionWeight; B: OptionWeight };

const Q: Record<string, QMeta> = {
  "1": {
    axis: "EI",
    A: { trait: "E", points: 1 },
    B: { trait: "I", points: 1 },
  },
  "2": {
    axis: "EI",
    A: { trait: "E", points: 2 },
    B: { trait: "I", points: 2 },
  },
  "3": {
    axis: "EI",
    A: { trait: "E", points: 3 },
    B: { trait: "I", points: 3 },
  },
  "4": {
    axis: "EI",
    A: { trait: "E", points: 1 },
    B: { trait: "I", points: 1 },
  },

  "5": {
    axis: "SN",
    A: { trait: "S", points: 1 },
    B: { trait: "N", points: 1 },
  },
  "6": {
    axis: "SN",
    A: { trait: "S", points: 3 },
    B: { trait: "N", points: 3 },
  },
  "7": {
    axis: "SN",
    A: { trait: "S", points: 1 },
    B: { trait: "N", points: 1 },
  },
  "8": {
    axis: "SN",
    A: { trait: "S", points: 2 },
    B: { trait: "N", points: 2 },
  },

  "9": {
    axis: "TF",
    A: { trait: "T", points: 1 },
    B: { trait: "F", points: 1 },
  },
  "10": {
    axis: "TF",
    A: { trait: "T", points: 3 },
    B: { trait: "F", points: 3 },
  },
  "11": {
    axis: "TF",
    A: { trait: "T", points: 2 },
    B: { trait: "F", points: 2 },
  },
  "12": {
    axis: "TF",
    A: { trait: "T", points: 1 },
    B: { trait: "F", points: 1 },
  },

  "13": {
    axis: "JP",
    A: { trait: "J", points: 1 },
    B: { trait: "P", points: 1 },
  },
  "14": {
    axis: "JP",
    A: { trait: "J", points: 3 },
    B: { trait: "P", points: 3 },
  },
  "15": {
    axis: "JP",
    A: { trait: "J", points: 1 },
    B: { trait: "P", points: 1 },
  },
  "16": {
    axis: "JP",
    A: { trait: "J", points: 4 },
    B: { trait: "P", points: 4 },
  },
};

const pick = (t: Record<Trait, number>, a: Trait, b: Trait) =>
  t[a] >= t[b] ? a : b;

export function scoreMbti(answers: AnswerMap) {
  const totals: Record<Trait, number> = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };
  for (const [qid, ans] of Object.entries(answers)) {
    const meta = Q[qid];
    if (!meta) continue;
    const w = ans === "1" ? meta.A : meta.B;
    totals[w.trait] += w.points;
  }
  const mbti =
    pick(totals, "E", "I") +
    pick(totals, "S", "N") +
    pick(totals, "T", "F") +
    pick(totals, "J", "P");
  return { mbti };
}

type Mbti =
  | "ISTJ"
  | "ISFJ"
  | "INFJ"
  | "INTJ"
  | "ISTP"
  | "ISFP"
  | "INFP"
  | "INTP"
  | "ESTP"
  | "ESFP"
  | "ENFP"
  | "ENTP"
  | "ESTJ"
  | "ESFJ"
  | "ENFJ"
  | "ENTJ";

export type MbtiProfile = {
  cityId: number;
  blurb: string;
  travel: string;
  lessCompatible: string;
};

export const MBTI_PROFILE: Record<Mbti, MbtiProfile> = {
  ISTJ: {
    cityId: 6,
    blurb:
      "You're dependable, logical, and grounded. Ottawa’s structured, safe, and intellectually focused environment mirrors your love of order and responsibility. As Canada’s capital, it offers stable careers, historic neighborhoods, and meaningful traditions — a perfect match for your sense of duty and long-term planning. You’ll thrive where rules are respected, and systems run smoothly.",
    travel: "Quebec City - for its heritage and formality.",
    lessCompatible:
      "St. John's - its spontaneity and unpredictability may feel unsettling.",
  },
  ISFJ: {
    cityId: 2,
    blurb:
      "You're thoughtful, devoted, and service-oriented. Charlottetown’s quiet charm and strong community bonds provide the kind of caring, close-knit atmosphere you cherish. You thrive in settings where kindness matters, and routines are predictable. This small capital city allows you to build deep roots while contributing to your surroundings in meaningful ways.",
    travel: "Victoria - a peaceful, artistic escape.",
    lessCompatible:
      "Calgary - its fast pace and competitive energy may overwhelm you.",
  },
  INFJ: {
    cityId: 13,
    blurb:
      "You're insightful, imaginative, and drawn to purpose. Victoria’s graceful scenery, literary feel, and artsy atmosphere allow your reflective and idealistic self to flourish. As a city that embraces creativity, social values, and tranquility, you’ll find space to live authentically while engaging in causes that matter to you.",
    travel: "Iqaluit - for introspection and solitude.",
    lessCompatible:
      "Toronto - overstimulation may drain your emotional energy.",
  },
  INTJ: {
    cityId: 6,
    blurb:
      "You're strategic, disciplined, and deeply thoughtful. Ottawa's stable infrastructure, academic opportunities, and quiet professionalism make it an ideal home for someone who thrives on long-term planning and depth. This capital city’s quiet efficiency supports your need for independent problem-solving and intellectual growth.",
    travel: "Montreal - stimulating and culturally diverse.",
    lessCompatible: "Charlottetown - may feel too small or limited in vision.",
  },
  ISTP: {
    cityId: 1,
    blurb:
      "You're adventurous, practical, and action-oriented. Calgary’s rugged outdoors and entrepreneurial spirit give you space to explore, tinker, and adapt on the go. Whether it’s hiking, skiing, or engaging in hands-on work, this city supports your love of freedom and efficiency.",
    travel: "Whitehorse - perfect for solo exploration and nature.",
    lessCompatible: "Quebec City - may feel too romanticized or rigid.",
  },
  ISFP: {
    cityId: 13,
    blurb:
      "You're artistic, gentle, and highly attuned to beauty. Victoria’s coastal elegance, blooming gardens, and quiet creativity align with your need for personal space and artistic expression. The peaceful rhythms here allow you to feel free and emotionally balanced, while still finding inspiration in nature and community.",
    travel: "Saint John - a cozy coastal city with soul.",
    lessCompatible:
      "Winnipeg - its structure and climate might feel uninspiring.",
  },
  INFP: {
    cityId: 13,
    blurb:
      "You're introspective, values-driven, and compassionate. Victoria gives you a safe, serene backdrop to live in alignment with your ideals. The pace is slow, the energy is gentle, and artistic expression is celebrated — all of which provide you the right environment to dream, create, and connect deeply.",
    travel: "Quebec City - full of magic and meaning.",
    lessCompatible: "Toronto - may feel too commercial or chaotic.",
  },
  INTP: {
    cityId: 5,
    blurb:
      "You're intellectual, unconventional, and drawn to complexity. Montreal offers academic richness, multicultural energy, and room for abstract thinking. It’s a place where you can get lost in thought, meet diverse minds, and invent new systems — all while enjoying independence and stimulation.",
    travel: "Yellowknife - quiet for deep contemplation.",
    lessCompatible: "Regina - may feel too routine or repetitive.",
  },
  ESTP: {
    cityId: 1,
    blurb:
      "You're bold, resourceful, and love a challenge. Calgary offers high-paced energy, access to adventure, and a business-forward mindset — a perfect combo for your spontaneous and thrill-seeking nature. You'll thrive in its modern edge and natural surroundings.",
    travel: "Whistler - full of fun and action.",
    lessCompatible: "Iqaluit - its quiet lifestyle may feel too limiting.",
  },
  ESFP: {
    cityId: 11,
    blurb:
      "You're lively, warm, and love excitement. Toronto’s buzz, diversity, and endless social scenes feed your need for fun and people. You’ll find purpose in entertainment, hospitality, or cultural events — anything that lets you connect and enjoy life in real time.",
    travel: "Montreal - a party with depth.",
    lessCompatible: "Yellowknife - may lack stimulation and connection.",
  },
  ENFP: {
    cityId: 5,
    blurb:
      "You're energetic, expressive, and love novelty. Montreal’s creative, eclectic feel gives you the freedom to explore, dream, and engage with new people and ideas every day. It’s a place where life is art, and spontaneity is welcomed.",
    travel: "St. John's - colorful and full of personality.",
    lessCompatible: "Winnipeg - may feel too limiting or conventional.",
  },
  ENTP: {
    cityId: 11,
    blurb:
      "You're witty, innovative, and always on the hunt for the next idea. Toronto’s business scene, cultural platforms, and international flair will give you the challenges and variety you crave. From debates to startups, it’s your playground of ideas.",
    travel: "Vancouver - innovation meets nature.",
    lessCompatible: "Saskatoon - may feel too quiet or restrictive.",
  },
  ESTJ: {
    cityId: 1,
    blurb:
      "You're driven, organized, and a natural leader. Calgary’s strong economic scene, efficient systems, and sense of order suit your style. You’ll find growth through clear roles, goals, and the opportunity to take charge.",
    travel: "Ottawa - orderly with purpose.",
    lessCompatible: "Saint John - may feel too slow-paced.",
  },
  ESFJ: {
    cityId: 3,
    blurb:
      "You're generous, community-focused, and value harmony. Halifax’s kind-hearted culture and collaborative atmosphere will make you feel at home. You thrive where you can care for others, participate in events, and create lasting connections.",
    travel: "Charlottetown - warm and welcoming.",
    lessCompatible: "Iqaluit - its remoteness may feel isolating.",
  },
  ENFJ: {
    cityId: 6,
    blurb:
      "You're inspirational, compassionate, and naturally drawn to people. Ottawa’s professional, civic-minded energy aligns with your desire to lead with meaning and make a difference. You’ll find fulfillment in its balance of structure and social opportunity, where community meets action.",
    travel: "Montreal - perfect for connection and culture.",
    lessCompatible: "Yellowknife - may feel too disconnected from others.",
  },
  ENTJ: {
    cityId: 11,
    blurb:
      "You're confident, assertive, and future-focused. Toronto’s fast-paced environment, access to leadership roles, and big-picture energy match your ambition and strategy. It's a launchpad for innovation and personal achievement.",
    travel: "Vancouver - success meets serenity.",
    lessCompatible: "Charlottetown - may feel too small and static.",
  },
};

export function pickCityForMbti(mbti: string, pool: City[]) {
  const prof = MBTI_PROFILE[mbti as Mbti];
  if (!prof) return { city: null, profile: null as MbtiProfile | null };
  const city = pool.find((c) => c.id === prof.cityId) ?? null;
  return { city, profile: prof };
}

export function evaluateQuiz(answers: AnswerMap, pool: City[]) {
  const { mbti } = scoreMbti(answers);
  const { city, profile } = pickCityForMbti(mbti, pool);
  return { mbti, city, profile };
}
