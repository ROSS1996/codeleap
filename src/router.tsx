import SignUp from "./pages/Signup";
import MainPage from "./pages/MainPg";
import "./index.css";

function App() {
  const page = window.location.pathname.toLowerCase();
  if (page === "/" || page === "/signup") {
    return <SignUp />;
  } else if (page === "/main") {
    return <MainPage />;
  } else {
    return (
      <div>
        Page <strong>{page}</strong> not found
      </div>
    );
  }
}

export default App;
