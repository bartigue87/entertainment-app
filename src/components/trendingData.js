import beyondEarth from "../assets/thumbnails/beyond-earth/trending/large.jpg";
import bottomGear from "../assets/thumbnails/bottom-gear/trending/large.jpg";
import undiscoveredCities from "../assets/thumbnails/undiscovered-cities/trending/large.jpg";
import nineteen98 from "../assets/thumbnails/1998/trending/large.jpg";
import darkSide from "../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg";
import movieMini from "../assets/movie-mini.png";
import tvMini from "../assets/tv-mini.png";

const trendingInfo = [
  {
    id: 1,
    image: beyondEarth,
    year: 2019,
    icon: movieMini,
    category: "Movie",
    rating: "PG",
    title: "Beyond Earth",
  },
  {
    id: 2,
    image: bottomGear,
    year: 2021,
    icon: movieMini,
    category: "Movie",
    rating: "PG",
    title: "Bottom Gear",
  },
  {
    id: 3,
    image: undiscoveredCities,
    year: 2019,
    icon: tvMini,
    category: "TV Series",
    rating: "E",
    title: "Undiscovered Cities",
  },
  {
    id: 4,
    image: nineteen98,
    year: 2021,
    icon: movieMini,
    category: "Movie",
    rating: "18+",
    title: "1998",
  },
  {
    id: 5,
    image: darkSide,
    year: 2018,
    icon: movieMini,
    category: "TV Series",
    rating: "PG",
    title: "Dark Side of the Moon",
  },
];

export default trendingInfo;
