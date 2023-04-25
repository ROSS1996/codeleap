import "./signup.css";

function SignUp() {
  return (
    <>
      <div className="SignUp Bubble">
        <h2>Welcome to CodeLeap network!</h2>
        <form>
          <label htmlFor="username">Please enter your username</label>
          <input type="text" name="username" id="username" />
          <button>Enter</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
