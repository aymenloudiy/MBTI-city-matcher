import { useState } from "react";
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
  const [localAnswers, setLocalAnswers] = useState(answers);

  const handleSelect = (id: string, value: string) => {
    setLocalAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    Object.assign(answers, localAnswers);
    onSubmitBlock(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8"
    >
      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="w-full space-y-4">
            <label className="mb-3 block text-xl font-bold font-[geo] text-[#C62828]">
              {q.question}
            </label>

            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <button
                type="button"
                onClick={() => handleSelect(q.id, "1")}
                className={`flex-1 rounded-xl border-2 p-4 text-lg font-medium transition flex justify-center items-center 
                  ${
                    localAnswers[q.id] === "1"
                      ? "bg-[#C62828] text-white border-[#C62828]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                style={{ minHeight: "5rem" }}
              >
                {q.optionA}
              </button>
              <button
                type="button"
                onClick={() => handleSelect(q.id, "2")}
                className={`flex-1 rounded-xl border-2 p-4 text-lg font-medium transition flex justify-center items-center 
                  ${
                    localAnswers[q.id] === "2"
                      ? "bg-[#C62828] text-white border-[#C62828]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                style={{ minHeight: "5rem" }}
              >
                {q.optionB}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-[110px]">
          {showPrev && onPrev ? (
            <button
              type="button"
              onClick={onPrev}
              className="w-full rounded-xl border-2 border-[#C62828] text-[#C62828] px-4 py-2 hover:bg-[#C62828] hover:text-white transition"
            >
              Previous
            </button>
          ) : (
            <span className="invisible block h-10 w-full rounded-xl border px-4 py-2" />
          )}
        </div>

        <div className="text-sm text-gray-500 font-[Space Mono] text-center flex-1">
          {pageLabel}
        </div>

        <div className="w-full md:w-[110px] flex justify-end">
          <button
            type="submit"
            className="w-full md:w-auto rounded-xl bg-[#C62828] text-white px-4 py-2 shadow hover:bg-[#a31d1d] transition"
            disabled={Object.values(localAnswers).some((val) => !val)}
          >
            {isLastPage ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </form>
  );
}
