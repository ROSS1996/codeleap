import { useState, useEffect, FormEvent } from "react";
import Post from "../components/Post";
import "./css/MP.css";

interface PostData {
  id: number;
  username: string;
  title: string;
  content: string;
}

function MainPage() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  useEffect(() => {
    fetch("https://dev.codeleap.co.uk/careers/?format=json")
      .then((response) => response.json())
      .then((data) => setPosts(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="Main">
        <h1 className="Title">CodeLeap Network</h1>
        <div className="Posts">
          <form className="Bubble" onSubmit={handleSubmit}>
            <h2>What's on your mind?</h2>
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
            <button type="submit">Create</button>
          </form>
        </div>
        <div>
          {posts.map((post) => (
            <Post
              id={post.id}
              username={post.username}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
