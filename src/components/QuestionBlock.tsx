import type { question } from "@/types/question";

export default function QuestionBlock({
  questions,
  isLastPage,
  onSubmitBlock,
  answers,
}: {
  questions: question[];
  isLastPage: boolean;
  onSubmitBlock(e: React.FormEvent<HTMLFormElement>): void;
  answers: Record<string, string | undefined>;
}) {
  return (
    <form onSubmit={onSubmitBlock} className="space-y-4">
      {questions.map((q) => (
        <div key={q.id} className="flex flex-col gap-1">
          <label htmlFor={q.id} className="font-medium">
            {q.question}
          </label>
          <select
            id={q.id}
            name={q.id}
            required
            defaultValue={answers[q.id] ?? ""}
            className="border rounded p-2"
          >
            <option value="" disabled>
              --Choose an option--
            </option>
            <option value="1">{q.optionA}</option>
            <option value="2">{q.optionB}</option>
          </select>
        </div>
      ))}

      <button
        type="submit"
        className="mt-2 rounded px-4 py-2 bg-black text-white"
      >
        {isLastPage ? "Submit" : "Next"}
      </button>
    </form>
  );
}
