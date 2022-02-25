import "../styles/Posts.css";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Posts;
