import Sidebar from "../components/Sidebar";
import "../styles/Single.css";
import SinglePost from "../components/SinglePost";
function Single() {
  return (
    <div className="Single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
