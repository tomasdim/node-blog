import React from "react";
import "../styles/AppBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

function AppBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:5000/images/";
  return (
    <div className="AppBar">
      <div className="AppBar-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-pinterest-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="AppBar-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="top-list-item">
            {" "}
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="top-list-item">
            {" "}
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="top-list-item">
            {" "}
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="top-list-item" onClick={handleLogout}>
            {user && "logout"}
          </li>
        </ul>
      </div>
      <div className="AppBar-right">
        {user ? (
          <Link to="/settings">
            <img className="top-img" src={PF + user.profilePic} alt=""></img>
          </Link>
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
}

export default AppBar;
