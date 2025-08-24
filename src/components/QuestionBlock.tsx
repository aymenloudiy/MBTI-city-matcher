import type { question } from "@/types/question";

export default function QuestionBlock({
  questions,
  isLastPage,
  onSubmitBlock,
  onPrev,
  showPrev = false,
  pageLabel,
  answers,
}: {
  questions: question[];
  isLastPage: boolean;
  onSubmitBlock(e: React.FormEvent<HTMLFormElement>): void;
  onPrev?: () => void;
  showPrev?: boolean;
  pageLabel: string;
  answers: Record<string, string | undefined>;
}) {
  return (
    <form onSubmit={onSubmitBlock} className="w-full">
      <div className="space-y-5">
        {questions.map((q) => (
          <div key={q.id} className="w-full">
            <label htmlFor={q.id} className="mb-2 block font-medium">
              {q.question}
            </label>
            <select
              id={q.id}
              name={q.id}
              required
              defaultValue={answers[q.id] ?? ""}
              className="w-full rounded border p-3"
            >
              <option value="" disabled>
                --Choose an option--
              </option>
              <option value="1">{q.optionA}</option>
              <option value="2">{q.optionB}</option>
            </select>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="w-[110px]">
          {showPrev && onPrev ? (
            <button
              type="button"
              onClick={onPrev}
              className="w-full rounded border px-4 py-2"
            >
              previous
            </button>
          ) : (
            <span className="invisible block h-10 w-full rounded border px-4 py-2" />
          )}
        </div>

        <div className="text-xs text-gray-500">{pageLabel}</div>

        <div className="w-[110px] flex justify-end">
          <button
            type="submit"
            className="w-full rounded bg-black px-4 py-2 text-white"
          >
            {isLastPage ? "submit" : "next"}
          </button>
        </div>
      </div>
    </form>
  );
}
