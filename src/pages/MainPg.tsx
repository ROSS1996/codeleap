import { useState, useEffect, FormEvent, Suspense } from "react";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import "./css/MP.css";
import { State } from "../redux/store";
import { useNavigate } from "react-router-dom";

interface PostData {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: Date;
}

interface APIResponse {
  results: PostData[];
}

function PostList({ posts }: { posts: PostData[] }) {
  if (posts.length === 0) {
    return (
      <div className="loadingComponent">
        <p>Loading posts...</p>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          title={post.title}
          content={post.content}
          dateTime={post.created_datetime}
        />
      ))}
    </div>
  );
}

function MainPage() {
  const usernameLocal = useSelector((state: State) => state.username);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<PostData[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dev.codeleap.co.uk/careers/?format=json")
      .then((response) => response.json() as Promise<APIResponse>)
      .then((data) => setPosts(data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!usernameLocal || !title || !content) {
      return;
    }

    const response = await fetch("https://dev.codeleap.co.uk/careers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameLocal,
        title,
        content,
      }),
    });

    if (response.ok) {
      alert("Post created successfully!");
      // Re-fetch the list of posts
      fetch("https://dev.codeleap.co.uk/careers/?format=json")
        .then((response) => response.json() as Promise<APIResponse>)
        .then((data) => setPosts(data.results))
        .catch((error) => console.error(error));
      setTitle("");
      setContent("");
    } else {
      console.error(response.statusText);
    }
  };

  if (!usernameLocal) {
    navigate("/");
  }

  return (
    <>
      <div className="Main">
        <h1 className="Title">CodeLeap Network</h1>
        <div className="Posts">
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
        </div>
        <div>
          <Suspense fallback={<div className="loading-spinner"></div>}>
            <PostList posts={posts} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPage;
