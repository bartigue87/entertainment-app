import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import EntertainmentCardCollection from "../components/EntertainmentCardCollection";

import "../styles/Homepage.css";

export default function BookmarksPage(props) {
  return (
    <>
      <Navbar bookmark="bookmark" />
      <Searchbar />
      <EntertainmentCardCollection isBookmarked={true} header={"Bookmarked"} />
    </>
  );
}
