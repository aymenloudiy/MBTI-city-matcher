import PostReview from "./PostReview";

function ResultCity(result: { city: string; output: string; mbti: string }) {
  return (
    <div>
      <img src="" alt={result.city} />
      <div>
        <p>{result.city}</p>
        <a href="">Learn More</a>
      </div>
      <div>{result.output}</div>
      <a href="">Share your result</a>
      <p>Please share your thoughts about the test</p>
      <PostReview randomUUID={"123"} mbtiType={result.mbti} />
    </div>
  );
}
export default ResultCity;
