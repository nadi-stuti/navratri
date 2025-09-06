import { useLanguage } from "../contexts/LanguageContext";

const Location = () => {
  const { t } = useLanguage();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{t("pages.location.title")}</h1>
      <p>
        {t("pages.location.introduction")}
      </p>
      <ul>
        <li>
          <b>{t("pages.location.regions.westBengal.title")} </b>
          {t("pages.location.regions.westBengal.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.maharashtra.title")} </b>
          {t("pages.location.regions.maharashtra.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.gujarat.title")} </b>
          {t("pages.location.regions.gujarat.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.northIndia.title")} </b>
          {t("pages.location.regions.northIndia.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.himachalPradesh.title")} </b>
          {t("pages.location.regions.himachalPradesh.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.karnataka.title")} </b>
          {t("pages.location.regions.karnataka.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.tamilNadu.title")} </b>
          {t("pages.location.regions.tamilNadu.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.andhraPradesh.title")} </b>
          {t("pages.location.regions.andhraPradesh.description")}
        </li>
        <li>
          <b>{t("pages.location.regions.kerala.title")} </b>
          {t("pages.location.regions.kerala.description")}
        </li>
      </ul>
    </div>
  );
};

export default Location;