import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Box from "./components/Box";

function App() {
  return (
    <div className="container">
      <div className="left">
        <HelloWorld />
      </div>
      <div className="right">
        <Box title="Doświadczenie">
          <p>5 lat doświadczenia w programowaniu.</p>
        </Box>
        <Box title="Technologie">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            alt="Django"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript"/>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />
        </Box>
      </div>
    </div>
  );
}

export default App;
