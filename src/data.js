const leftGrid = [
  {
    id: 1,
    title: "",
    content: {
      type: "images",
      images: [
        {
          index: 1,
          src: "/Merito.webp",
          alt: "WSB Merito",
        },
        {
          index: 2,
          src: "/PS.webp",
          alt: "Politechnika Śląska",
        },
        {
          index: 3,
          src: "/Harvard.webp",
          alt: "Harvard",
        },
      ],
    },
  },
];

const rightGrid = [
  {
    id: 1,
    title: "Doświadczenie",
    content: {
      type: "images",
      images: [
        {
          index: 1,
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          alt: "Python",
        },
        {
          index: 2,
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          alt: "Django",
        },
        {
          index: 3,
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
          alt: "JavaScript",
        },
        {
          index: 4,
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
          alt: "TypeScript",
        },
        {
          index: 5,
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React",
        },
      ],
    },
  },
  {
    id: 2,
    title: "O mnie",
    content:
      "Przez mój 5-letni staż jako korepetytor rozumiem wagę wykluczenia wynikającego z braku dostępu do odpowiedniej edukacji w Polsce. Moim marzeniem jest stworzenie platformy e-learningowej, dostępnej dla wszystkich, w celu wyrównania szans rekrutacji do szkół i uczelni wyższych niezależnie od sytuacji materialnej dziecka.",
  },
  {
    title: "Chęć rozwoju",
    content:
      "Najbardziej interesuje mnie tworzenie full-stackowych aplikacji webowych. Lubię mieć wgląd w tworzenie modeli i logiki bazy danych oraz projektowanie i pisanie UI. Swoje prywatne projekty tworzę głównie w Django + React. Obecnie studiuję informatykę drugiego stopnia na uniwersytecie Merito w Chorzowie.",
  },
];

const portfolio = [
  {
    id: 1,
    title: "Squash 2",
    overview:
      "Aplikacja webowa korzystająca z Django i Django Tempaltes, pozwalająca na organizację turniejów squash. Pozwala na dodawanie i usuwanie graczy, wybór rodzaju turnieju, generowanie meczów, liczenie bilansu gier i punktów czy automatyczne tworzenie drabinek turniejowych. Wykorzystana w prawdziwym turnieju squash. ",
    link: "https://github.com/rafal-tomczyk/squash_2",
    image: "/portfolio/squash2.png",
  },
  {
    id: 2,
    title: "Backroads",
    overview:
      "Prosta, statyczna aplikacja webowa, przedstawiająca firmę organizującą wycieczki korzystająca z Reacta. W jej tworzeniu użyłem JS, HTML i CSS.",
    link: "https://github.com/rafal-tomczyk/backroads-app",
    image: "/portfolio/backroads.jpg",
  },
  {
    id: 3,
    title: "Knowli",
    overview:
      "Aplikacja webowa, stworzona w Django + Django templates oraz SQLite3, z możliwością wykonywania prostych testów matematycznych dla uczniów. Aplikacja obsługuje logowanie i rejestrację, zapisuje w bazie danych wyniki zalogowanych kont. Powstała jako projekt końcowy kursu Harvard CS50 web.",
    link: "https://github.com/rafal-tomczyk/Knowli",
    image: "/portfolio/knowli.jpeg",
  },
];

const data = { leftGrid, rightGrid, portfolio };

export default data;
