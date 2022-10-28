import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import EntertainmentCardCollection from "../components/EntertainmentCardCollection";
import "../styles/MoviesPage.css";

export default function MoviesPage(props) {
  return (
    <>
      <Navbar movie="movie" />
      <Searchbar />
      <EntertainmentCardCollection category={"Movie"} header={"Movies"} />
    </>
  );
}
