import { useCallback, useMemo, useState } from "react";
import QuestionBlock from "@/components/QuestionBlock";
import ResultCard from "@/components/ResultCard";
import { questions as questionPages } from "@/data/questions";
import { cities } from "@/data/cities";
import { evaluateQuiz } from "@/lib/mbti";

import type { question } from "@/types/question";
import type { City } from "@/types/city";
import type { MbtiProfile } from "@/lib/mbti";

type AnswerMap = Record<string, "1" | "2">;

export default function QuizTestPage() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [mbti, setMbti] = useState<string | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [profile, setProfile] = useState<MbtiProfile | null>(null);

  const isLastPage = page === questionPages.length - 1;
  const currentBlock: question[] = useMemo(() => questionPages[page], [page]);

  const handlePrev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);

  const handleBlockSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const block: AnswerMap = {};
      for (const [id, value] of fd.entries())
        block[id] = String(value) as "1" | "2";
      const merged = { ...answers, ...block };

      if (!isLastPage) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setAnswers(merged);
        setPage((p) => p + 1);
        return;
      }

      const { mbti: m, city: c, profile: prof } = evaluateQuiz(merged, cities);
      setAnswers(merged);
      setMbti(m);
      setCity(c ?? null);
      setProfile(prof ?? null);
    },
    [answers, isLastPage]
  );

  const resetAll = () => {
    setPage(0);
    setAnswers({});
    setMbti(null);
    setCity(null);
    setProfile(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-50 to-white py-10 px-4">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-[#C62828] font-[bangers] tracking-wider">
            Take a quick test to find your matching city
          </h1>
          <p className="mt-2 bold text-center text-gray-600">
            We’ll guess your MBTI based on the choices you’d make in different
            situations, then suggest the city that fits you best. There are 16
            questions, each with two options—just pick whichever feels more like
            you. Ready to find your city?
          </p>
          <p className="mt-2 text-xs text-[#c62828] text-center ">
            This test only gives a guess of your MBTI, so don’t take it too
            seriously—just have fun! If you want a proper MBTI test, try the
            “What is MBTI” button on our homepage.
          </p>
        </header>

        {!mbti || !city || !profile ? (
          <QuestionBlock
            questions={currentBlock}
            isLastPage={isLastPage}
            onSubmitBlock={handleBlockSubmit}
            onPrev={handlePrev}
            showPrev={page > 0}
            pageLabel={`page ${page + 1} of ${questionPages.length}`}
            answers={answers}
          />
        ) : (
          <ResultCard
            mbti={mbti}
            city={city}
            profile={profile}
            onRetake={resetAll}
          />
        )}
      </div>
    </div>
  );
}
