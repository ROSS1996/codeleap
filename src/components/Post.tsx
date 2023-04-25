import "./Post.css";

function Post() {
  return (
    <div className="Bubble Post">
      <h2 className="Title">My second post at CodeLeap Network</h2>
      <div className="Content">
        <div className="Infos">
          <h3>@Vini</h3>
          <span>25 minutes ago</span>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </div>
    </div>
  );
}

export default Post;
