import React from "react";
import magGlass from "../assets/icon-search.svg";
import "../styles/Searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <img src={magGlass} alt="magnifying glass" />
      <form>
        <input type="text" placeholder="Search for Movies or TV series" />
      </form>
    </div>
  );
}
