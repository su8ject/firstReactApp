import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButon from "./UI/button/MyButton";

const PostsForms = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyButon onClick={addNewPost}>Создать пост</MyButon>
    </form>
  );
};

export default PostsForms;
