import React, { Component } from "react";
import { Button } from "../Button";

import "./style.css";

export class Comment extends Component {
  constructor() {
    super();

    this.state = {
      comment: "",
      publisher: "",
    };
  }

  textWritten = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div className="comment-container">
        <div style={textView}>
          <div>{this.state.comment}</div>
        </div>
        <textarea
          className="textEditor"
          placeholder="Write your comment here ..."
          onChange={this.textWritten}></textarea>
        <div className="commentor">
          by <span className="commentor-name">{this.props.by}</span>
        </div>
        <Button
          comment={this.state.comment}
          variant="Primary"
          value="Post comment"
        />
      </div>
    );
  }
}

const textView = {
  height: "80px",
  borderStyle: "none",
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  border: "1px solid #efefef",
  borderRadius: "4px",
  padding: "12px",
  marginBottom: "16px",
  width: "650px",
  textAlign: "left",
};
