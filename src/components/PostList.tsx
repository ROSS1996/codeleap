import Post from "./Post";
import { PostData } from "../actions/getPosts";

function PostList({
  posts,
  updatePosts,
}: {
  posts: PostData[];
  updatePosts: () => Promise<void>;
}) {
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
      {posts.map((post: PostData) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          title={post.title}
          content={post.content}
          dateTime={post.created_datetime}
          updatePosts={updatePosts}
        />
      ))}
    </div>
  );
}

export default PostList;
