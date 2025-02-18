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
      "Jako korepetytor z 5-letnim stażem rozumiem wagę wykluczenia wynikającego z braku dostępu do wysokiego poziomu edukacji. Moim marzeniem jest stworzenie platformy e-learningowej, dostępnej dla wszystkich uczniów w Polsce, w celu wyrównania szans rekrutacji do szkół i uczelni wyższych niezależnie od sytuacji materialnej dziecka.",
  },
  {
    title: "Chęć rozwoju",
    content:
      "W kodowaniu najbardziej interesuje mnie tworzenie full-stackowych aplikacji webowych. Lubię mieć wgląd w tworzenie modeli i logiki bazy danych oraz projektowanie i pisanie UI. Obecnie studiuję informatykę drugiego stopnia na uniwersytecie Merito w Chorzowie.",
  },
];

const portfolio = [
  {
    id: 1,
    title: "Squash 2",
    overview:
      "Aplikacja webowa wykonana w Django pozwalająca na organizację turniejów squash. Aplikacja pozwala na dodawanie i usuwanie graczy, wybór rodzaju turnieju, generowanie meczów, liczenie bilansu gier i punktów czy automatyczne tworzenie drabinek turniejowych",
    link: "https://github.com/rafal-tomczyk/squash_2",
    image: "/portfolio/squash2.png",
  },
  {
    id: 2,
    title: "Backroads",
    overview:
      "Prosta, statyczna aplikacja webowa, przedstawiająca firmę organizującą wycieczki korzystająca z Reacta.",
    link: "https://github.com/rafal-tomczyk/backroads-app",
    image: "/portfolio/backroads.jpg",
  },
  {
    id: 3,
    title: "Knowli",
    overview:
      "Aplikacja webowa, stworzona w Django, z możliwością wykonywania prostych testów matematycznych.",
    link: "https://github.com/rafal-tomczyk/Knowli",
    image: "/portfolio/knowli.jpeg",
  },
];

const data = { leftGrid, rightGrid, portfolio };

export default data;
