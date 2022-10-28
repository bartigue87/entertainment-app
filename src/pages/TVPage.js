import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import EntertainmentCardCollection from "../components/EntertainmentCardCollection";

import "../styles/Homepage.css";

export default function TVSeriesPage(props) {
  return (
    <>
      <Navbar tv="tv" />
      <Searchbar />
      <EntertainmentCardCollection
        category={"TV Series"}
        header={"TV Series"}
      />
    </>
  );
}
