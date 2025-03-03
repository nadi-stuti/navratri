import "./Home.css";
import Bg1 from "../assets/tile-bg1.jpg";
import Bg2 from "../assets/tile-bg2.jpg";
import Bg3 from "../assets/tile-bg3.jpg";
import Bg4 from "../assets/tile-bg4.jpg";
import Bg5 from "../assets/tile-bg5.jpg";
import Bg6 from "../assets/tile-bg6.jpg";
import { useNavigate } from "react-router";

type GridTileProp = {
  title: string;
  bg: string;
  location: string;
};

const tiles: GridTileProp[] = [
  { title: "Fasting Recipes", bg: Bg1, location: "/recipes" },
  { title: "About Navratri", bg: Bg2, location: "/about-navratri" },
  { title: "Navratri in India", bg: Bg3, location: "/locations" },
  { title: "About Fastings", bg: Bg4, location: "/about-fast" },
  { title: "More on Navratri Fasting", bg: Bg5, location: "more-fast" },
  { title: "Navratri Dates", bg: Bg6, location: "/locations" },
];

function Home() {
  return (
    <div className="home-page">
      <h2>Celebrate Navratri</h2>
      <div className="grid-container">
        {tiles.map((tile) => (
          <GridTile {...tile} key={tile.title} />
        ))}
      </div>
    </div>
  );
}

const GridTile = (prop: GridTileProp) => {
  const navigate = useNavigate();

  return (
    <div
      className="grid-item"
      style={{ backgroundImage: `url(${prop.bg})` }}
      onClick={() => {
        setTimeout(() => {
          navigate(prop.location);
        }, 500);
      }}
    >
      <div className="content card-grad">{prop.title}</div>
    </div>
  );
};

export default Home;
