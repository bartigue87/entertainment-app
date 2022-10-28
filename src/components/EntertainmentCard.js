import React, { useState } from "react";
import bookmarkEmpty from "../assets/icon-bookmark-empty.png";
import bookmarkFull from "../assets/icon-bookmark-full.png";
import "../styles/EntertainmentCard.css";

export default function EntertainmentCard(props) {
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

  console.log(props.isBookmarked);

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

  return (
    <div>
      <div
        className="small-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <img
          className="ent-bookmark"
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
    </div>
  );
}
