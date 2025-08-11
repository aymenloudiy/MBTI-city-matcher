interface reviewProps {
  id: number;
  randomUUID: string;
  mbtiType: string;
  comment: string;
}
function Review({ randomUUID, mbtiType, comment }: reviewProps) {
  return (
    <div className="flex">
      <div>
        <img src="" alt="profile picture" />
      </div>
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
