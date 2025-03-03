import "./Welcome.css";
import reactLogo from "../assets/swastik.png";
import { useState } from "react";
import Router from "../Router";

function Welcome() {
  const [startApp, setStartApp] = useState(false);

  return startApp ? (
    <Router />
  ) : (
    <WelcomeScreen onStart={() => setStartApp(true)} />
  );
}

const WelcomeScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="welcome-page">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="content card-grad">
        <h1>Navratri</h1>
        <p>
          Navratri translating to ‘nine nights’ (nava + ratri), Navratri is
          observed to honor Goddess Durga or Ambe Maa, and is one of the most
          cherished Hindu festivals.
        </p>

        <button onClick={onStart}>Enter App</button>
      </div>
    </div>
  );
};

export default Welcome;
