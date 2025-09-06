import { Link, Outlet } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

const HomeLayout = () => {
  const { t } = useLanguage();

  return (
    <>
      <main role="main" aria-label={t('accessibility:landmarks.mainContent', 'Main content')}>
        <Outlet />
      </main>
      <nav role="navigation" aria-label={t('accessibility:landmarks.navigation', 'Site navigation')}>
        <Link to={"/"} style={{ padding: "1rem" }}>
          <button aria-label={t('accessibility:ariaLabels.navigation.goBack', 'Go back to previous page')}>
            {t("common.actions.back")}
          </button>
        </Link>
      </nav>
    </>
  );
};

export default HomeLayout;
