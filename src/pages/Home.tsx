import MainBanner from "../components/MainBanner";
import ReviewSection from "../components/ReviewSection";

function Home() {
  return (
    <div className="flex flex-col grow mx-16 justify-center items-center">
      <MainBanner />
      <ReviewSection />
    </div>
  );
}
export default Home;
