import MainBanner from "../components/MainBanner";
import MBTICard from "../components/MBTICard";
import ReviewSection from "../components/ReviewSection";

function Home() {
  return (
    <div className="flex flex-col grow justify-center items-center max-w-5xl mx-auto px-6 md:px-16 space-y-12">
      <MainBanner />
      <MBTICard />
      <ReviewSection />
    </div>
  );
}

export default Home;
