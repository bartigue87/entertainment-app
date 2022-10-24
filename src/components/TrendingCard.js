import React, { useState } from "react";
import bookmarkEmpty from "../assets/icon-bookmark-empty.png";
import bookmarkFull from "../assets/icon-bookmark-full.png";
import "../styles/TrendingCard.css";

export default function TrendingCard(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <img
        onClick={handleBookmark}
        src={isBookmarked ? bookmarkFull : bookmarkEmpty}
        alt="bookmark icon"
      />
      <ul>
        <li>{props.year}</li>
        <li>
          <img className="icon" src={props.icon} alt="icon" />
          {props.category}
        </li>
        <li>{props.rating}</li>
      </ul>
      <h4>{props.title}</h4>
    </div>
  );
}
