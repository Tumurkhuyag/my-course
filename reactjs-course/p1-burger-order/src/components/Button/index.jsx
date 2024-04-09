import React, { useState } from "react";
import "./style.css";

export const Button = (props) => {
  const [commentHistory, setCommentHistory] = useState([]);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    setCommentHistory([...commentHistory, props.comment]);
  };

  return (
    <div>
      <input
        className={props.variant}
        type="button"
        onClick={clickHandler}
        value={props.value ? props.value : "Button"}
      />
      <div style={viewComments}>
        <h3>{"ALL COMMENTS (" + count + ")"}</h3>
        <div>
          {commentHistory.map((el, index) => (
            <div style={commentStyle} key={index}>
              <div style={profileImageStyle}></div>
              <div>
                <div style={commentorStyle}>{props.commentor}</div>
                <div style={commentText}>{el}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const commentStyle = {
  display: "flex",
  padding: "24px 0px",
};

const viewComments = {
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  marginTop: "40px",
  textAlign: "left",
  width: "650px",
};

const commentText = {
  marginTop: "-12px",
};

const commentorStyle = {
  height: "40px",
  flex: "middle",
  fontWeight: "Bold",
  paddingTop: "10px",
};

const profileImageStyle = {
  height: "40px",
  minWidth: "40px",
  borderRadius: "999px",
  backgroundColor: "#efefef",
  marginRight: "12px",
};
