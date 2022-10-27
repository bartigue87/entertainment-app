import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import EntertainmentCardCollection from "../components/EntertainmentCardCollection";

import "../styles/Homepage.css";

export default function MoviesPage(props) {
  return (
    <>
      <Navbar />
      <Searchbar />
      <EntertainmentCardCollection
        category={""}
        isBookmarked={"true"}
        header={"Movies"}
      />
    </>
  );
}
