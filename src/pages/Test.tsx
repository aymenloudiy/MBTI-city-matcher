import { useCallback, useMemo, useState } from "react";
import QuestionBlock from "@/components/QuestionBlock";
import CityModal from "@/components/CityModal";
import { questions as questionPages } from "@/data/questions";
import { cities } from "@/data/cities";
import { evaluateQuiz } from "@/lib/mbti";

import type { question } from "@/types/question";
import type { City } from "@/types/city";

type AnswerMap = Record<string, "1" | "2">;

export default function QuizTestPage() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [mbti, setMbti] = useState<string | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [showCity, setShowCity] = useState(false);

  const isLastPage = page === questionPages.length - 1;
  const currentBlock: question[] = useMemo(() => questionPages[page], [page]);

  const resetAll = () => {
    setPage(0);
    setAnswers({});
    setMbti(null);
    setCity(null);
    setShowCity(false);
  };

  const handleBlockSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const fd = new FormData(e.currentTarget);
      const blockAnswers: AnswerMap = {};
      for (const [id, value] of fd.entries()) {
        if (value) blockAnswers[id] = String(value) as "1" | "2";
      }

      const mergedAnswers: AnswerMap = { ...answers, ...blockAnswers };

      if (!isLastPage) {
        setAnswers(mergedAnswers);
        setPage((p) => p + 1);
        return;
      }

      const { mbti: resultMbti, city: pickedCity } = evaluateQuiz(
        mergedAnswers,
        cities
      );
      setAnswers(mergedAnswers);
      setMbti(resultMbti);
      setCity(pickedCity ?? null);
      setShowCity(!!pickedCity);
    },
    [answers, isLastPage]
  );

  return (
    <div className="mx-auto max-w-2xl p-4 space-y-4">
      {!mbti ? (
        <>
          <QuestionBlock
            questions={currentBlock}
            isLastPage={isLastPage}
            onSubmitBlock={handleBlockSubmit}
            answers={answers}
          />
          <div className="text-sm text-gray-500">
            Page {page + 1} of {questionPages.length}
          </div>
        </>
      ) : (
        <div className="rounded-xl border p-5 space-y-3">
          <h1 className="text-2xl font-semibold">Your MBTI: {mbti}</h1>
          {city && (
            <p className="text-gray-700">
              Suggested city: <span className="font-medium">{city.name}</span>
            </p>
          )}
          <div className="flex gap-2 pt-2">
            {city && (
              <button
                type="button"
                className="rounded bg-black px-4 py-2 text-white"
                onClick={() => setShowCity(true)}
              >
                Why this city?
              </button>
            )}
            <button
              type="button"
              className="rounded border px-4 py-2"
              onClick={resetAll}
            >
              Retake
            </button>
          </div>
        </div>
      )}
      <CityModal
        city={showCity ? city : null}
        onClose={() => setShowCity(false)}
      />
    </div>
  );
}
