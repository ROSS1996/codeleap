import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import createNewPost from "../actions/newPost";

function PostForm({ updatePosts }: { updatePosts: () => Promise<void> }) {
  const usernameLocal = useSelector((state: State) => state.username);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!usernameLocal || !title || !content) {
      return;
    }

    try {
      const response = await createNewPost({
        username: usernameLocal,
        title,
        content,
      });
      if (response?.ok) {
        alert("Post created successfully");
        updatePosts();
      } else {
        console.error(response?.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    setTitle("");
    setContent("");
  };

  return (
    <form className="Bubble" onSubmit={handleSubmit}>
      <h2>What's on your mind?</h2>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        value={content}
        required
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" disabled={!title || !content}>
        Create
      </button>
    </form>
  );
}

export default PostForm;
