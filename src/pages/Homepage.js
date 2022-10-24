import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import TrendingCardCollection from "../components/TrendingCardCollection";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <TrendingCardCollection />
    </>
  );
}
