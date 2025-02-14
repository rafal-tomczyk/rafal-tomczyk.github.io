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
          src: "/PS.png",
          alt: "Politechnika Śląska",
        },
        {
          index: 2,
          src: "/Merito.png",
          alt: "WSB Merito"
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
    content: "To jest drugi GridBox",
  },
];

const data = { leftGrid, rightGrid };

export default data;
