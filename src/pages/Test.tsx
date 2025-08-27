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

  const shareResult = async () => {
    const title = "My MBTI City Match";
    const text =
      mbti && city
        ? `I got ${mbti} - matched with ${city.name}!`
        : "Check out my MBTI city match!";

    try {
      if (navigator.share) {
        await navigator.share({ title, text });
      } else {
        await navigator.clipboard.writeText(`${text}`);
        alert("Result copied to clipboard!");
      }
    } catch (err) {
      console.log("Share dismissed", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-50 to-white flex items-start justify-center py-10 px-4">
      <div className="mx-auto max-w-3xl p-6">
        {!mbti || !city || !profile ? (
          <>
            <QuestionBlock
              questions={currentBlock}
              isLastPage={isLastPage}
              onSubmitBlock={handleBlockSubmit}
              onPrev={handlePrev}
              showPrev={page > 0}
              pageLabel={`page ${page + 1} of ${questionPages.length}`}
              answers={answers}
            />
          </>
        ) : (
          <ResultCard
            mbti={mbti}
            city={city}
            profile={profile}
            onRetake={resetAll}
            onShare={shareResult}
          />
        )}
      </div>
    </div>
  );
}
