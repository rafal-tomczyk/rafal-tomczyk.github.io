const leftGrid = [
  {
    id: 1,
    title: "Hello World",
    content: "Jestem Rafał",
  },
  {
    id: 2,
    title: "Edukacja",
    content: {
      type: "images",
      images: [
        {
          index: 1,
          src: "/Merito.png",
          alt: "WSB Merito",
        },
        {
          index: 2,
          src: "/PS.png",
          alt: "Politechnika Śląska",
        },

        {
          index: 3,
          src: "/Harvard.png",
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
    content: 'Od zawsze byłem tym "komputerowym" w rodzinie, podłącz, przełącz, napraw...\nI choć w młodości bardzo tego nie chciałem, ostatecznie zacząłem wsiąkać w to coraz bardziej.\nOd paru lat zacząłem aktywnie kodować, czego owocem są przedstawione ponizej projekty\n\nNaukę rozpocząłem od kursu CS50, prowadzonego przez Davida J. Malana, a później juz poszło! \nObecnie studiuję informatykę drugiego stopnia na uniwersytecie Merito w Chorzowie. ',
  },
  {
    title:"Chęć rozwoju",
    content: "Największą pasją jest dla mnie tworzenie full-stackowych aplikacji webowych i w tej dziedzinie chciałbym się rozwijać. \nPodoba mi się mozliwość tworzenia modeli i logiki bazy danych oraz jednocześnie projektowanie i dbanie o UI"
  }
];

const data = { leftGrid, rightGrid };

export default data;
