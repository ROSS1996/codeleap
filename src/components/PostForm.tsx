import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import createNewPost from "../actions/newPost";

function PostForm() {
  const usernameLocal = useSelector((state: State) => state.username);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!usernameLocal || !title || !content) {
      return;
    }

    await createNewPost({ username: usernameLocal, title, content });

    setTitle("");
    setContent("");
  };

  return (
    <form className="Bubble" onSubmit={handleSubmit}>
      <h2>What's on your mind {usernameLocal}?</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" disabled={!title || !content}>
        Create
      </button>
    </form>
  );
}

export default PostForm;
