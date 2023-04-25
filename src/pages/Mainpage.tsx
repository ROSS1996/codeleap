import Post from "../components/Post";
import "./css/MP.css";

function MainPage() {
  return (
    <>
      <div className="Main">
        <h1 className="Title">CodeLeap Network</h1>
        <div className="Posts">
          <form className="Bubble">
            <h2>What's on your mind?</h2>
            <label htmlFor="title">Title</label>
            <input type="title" />
            <label htmlFor="content">Content</label>
            <input type="content" />
            <button>Create</button>
          </form>
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

export default MainPage;
