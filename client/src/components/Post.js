import "../styles/Post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="post-image" src={PF + post.photo} alt="" />
      )}
      <div className="post-info">
        <div className="post-cats">
          {post.categories.map((c) => (
            <span className="post-cat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>

        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-description">{post.desc}</p>
    </div>
  );
}

export default Post;
