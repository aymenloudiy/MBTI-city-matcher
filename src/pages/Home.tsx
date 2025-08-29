import MainBanner from "../components/MainBanner";
import ReviewSection from "../components/ReviewSection";

function Home() {
  return (
    <div className="flex flex-col grow justify-center items-center max-w-5xl mx-auto px-6 md:px-16 space-y-12">
      <MainBanner />
      <ReviewSection />
    </div>
  );
}

export default Home;
