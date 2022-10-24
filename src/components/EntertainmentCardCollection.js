import React from "react";
import entertainmentInfo from "./entertainmentData";
import EntertainmentCard from "./EntertainmentCard";
import "../styles/EntertainmentCardCollection.css";

export default function TrendingCardCollection() {
  const card = entertainmentInfo.map((card) => {
    return <EntertainmentCard key={card.id} {...card} />;
  });
  return (
    <div className="cards-container">
      <h3>Recommended for you</h3>
      <div className="entertainment-cards-container">{card}</div>
    </div>
  );
}
