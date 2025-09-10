import { useState } from "react";
import NavratriDatePopup from "../components/NavratriDatePopup";
import { useLanguage } from "../contexts/LanguageContext";
import { navratri2025Dates } from "../model/navratri-2025-dates";
import { NavratriCalendar, NavratriDate } from "../types/enhanced-models";
import "./Dates.css";

// Mock data for other Navratri festivals - in a real app, this would come from a data service
const generateNavratriCalendars = (): NavratriCalendar[] => {
  const calendars: NavratriCalendar[] = [];

  const festivals = [
    {
      year: 2025,
      type: "Sharad",
      startDate: "2025-09-25",
      endDate: "2025-10-03",
      season: "Autumn",
    },
    {
      year: 2025,
      type: "Chaitra",
      startDate: "2025-03-30",
      endDate: "2025-04-07",
      season: "Spring",
    },
    {
      year: 2025,
      type: "Magha",
      startDate: "2025-01-29",
      endDate: "2025-02-06",
      season: "Winter",
    },
    {
      year: 2025,
      type: "Ashad",
      startDate: "2025-07-05",
      endDate: "2025-07-13",
      season: "Monsoon",
    },
    {
      year: 2026,
      type: "Sharad",
      startDate: "2026-10-11",
      endDate: "2026-10-19",
      season: "Autumn",
    },
    {
      year: 2026,
      type: "Chaitra",
      startDate: "2026-03-19",
      endDate: "2026-03-27",
      season: "Spring",
    },
    {
      year: 2026,
      type: "Magha",
      startDate: "2026-01-18",
      endDate: "2026-01-26",
      season: "Winter",
    },
    {
      year: 2026,
      type: "Ashad",
      startDate: "2026-06-24",
      endDate: "2026-07-02",
      season: "Monsoon",
    },
    {
      year: 2027,
      type: "Sharad",
      startDate: "2027-09-30",
      endDate: "2027-10-08",
      season: "Autumn",
    },
    {
      year: 2027,
      type: "Chaitra",
      startDate: "2027-04-08",
      endDate: "2027-04-16",
      season: "Spring",
    },
    {
      year: 2027,
      type: "Magha",
      startDate: "2027-02-07",
      endDate: "2027-02-15",
      season: "Winter",
    },
    {
      year: 2027,
      type: "Ashad",
      startDate: "2027-07-14",
      endDate: "2027-07-22",
      season: "Monsoon",
    },
    {
      year: 2028,
      type: "Sharad",
      startDate: "2028-10-18",
      endDate: "2028-10-26",
      season: "Autumn",
    },
    {
      year: 2028,
      type: "Chaitra",
      startDate: "2028-03-26",
      endDate: "2028-04-03",
      season: "Spring",
    },
    {
      year: 2028,
      type: "Magha",
      startDate: "2028-01-26",
      endDate: "2028-02-03",
      season: "Winter",
    },
    {
      year: 2028,
      type: "Ashad",
      startDate: "2028-07-02",
      endDate: "2028-07-10",
      season: "Monsoon",
    },
  ];

  festivals.forEach((festival) => {
    // if (festival.year === 2025 && festival.type === "Sharad") return;

    const dates: NavratriDate[] = [];
    const startDate = new Date(festival.startDate);

    for (let i = 0; i < 9; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      dates.push({
        date: currentDate.toISOString().split("T")[0],
        day: i + 1,
        dayOfWeek: currentDate.toLocaleDateString("en-US", { weekday: "long" }),
        durgaForm: navratri2025Dates[i].durgaForm,
        recommendedColors: navratri2025Dates[i].recommendedColors,
        auspiciousTimes: {
          sunrise: "06:15 AM",
          sunset: "06:45 PM",
          pujaTime: "06:30 AM - 08:00 AM",
        },
      });
    }

    calendars.push({
      year: festival.year,
      type: festival.type as "Sharad" | "Chaitra" | "Magha" | "Ashad",
      season: festival.season as "Autumn" | "Spring" | "Winter" | "Monsoon",
      startDate: festival.startDate,
      endDate: festival.endDate,
      dates,
      generalInfo: {
        significance: {
          en: `${festival.type} Navratri ${festival.year} celebrates the divine feminine energy during ${festival.season} season.`,
          hi: `${festival.type} नवरात्रि ${festival.year} ${festival.season} ऋतु के दौरान दिव्य स्त्री ऊर्जा का उत्सव है।`,
        },
      },
    });
  });

  return calendars.sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
};

const Dates = () => {
  const { currentLanguage, t } = useLanguage();
  const [calendars] = useState<NavratriCalendar[]>(generateNavratriCalendars());
  const [selectedDate, setSelectedDate] = useState<NavratriDate | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Find the appropriate calendar based on current date
  const findCurrentCalendarIndex = () => {
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];

    // Find the next upcoming or current Navratri
    for (let i = 0; i < calendars.length; i++) {
      const calendar = calendars[i];
      if (currentDate <= calendar.endDate) {
        return i;
      }
    }

    // If no upcoming Navratri found, return the last one
    return calendars.length - 1;
  };

  const [currentCalendarIndex, setCurrentCalendarIndex] = useState(
    findCurrentCalendarIndex()
  );

  const handleDateCardClick = (navratriDate: NavratriDate) => {
    setSelectedDate(navratriDate);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedDate(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = currentLanguage === "en" ? "en-US" : "hi-IN";

    return date.toLocaleDateString(locale, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const locale = currentLanguage === "en" ? "en-US" : `hi-IN`;

    return `${start.toLocaleDateString(locale, {
      month: "long",
      day: "numeric",
    })} - ${end.toLocaleDateString(locale, {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`;
  };

  const getNavratriTypeTranslation = (type: string) => {
    const translations: { [key: string]: { [lang: string]: string } } = {
      Sharad: {
        en: "Sharad Navratri",
        hi: "शारद नवरात्रि",
        ta: "சரத் நவராத்திரி",
        mr: "शारद नवरात्री",
        te: "శరద్ నవరాత్రి",
        ml: "ശരദ് നവരാത്രി",
        bn: "শরৎ নবরাত্রি",
        kn: "ಶರದ್ ನವರಾತ್ರಿ",
      },
      Chaitra: {
        en: "Chaitra Navratri",
        hi: "चैत्र नवरात्रि",
        ta: "சைத்ர நவராத்திரி",
        mr: "चैत्र नवरात्री",
        te: "చైత్ర నవరాత్రి",
        ml: "ചൈത്ര നവരാത്രി",
        bn: "চৈত্র নবরাত্রি",
        kn: "ಚೈತ್ರ ನವರಾತ್ರಿ",
      },
      Magha: {
        en: "Magha Navratri",
        hi: "माघ नवरात्रि",
        ta: "மாக நவராத்திரி",
        mr: "माघ नवरात्री",
        te: "మాఘ నవరాత్రి",
        ml: "മാഘ നവരാത്രി",
        bn: "মাঘ নবরাত্রি",
        kn: "ಮಾಘ ನವರಾತ್ರಿ",
      },
      Ashad: {
        en: "Ashad Navratri",
        hi: "आषाढ़ नवरात्रि",
        ta: "ஆஷாட நவராத்திரி",
        mr: "आषाढ नवरात्री",
        te: "ఆషాఢ నవరాత్రి",
        ml: "ആഷാഢ് നവരാത്രി",
        bn: "আষাঢ় নবরাত্রি",
        kn: "ಆಷಾಢ ನವರಾತ್ರಿ",
      },
    };

    return (
      translations[type]?.[currentLanguage] || translations[type]?.en || type
    );
  };

  const renderDayCard = (navratriDate: NavratriDate) => {
    const durgaForm = navratriDate.durgaForm;

    return (
      <div
        key={navratriDate.day}
        className="date-card"
        onClick={() => handleDateCardClick(navratriDate)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleDateCardClick(navratriDate);
          }
        }}
        aria-label={`View details for Day ${navratriDate.day} - ${
          durgaForm.name[currentLanguage as keyof typeof durgaForm.name] ||
          durgaForm.name.en
        }`}
      >
        <div className="day-number">
          {t("pages.dates.labels.day")} {navratriDate.day}
        </div>
        <div className="date-title">{formatDate(navratriDate.date)}</div>
        <div className="durga-name">
          {durgaForm.name[currentLanguage as keyof typeof durgaForm.name] ||
            durgaForm.name.en}
        </div>
        <div className="recommended-colors">
          {navratriDate.recommendedColors.map((color, index) => (
            <span
              key={index}
              className="color-dot"
              style={{ backgroundColor: color }}
              title={`Color ${index + 1}: ${color}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const currentCalendar = calendars[currentCalendarIndex];
  const canGoPrevious = currentCalendarIndex > 0;
  const canGoNext = currentCalendarIndex < calendars.length - 1;

  console.log(calendars);

  return (
    <div className="dates-container">
      <div className="dates-header">
        <h1>{t("pages.dates.title")}</h1>
        <div className="calendar-navigation">
          <button
            className="nav-button prev"
            onClick={() =>
              setCurrentCalendarIndex((prev) => Math.max(0, prev - 1))
            }
            disabled={!canGoPrevious}
            aria-label={t(
              "pages.dates.navigation.previous",
              "Previous Navratri"
            )}
          >
            ‹
          </button>

          <div className="calendar-info">
            <h2 className="calendar-title">
              {getNavratriTypeTranslation(currentCalendar.type || "Sharad")}{" "}
              {currentCalendar.year}
            </h2>
            <p className="festival-period">
              {formatDateRange(
                currentCalendar.startDate,
                currentCalendar.endDate
              )}
            </p>
            {currentCalendar.season && (
              <p className="season-info">
                {t(
                  `pages.dates.seasons.${currentCalendar.season.toLowerCase()}`,
                  currentCalendar.season
                )}
              </p>
            )}
          </div>

          <button
            className="nav-button next"
            onClick={() =>
              setCurrentCalendarIndex((prev) =>
                Math.min(calendars.length - 1, prev + 1)
              )
            }
            disabled={!canGoNext}
            aria-label={t("pages.dates.navigation.next", "Next Navratri")}
          >
            ›
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {currentCalendar.dates.map(renderDayCard)}
      </div>

      {currentCalendar.generalInfo && (
        <div className="calendar-description">
          <p>
            {t(
              `pages.dates.seasonalInfo.${currentCalendar.type?.toLowerCase()}${currentCalendar.season?.toLowerCase()}`,
              currentCalendar.generalInfo.significance[
                currentLanguage as keyof typeof currentCalendar.generalInfo.significance
              ] || currentCalendar.generalInfo.significance.en
            )}
          </p>
        </div>
      )}

      {selectedDate && (
        <NavratriDatePopup
          navratriDate={selectedDate}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Dates;
