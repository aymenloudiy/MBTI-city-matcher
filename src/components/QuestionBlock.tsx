import type { question } from "@/types/question";

function QuestionBlock({
  questions,
  handleSubmit,
}: {
  questions: question[];
  handleSubmit(): void;
}) {
  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => {
        return (
          <>
            <label htmlFor={q.id}>{q.question}</label>
            <select name="" id={q.id} required>
              <option value="" disabled selected>
                --Choose an option--
              </option>
              <option value="1">{q.optionA}</option>
              <option value="2">{q.optionB}</option>
            </select>
          </>
        );
      })}
      <button type="submit">Next</button>
    </form>
  );
}
export default QuestionBlock;
