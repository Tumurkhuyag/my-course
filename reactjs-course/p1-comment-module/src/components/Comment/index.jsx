import React, { useState } from "react";
import { Button } from "../Button";

import "./style.css";

export const Comment = (props) => {
  const [newComment, setNewComment] = useState("");

  const addComment = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="comment-container">
      <textarea
        onChange={addComment}
        className="textEditor"
        placeholder="Write your comment here ..."></textarea>
      <div className="commentor">
        by <span className="commentor-name">{props.commentor}</span>
      </div>
      <Button
        variant="Primary"
        value="Post comment"
        comment={newComment}
        commentor={props.commentor}
      />
    </div>
  );
};
