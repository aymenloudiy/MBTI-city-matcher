interface reviewProps {
  randomUUID: string;
  mbtiType: string;
  comment: string;
}
function Review({ randomUUID, mbtiType, comment }: reviewProps) {
  return (
    <div>
      <img src="" alt="profile picture" />
      <div>
        <p>{randomUUID}</p>
        <p>test result: {mbtiType}</p>
      </div>
      <div>
        <p>Comments</p>
        <div>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}
export default Review;
