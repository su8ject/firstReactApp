import React from "react";
import MyButon from "./UI/button/MyButton";

const PostItems = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <MyButon onClick={() => props.remove(props.post)}>Удалить</MyButon>
      </div>
    </div>
  );
};

export default PostItems;
