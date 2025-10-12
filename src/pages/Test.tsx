import { useCallback, useMemo, useState, useEffect } from "react";
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
  const totalPages = questionPages.length;

  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [mbti, setMbti] = useState<string | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [profile, setProfile] = useState<MbtiProfile | null>(null);

  const [isFinishing, setIsFinishing] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [filledDots, setFilledDots] = useState(0);

  const isLastPage = page === totalPages - 1;
  const currentBlock: question[] = useMemo(() => questionPages[page], [page]);

  useEffect(() => {
    if (!isFinishing) {
      setFilledDots(page === 0 ? 0 : page);
      setProgressPercent(Math.min((page / (totalPages - 1)) * 75, 75));
    } else {
      setFilledDots(totalPages);
      setProgressPercent(100);
    }
  }, [page, totalPages, isFinishing]);

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
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setAnswers(merged);
        setPage((p) => p + 1);
        return;
      }

      setIsFinishing(true);
      setAnswers(merged);

      setTimeout(() => {
        const {
          mbti: m,
          city: c,
          profile: prof,
        } = evaluateQuiz(merged, cities);
        setMbti(m);
        setCity(c ?? null);
        setProfile(prof ?? null);
        setIsFinishing(false);
      }, 2000);
    },
    [answers, isLastPage]
  );

  const resetAll = () => {
    setPage(0);
    setAnswers({});
    setMbti(null);
    setCity(null);
    setProfile(null);
    setProgressPercent(0);
    setFilledDots(0);
    setIsFinishing(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-50 to-white py-10 px-4">
      <div className="mx-auto max-w-3xl">
        {!mbti && !city && !profile && !isFinishing && (
          <header className="mb-4">
            <h1 className="text-4xl font-bold text-center text-[#C62828] font-[bangers] tracking-wider">
              Take a quick test to find your matching city
            </h1>
            <p className="mt-2 bold text-center text-gray-600">
              We’ll guess your MBTI based on the choices you’d make in different
              situations, then suggest the city that fits you best. There are 16
              questions, each with two options—just pick whichever feels more
              like you. Ready to find your city?
            </p>
          </header>
        )}

        {!mbti && !city && !profile && (
          <div className="mb-3 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full border ${
                    i < filledDots
                      ? "border-gray-300 bg-[#C62828]"
                      : "border-gray-200 bg-gray-100"
                  } transition-colors duration-500`}
                />
              ))}
            </div>
            <span className="text-sm md:text-base font-[geologica] text-[#C62828] font-semibold">
              {Math.round(progressPercent)}%
            </span>
          </div>
        )}

        {isFinishing && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#C62828] border-opacity-30"></div>
            <p className="text-lg font-[geologica] text-gray-700">
              Your matching 🇨🇦Canadian city is…
            </p>
          </div>
        )}

        {!mbti && !city && !profile && !isFinishing && (
          <QuestionBlock
            questions={currentBlock}
            isLastPage={isLastPage}
            onSubmitBlock={handleBlockSubmit}
            onPrev={handlePrev}
            showPrev={page > 0}
            pageLabel={`page ${page + 1} of ${questionPages.length}`}
            answers={answers}
          />
        )}

        {mbti && city && profile && (
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
