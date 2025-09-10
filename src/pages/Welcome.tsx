import "./Welcome.css";
import swaistikLogo from "../assets/swastik.png";
import { useState } from "react";
import Router from "../Router";
import { useLanguage } from "../contexts/LanguageContext";

function Welcome() {
  const [startApp, setStartApp] = useState(false);

  return startApp ? (
    <Router />
  ) : (
    <WelcomeScreen onStart={() => setStartApp(true)} />
  );
}

const WelcomeScreen = ({ onStart }: { onStart: () => void }) => {
  const { t } = useLanguage();

  return (
    <div className="welcome-page">
      <img
        src={swaistikLogo}
        className="logo"
        alt={t(
          "accessibility:imageAlt.logo",
          "Navratri Festival Logo - Swastik symbol"
        )}
      />
      <div className="content card-grad">
        <h1>{t("pages.welcome.title")}</h1>
        <p>{t("pages.welcome.description")}</p>

        <button className="main-button" onClick={onStart}>
          {t("pages.welcome.enterApp")}
        </button>

        <div className="link-buttons">
          <a
            href="https://nadistuti.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            {t("pages.welcome.ourWebsite")}
          </a>
          <a
            href="https://chat.whatsapp.com/KNCtYWiR6D856Yaup7iRZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            {t("pages.welcome.joinWhatsApp")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
