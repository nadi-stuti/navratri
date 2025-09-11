import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./pages/Welcome.tsx";
import { App as CapacitorApp } from "@capacitor/app";
import { SafeArea } from "capacitor-plugin-safe-area";
import "./i18n/config";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserPreferencesProvider } from "./contexts/UserPreferencesContext";

CapacitorApp.addListener("backButton", ({ canGoBack }) => {
  if (!canGoBack) {
    CapacitorApp.exitApp();
  } else {
    window.history.back();
  }
});

// Initialize and react to Safe Area insets
const applySafeAreaInsets = async () => {
  try {
    const { insets } = await SafeArea.getSafeAreaInsets();
    const root = document.documentElement;
    root.style.setProperty("--inset-top", `${insets.top}px`);
    root.style.setProperty("--inset-right", `${insets.right}px`);
    root.style.setProperty("--inset-bottom", `${insets.bottom}px`);
    root.style.setProperty("--inset-left", `${insets.left}px`);
  } catch (_) {
    // No-op: fall back to CSS vars injected by the plugin (if available)
  }
};

applySafeAreaInsets();
SafeArea.addListener("safeAreaChanged", ({ insets }) => {
  const root = document.documentElement;
  root.style.setProperty("--inset-top", `${insets.top}px`);
  root.style.setProperty("--inset-right", `${insets.right}px`);
  root.style.setProperty("--inset-bottom", `${insets.bottom}px`);
  root.style.setProperty("--inset-left", `${insets.left}px`);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <UserPreferencesProvider>
          <div className="app-safe-area">
            <Welcome />
          </div>
        </UserPreferencesProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
