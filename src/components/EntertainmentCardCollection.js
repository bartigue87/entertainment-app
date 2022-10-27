import React, { useEffect, useState } from "react";
import entertainmentInfo from "./entertainmentData";
import EntertainmentCard from "./EntertainmentCard";
import "../styles/EntertainmentCardCollection.css";

export default function EntertainmentCardCollection(props) {
  const [item, setItem] = useState(entertainmentInfo);

  useEffect(() => {
    if (props.category) {
      const newItem = item.filter((newVal) => {
        return newVal.category === props.category;
      });
      setItem(newItem);
    }
  }, [props.category]);

  useEffect(() => {
    if (props.isBookmarked) {
      const newItem = item.filter((newVal) => {
        return newVal.isBookmarked === props.isBookmarked;
      });
      setItem(newItem);
    }
  }, [props.isBookmarked]);

  const card = item.map((card) => {
    return <EntertainmentCard {...card} />;
  });

  return (
    <div className="cards-container">
      <h3>{props.header}</h3>
      <div className="entertainment-cards-container">{card}</div>
    </div>
  );
}
