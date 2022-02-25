import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "../styles/Home.css";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="Home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
