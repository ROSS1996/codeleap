import SignUp from "./pages/Signup";
import MainPage from "./pages/Mainpage";
import "./index.css";

function App() {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/signup"
  ) {
    return <SignUp />;
  } else if (window.location.pathname === "/mainpage") {
    return <MainPage />;
  } else {
    return <div>Page {window.location.pathname} not found</div>;
  }
}

export default App;
