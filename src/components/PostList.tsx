import { useEffect } from "react";
import useFetchPosts from "../actions/getPosts";
import Post from "./Post";

function PostList() {
  const { posts, fetchPosts } = useFetchPosts();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (!posts.length) {
    return (
      <div className="loadingComponent">
        <p>Loading posts...</p>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          title={post.title}
          content={post.content}
          dateTime={post.created_datetime}
          updatePosts={fetchPosts}
        />
      ))}
    </div>
  );
}

export default PostList;
