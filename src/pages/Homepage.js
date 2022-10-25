import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import TrendingCardCollection from "../components/TrendingCardCollection";
import EntertainmentCardCollection from "../components/EntertainmentCardCollection";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <TrendingCardCollection />
      <EntertainmentCardCollection />
    </>
  );
}
