import React from "react";
import entertainmentInfo from "./entertainmentData";
import EntertainmentCard from "./EntertainmentCard";
import "../styles/EntertainmentCardCollection.css";

export default function TrendingCardCollection(props) {
  let card;

  if (props.category === "movie") {
    card = entertainmentInfo.filter((category) => {
      return <EntertainmentCard key={card.id} {...card} />;
      card.category === "Movie";
    });
  } else {
    card = entertainmentInfo.map((card) => {
      return <EntertainmentCard key={card.id} {...card} />;
    });
  }
  return (
    <div className="cards-container">
      <h3>{props.header}</h3>
      <div className="entertainment-cards-container">{card}</div>
    </div>
  );
}
