import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Review = {
  id: number;
  name: string;
  rating: number;
  message: string;
  created_at: string;
};

function getErrorMessage(e: unknown) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object" && "message" in e) {
    const m = (e as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return "Something went wrong.";
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const r = await fetch("/api/reviews");
      if (!r.ok) throw new Error(`Failed to load reviews (${r.status})`);
      const data = (await r.json()) as Review[];
      setReviews(data);
    } catch (e: unknown) {
      setError(getErrorMessage(e));
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchReviews();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const ratingRaw = fd.get("rating");
    const message = String(fd.get("message") || "");
    const _hp = String(fd.get("_hp") || "");
    const ratingNum =
      typeof ratingRaw === "string" ? Number(ratingRaw) : Number(ratingRaw);

    if (
      !name ||
      name.length > 80 ||
      !message ||
      message.length < 2 ||
      !Number.isInteger(ratingNum) ||
      ratingNum < 1 ||
      ratingNum > 5
    ) {
      setError("Please fill all fields. Rating must be 1–5.");
      return;
    }
    if (_hp) {
      (e.target as HTMLFormElement).reset();
      return;
    }

    const optimistic: Review = {
      id: Math.floor(Math.random() * 1e9),
      name,
      rating: ratingNum,
      message,
      created_at: new Date().toISOString(),
    };

    setSubmitting(true);
    setReviews((prev) => [optimistic, ...(prev ?? [])].slice(0, 5));
    try {
      const r = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating: ratingNum, message, _hp }),
      });
      if (!r.ok) {
        const maybeJson = await r.json().catch(() => null);
        const serverMsg =
          maybeJson && typeof maybeJson.error === "string"
            ? maybeJson.error
            : `Failed to submit review (${r.status})`;
        throw new Error(serverMsg);
      }
      await fetchReviews();
      (e.target as HTMLFormElement).reset();
    } catch (e: unknown) {
      setError(getErrorMessage(e));
      await fetchReviews();
    } finally {
      setSubmitting(false);
    }
  };

  const content = useMemo(() => {
    if (loading)
      return <div className="text-sm text-gray-300">Loading reviews…</div>;
    if (error) return <div className="text-sm text-red-400">{error}</div>;
    if (!reviews || reviews.length === 0)
      return (
        <div className="text-sm text-gray-300">
          Be the first to leave a review!
        </div>
      );

    return (
      <Carousel orientation="horizontal" className="w-full">
        <CarouselContent>
          {reviews.map((r) => (
            <CarouselItem key={r.id} className="p-2">
              <ReviewCard review={r} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-3 flex items-center justify-between">
          <CarouselPrevious className="text-[#C62828] hover:text-[#a31d1d]" />
          <CarouselNext className="text-[#C62828] hover:text-[#a31d1d]" />
        </div>
      </Carousel>
    );
  }, [loading, error, reviews]);

  return (
    <section className="w-full space-y-8 py-4 mb-4">
      <h2 className="text-2xl md:text-4xl font-[geo] font-bold text-[#C62828] text-center">
        Recent Reviews
      </h2>

      <div className="rounded-2xl bg-gray-50 p-4 shadow-md">{content}</div>

      <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
        <h3 className="mb-4 text-lg font-semibold font-[geo] text-[#C62828] text-center">
          Leave a review
        </h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="_hp"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 font-mono"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              maxLength={80}
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#C62828] font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 font-mono"
            >
              Rating (1–5)
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              min={1}
              max={5}
              required
              placeholder="5"
              inputMode="numeric"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#C62828] font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 font-mono"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={800}
              rows={4}
              placeholder="What did you think?"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#C62828] font-mono"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-[#C62828] hover:bg-[#a31d1d] px-4 py-2 text-white font-semibold disabled:opacity-50 transition-colors duration-200 font-mono"
            >
              {submitting ? "Submitting…" : "Post Review"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const dt = new Date(review.created_at);
  return (
    <article className="h-full rounded-2xl border border-gray-300 p-4 shadow-sm bg-white">
      <div className="flex items-baseline justify-between mb-2">
        <h4 className="font-semibold text-[#C62828]">{review.name}</h4>
        <div className="text-xs text-gray-500">{dt.toLocaleDateString()}</div>
      </div>
      <Stars n={review.rating} />
      <p className="mt-2 text-gray-800 whitespace-pre-wrap">{review.message}</p>
    </article>
  );
}

function Stars({ n }: { n: number }) {
  const clamped = Math.max(1, Math.min(5, n));
  return (
    <div className="mt-1 text-[#FFD700]" aria-label={`${clamped} out of 5`}>
      {"★".repeat(clamped)}
      {"☆".repeat(5 - clamped)}
    </div>
  );
}
