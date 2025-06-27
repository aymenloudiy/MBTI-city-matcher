function getMbtiType(answers) {
  let scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  for (const questionId in answers) {
    if (answers.hasOwnProperty(questionId)) {
      const answerValue = answers[questionId];

      const parts = answerValue.split("_");
      if (parts.length === 2) {
        const trait = parts[0];
        const weight = parseInt(parts[1], 10);

        if (scores.hasOwnProperty(trait) && !isNaN(weight)) {
          scores[trait] += weight;
        } else {
          console.warn(
            `Invalid trait or weight found for question "${questionId}":`,
            answerValue
          );
        }
      } else {
        console.warn(
          `Unexpected answer format for question "${questionId}":`,
          answerValue
        );
      }
    }
  }

  let mbti = "";

  mbti += scores.E >= scores.I ? "E" : "I";

  mbti += scores.S >= scores.N ? "S" : "N";

  mbti += scores.T >= scores.F ? "T" : "F";

  mbti += scores.J >= scores.P ? "J" : "P";

  return mbti;
}

const sampleAnswers = {
  q1: "E_1",
  q2: "I_3",
  q3: "S_1",
  q4: "N_4",
  q5: "T_1",
  q6: "F_3",
  q7: "J_1",
  q8: "P_4",
};

const userMbtiType = getMbtiType(sampleAnswers);

console.log("Sample Answers:", sampleAnswers);
console.log("Calculated MBTI Type:", userMbtiType);

const anotherSetOfAnswers = {
  q1: "I_1",
  q2: "E_3",
  q3: "N_1",
  q4: "S_4",
  q5: "F_1",
  q6: "T_3",
  q7: "P_1",
  q8: "J_4",
};
console.log("Another Sample Answers:", anotherSetOfAnswers);
console.log("Calculated MBTI Type:", getMbtiType(anotherSetOfAnswers));
