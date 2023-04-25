import SignUp from "./pages/Signup";
import MainPage from "./pages/Mainpage";
import "./index.css";

function App() {
  const page = window.location.pathname.toLowerCase();
  if (page === "/" || page === "/signup") {
    return <SignUp />;
  } else if (page === "/mainpage") {
    return <MainPage />;
  } else {
    return <div>Page {page} not found</div>;
  }
}

export default App;
