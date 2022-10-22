import React from "react";
import logo from "../assets/logo.svg";
import iconNavHome from "../assets/icon-nav-home.svg";
import iconNavMovie from "../assets/icon-nav-movies.svg";
import iconNavTv from "../assets/icon-nav-tv-series.svg";
import iconNavBookmark from "../assets/icon-nav-bookmark.svg";
import imageAvi from "../assets/image-avatar.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={logo} alt="red movie icon" />
      <ul className="icons">
        <li>
          <img src={iconNavHome} alt="four squares" />
        </li>
        <li>
          <img src={iconNavMovie} alt="film icon" />
        </li>
        <li>
          <img src={iconNavTv} alt="tv icon" />
        </li>
        <li>
          <img src={iconNavBookmark} alt="bookmark icon" />
        </li>
      </ul>
      <img className="avatar" src={imageAvi} alt="profile pic" />
    </div>
  );
}
