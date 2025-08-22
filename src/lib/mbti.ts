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

const pick = (totals: Record<Trait, number>, a: Trait, b: Trait) =>
  totals[a] >= totals[b] ? a : b;

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

  for (const [qid, choice] of Object.entries(answers)) {
    const meta = Q[qid];
    if (!meta) continue;
    const picked = choice === "1" ? meta.A : meta.B;
    totals[picked.trait] += picked.points;
  }

  const mbti =
    pick(totals, "E", "I") +
    pick(totals, "S", "N") +
    pick(totals, "T", "F") +
    pick(totals, "J", "P");

  return { mbti, totals };
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

const MBTI_TO_CITY_ID: Record<Mbti, number> = {
  ISTJ: 1,
  ISFJ: 2,
  INFJ: 3,
  INTJ: 4,
  ISTP: 5,
  ISFP: 6,
  INFP: 7,
  INTP: 8,
  ESTP: 9,
  ESFP: 10,
  ENFP: 11,
  ENTP: 12,
  ESTJ: 13,
  ESFJ: 14,
  ENFJ: 15,
  ENTJ: 16,
};

export function pickCityForMbti(mbti: string, pool: City[]): City | null {
  const id = MBTI_TO_CITY_ID[mbti as Mbti];
  if (!id) return null;
  return pool.find((c) => c.id === id) ?? null;
}

export function evaluateQuiz(answers: AnswerMap, pool: City[]) {
  const { mbti } = scoreMbti(answers);
  const city = pickCityForMbti(mbti, pool);
  return { mbti, city };
}
