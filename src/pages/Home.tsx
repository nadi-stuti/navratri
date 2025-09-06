import "./Home.css";
import Bg1 from "../assets/tile-bg1.jpg";
import Bg2 from "../assets/tile-bg2.jpg";
import Bg3 from "../assets/tile-bg3.jpg";
import Bg4 from "../assets/tile-bg4.jpg";
import Bg5 from "../assets/tile-bg5.jpg";
import Bg6 from "../assets/tile-bg6.jpg";
import { useNavigate } from "react-router";
import ThemeToggle from "../components/ThemeToggle";
import { LanguageSelector } from "../components/LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";

type GridTileProp = {
  titleKey: string;
  bg: string;
  location: string;
};

const tiles: GridTileProp[] = [
  { titleKey: "pages.home.tiles.fastingRecipes", bg: Bg1, location: "/recipes" },
  { titleKey: "pages.home.tiles.aboutNavratri", bg: Bg2, location: "/about-navratri" },
  { titleKey: "pages.home.tiles.navratriInIndia", bg: Bg3, location: "/locations" },
  { titleKey: "pages.home.tiles.aboutFastings", bg: Bg4, location: "/about-fast" },
  { titleKey: "pages.home.tiles.moreOnNavratriFasting", bg: Bg5, location: "/more-fast" },
  { titleKey: "pages.home.tiles.navratriDates", bg: Bg6, location: "/dates" },
];

function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      <header className="home-header">
        <h2>{t("pages.home.title")}</h2>
        <nav className="home-controls" aria-label={t('accessibility:landmarks.navigation', 'Site navigation')}>
          <LanguageSelector className="home-language-selector" />
          <ThemeToggle />
        </nav>
      </header>
      <main role="main" aria-label={t('accessibility:landmarks.mainContent', 'Main content')}>
        <div className="grid-container" role="navigation" aria-label="Main navigation menu">
          {tiles.map((tile) => (
            <GridTile {...tile} key={tile.titleKey} />
          ))}
        </div>
      </main>
    </div>
  );
}

const GridTile = (prop: GridTileProp) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div
      className="grid-item"
      style={{ backgroundImage: `url(${prop.bg})` }}
      onClick={() => {
        setTimeout(() => {
          navigate(prop.location);
        }, 500);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setTimeout(() => {
            navigate(prop.location);
          }, 500);
        }
      }}
      aria-label={t('accessibility:ariaLabels.navigation.navigateTo', 'Navigate to {{destination}}', { destination: t(prop.titleKey) })}
    >
      <div className="content card-grad">{t(prop.titleKey)}</div>
    </div>
  );
};

export default Home;
