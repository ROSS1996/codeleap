import "./css/signup.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Action } from "redux";
import { useNavigate } from "react-router-dom";

interface SetUsernameAction extends Action {
  payload: string;
}

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const action: SetUsernameAction = {
      type: "SET_USERNAME",
      payload: username,
    };
    dispatch(action);
    navigate("/main");
  };

  return (
    <>
      <div className="SignUp">
        <h2>Welcome to CodeLeap network!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Please enter your username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <button>Enter</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
