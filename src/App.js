import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import TVPage from "./pages/TVPage";
import BookmarksPage from "./pages/BookmarksPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/tv-series" element={<TVPage />} />
      <Route path="/bookmark" element={<BookmarksPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
