import { MailPlus, Github, Linkedin } from "lucide-react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <h1>Kontakt</h1>

      <a
        className="ft-a"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github /> Github
      </a>
      <a
        className="ft-a"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin /> LinkedIn
      </a>
      <p className="ft-a">
        <MailPlus /> rafal.tomczyk2000@gmail.com
      </p>
    </footer>
  );
};
export default Footer;
