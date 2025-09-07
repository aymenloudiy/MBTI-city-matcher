import MainBanner from "../components/MainBanner";
import ReviewSection from "../components/ReviewSection";

function Home() {
  return (
    <div className="flex flex-col grow justify-center items-center max-w-5xl mx-auto px-6 md:px-16 space-y-12">
      <MainBanner />
      <p className="mt-2 text-xs text-[#C62828] md:text-m font-[nunito] md:mt-4 leading-relaxed px-4 text-center">
        *This test only gives a guess of your MBTI, so don’t take it too
        seriously—just have fun! If you want a proper MBTI test, try the “What
        is MBTI” button on the home. Thank you
      </p>
      <ReviewSection />
    </div>
  );
}

export default Home;
