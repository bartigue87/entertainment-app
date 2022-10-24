import React from "react";
import trendingInfo from "./trendingData";
import TrendingCard from "./TrendingCard";
import "../styles/TrendingCardCollection.css";

export default function TrendingCardCollection() {
  const card = trendingInfo.map((card) => {
    return <TrendingCard key={card.id} {...card} />;
  });
  return (
    <div className="cards-container">
      <h3>Trending</h3>
      <div className="trending-cards-container">{card}</div>
    </div>
  );
}
