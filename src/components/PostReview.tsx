import { useState } from "react";

interface commentProps {
  randomUUID: string;
  mbtiType: string;
}
function PostReview({ randomUUID, mbtiType }: commentProps) {
  const [comment, setComment] = useState("");
  return (
    <div>
      <img src="" alt="profile picture" />
      <div>
        <p>{randomUUID}</p>
        <p>{mbtiType}</p>
      </div>
      <form action="">
        <textarea
          name=""
          id=""
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
      </form>
    </div>
  );
}
export default PostReview;
