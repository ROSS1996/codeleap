import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/MP.css";
import { State } from "../redux/store";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

function MainPage() {
  const usernameLocal = useSelector((state: State) => state.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usernameLocal) {
      navigate("/");
    }
  }, [usernameLocal, navigate]);

  return (
    <>
      <div className="Main">
        <h1 className="Title">CodeLeap Network</h1>
        <div className="Posts">
          <PostForm />
        </div>
        <div>
          <Suspense fallback={<div className="loading-spinner"></div>}>
            <PostList />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPage;
