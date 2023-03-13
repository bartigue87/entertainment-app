import React from "react";
import TrendingCard from "./TrendingCard";
import "../styles/TrendingCardCollection.css";
import entertainmentInfo from "./entertainmentData";

export default function TrendingCardCollection() {
  const card = entertainmentInfo
    .filter((card) => card.isTrending)
    .map((card) => {
      return <TrendingCard key={card.id} {...card} />;
    });
  return (
    <div className="cards-container">
      <h3>Trending</h3>
      <div className="trending-cards-container">{card}</div>
    </div>
  );
}
